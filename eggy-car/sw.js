"use strict";

const OFFLINE_DATA_FILE = "offline.js";
const CACHE_NAME_PREFIX = "c2offline";
const BROADCASTCHANNEL_NAME = "offline";
const CONSOLE_PREFIX = "[SW] ";
const LAZYLOAD_KEYNAME = "";

// Create a BroadcastChannel if supported.
const broadcastChannel = (typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel(BROADCASTCHANNEL_NAME));

//////////////////////////////////////
// Utility methods
function PostBroadcastMessage(o)
{
	if (!broadcastChannel)
		return;		// not supported
	
	// Impose artificial (and arbitrary!) delay of 3 seconds to make sure client is listening by the time the message is sent.
	// Note we could remove the delay on some messages, but then we create a race condition where sometimes messages can arrive
	// in the wrong order (e.g. "update ready" arrives before "started downloading update"). So to keep the consistent ordering,
	// delay all messages by the same amount.
	setTimeout(() => broadcastChannel.postMessage(o), 3000);
};

function Broadcast(type)
{
	PostBroadcastMessage({
		"type": type
	});
};

function BroadcastDownloadingUpdate(version)
{
	PostBroadcastMessage({
		"type": "downloading-update",
		"version": version
	});
}

function BroadcastUpdateReady(version)
{
	PostBroadcastMessage({
		"type": "update-ready",
		"version": version
	});
}

function IsUrlInLazyLoadList(url, lazyLoadList)
{
	if (!lazyLoadList)
		return false;		// presumably lazy load list failed to load
	
	try {
		for (const lazyLoadRegex of lazyLoadList)
		{
			if (new RegExp(lazyLoadRegex).test(url))
				return true;
		}
	}
	catch (err)
	{
		console.error(CONSOLE_PREFIX + "Error matching in lazy-load list: ", err);
	}
	
	return false;
};

function WriteLazyLoadListToStorage(lazyLoadList)
{
	if (typeof localforage === "undefined")
		return Promise.resolve();		// bypass if localforage not imported
	else
		return localforage.setItem(LAZYLOAD_KEYNAME, lazyLoadList)
};

function ReadLazyLoadListFromStorage()
{
	if (typeof localforage === "undefined")
		return Promise.resolve([]);		// bypass if localforage not imported
	else
		return localforage.getItem(LAZYLOAD_KEYNAME);
};

function GetCacheBaseName()
{
	// Include the scope to avoid name collisions with any other SWs on the same origin.
	// e.g. "c2offline-https://example.com/foo/" (won't collide with anything under bar/)
	return CACHE_NAME_PREFIX + "-" + self.registration.scope;
};

function GetCacheVersionName(version)
{
	return GetCacheBaseName() + "-v" + version;
};
async function GetAvailableCacheNames()
{
	const cacheNames = await caches.keys();
	const cacheBaseName = GetCacheBaseName();
	return cacheNames.filter(n => n.startsWith(cacheBaseName));
};
async function IsUpdatePending()
{
	const availableCacheNames = await GetAvailableCacheNames();
	return (availableCacheNames.length >= 2);
};
async function GetMainPageUrl()
{
	const allClients = await clients.matchAll({
		includeUncontrolled: true,
		type: "window"
	});
	
	for (const c of allClients)
	{
		let url = c.url;
		if (url.startsWith(self.registration.scope))
			url = url.substring(self.registration.scope.length);
		
		if (url && url !== "/")
		{
			if (url.startsWith("?"))
				url = "/" + url;
			
			return url;
		}
	}
	
	return "";		// no main page URL could be identified
};

function fetchWithBypass(request, bypassCache)
{
	if (typeof request === "string")
		request = new Request(request);
	
	if (bypassCache)
	{
		const url = new URL(request.url);
		url.search += Math.floor(Math.random() * 1000000);

		return fetch(url, {
			headers: request.headers,
			mode: request.mode,
			credentials: request.credentials,
			redirect: request.redirect,
			cache: "no-store"
		});
	}
	else
	{
		return fetch(request);
	}
};

async function CreateCacheFromFileList(cacheName, fileList, bypassCache)
{
	const responses = await Promise.all(fileList.map(url => fetchWithBypass(url, bypassCache)));
	
	let allOk = true;
	
	for (const response of responses)
	{
		if (!response.ok)
		{
			allOk = false;
			console.error(CONSOLE_PREFIX + "Error fetching '" + response.url + "' (" + response.status + " " + response.statusText + ")");
		}
	}
	
	if (!allOk)
		throw new Error("not all resources were fetched successfully");

	const cache = await caches.open(cacheName);
	
	try {
		return await Promise.all(responses.map(
			(response, i) => cache.put(fileList[i], response)
		));
	}
	catch (err)
	{
		console.error(CONSOLE_PREFIX + "Error writing cache entries: ", err);
		caches.delete(cacheName);
		throw err;
	}
};

async function UpdateCheck(isFirst)
{
	try {
		const response = await fetchWithBypass(OFFLINE_DATA_FILE, true);
		
		if (!response.ok)
			throw new Error(OFFLINE_DATA_FILE + " responded with " + response.status + " " + response.statusText);
			
		const data = await response.json();
		
		const version = data.version;
		const fileList = data.fileList;
		const lazyLoadList = data.lazyLoad;
		const currentCacheName = GetCacheVersionName(version);
		
		const cacheExists = await caches.has(currentCacheName);

		if (cacheExists)
		{
			const isUpdatePending = await IsUpdatePending();
			if (isUpdatePending)
			{
				console.log(CONSOLE_PREFIX + "Update pending");
				Broadcast("update-pending");
			}
			else
			{
				console.log(CONSOLE_PREFIX + "Up to date");
				Broadcast("up-to-date");
			}
			return;
		}
		
		const mainPageUrl = await GetMainPageUrl();
		
		fileList.unshift("./");
		
		if (mainPageUrl && fileList.indexOf(mainPageUrl) === -1)
			fileList.unshift(mainPageUrl);
		
		console.log(CONSOLE_PREFIX + "Caching " + fileList.length + " files for offline use");
		
		if (isFirst)
			Broadcast("downloading");
		else
			BroadcastDownloadingUpdate(version);
		
		if (lazyLoadList)
			await WriteLazyLoadListToStorage(lazyLoadList);							// dump lazy load list to local storage#
		
		await CreateCacheFromFileList(currentCacheName, fileList, !isFirst);
		const isUpdatePending = await IsUpdatePending();
		
		if (isUpdatePending)
		{
			console.log(CONSOLE_PREFIX + "All resources saved, update ready");
			BroadcastUpdateReady(version);
		}
		else
		{
			console.log(CONSOLE_PREFIX + "All resources saved, offline support ready");
			Broadcast("offline-ready");
		}
	}
	catch (err)
	{
		console.warn(CONSOLE_PREFIX + "Update check failed: ", err);
	}
};

self.addEventListener("install", event =>
{
	event.waitUntil(
		UpdateCheck(true)		// first update
		.catch(() => null)
	);
});

async function GetCacheNameToUse(availableCacheNames, doUpdateCheck)
{
	if (availableCacheNames.length === 1 || !doUpdateCheck)
		return availableCacheNames[0];
	
	const allClients = await clients.matchAll();
	
	if (allClients.length > 1)
		return availableCacheNames[0];
	
	const latestCacheName = availableCacheNames[availableCacheNames.length - 1];
	console.log(CONSOLE_PREFIX + "Updating to new version");
	
	await Promise.all(
		availableCacheNames.slice(0, -1)
		.map(c => caches.delete(c))
	);
	
	return latestCacheName;
};

async function HandleFetch(event, doUpdateCheck)
{
	const availableCacheNames = await GetAvailableCacheNames();
	
	// No caches available: go to network
	if (!availableCacheNames.length)
		return fetch(event.request);
	
	const useCacheName = await GetCacheNameToUse(availableCacheNames, doUpdateCheck);
	const cache = await caches.open(useCacheName);
	const cachedResponse = await cache.match(event.request);
	
	if (cachedResponse)
		return cachedResponse;		// use cached response
	
	// We need to check if this request is to be lazy-cached. Send the request and load the lazy-load list
	// from storage simultaneously.
	const result = await Promise.all([fetch(event.request), ReadLazyLoadListFromStorage()]);
	const fetchResponse = result[0];
	const lazyLoadList = result[1];
	
	if (IsUrlInLazyLoadList(event.request.url, lazyLoadList))
	{
		// Handle failure writing to the cache. This can happen if the storage quota is exceeded, which is particularly
		// likely in Safari 11.1, which appears to have very tight storage limits. Make sure even in the event of an error
		// we continue to return the response from the fetch.
		try {
			// Note clone response since we also respond with it
			await cache.put(event.request, fetchResponse.clone());
		}
		catch (err)
		{
			console.warn(CONSOLE_PREFIX + "Error caching '" + event.request.url + "': ", err);
		}
	}
		
	return fetchResponse;
};

self.addEventListener("fetch", event =>
{
	/** NOTE (iain)
	 *  This check is to prevent a bug with XMLHttpRequest where if its
	 *  proxied with "FetchEvent.prototype.respondWith" no upload progress
	 *  events are triggered. By returning we allow the default action to
	 *  occur instead. Currently all cross-origin requests fall back to default.
	 */
	if (new URL(event.request.url).origin !== location.origin)
		return;
		
	// Check for an update on navigate requests
	const doUpdateCheck = (event.request.mode === "navigate");
	
	const responsePromise = HandleFetch(event, doUpdateCheck);

	if (doUpdateCheck)
	{
		// allow the main request to complete, then check for updates
		event.waitUntil(
			responsePromise
			.then(() => UpdateCheck(false))		 // not first check
		);
	}

	event.respondWith(responsePromise);
});