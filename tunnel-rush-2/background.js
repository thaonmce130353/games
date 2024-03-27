chrome.runtime.onInstalled.addListener(function (object) {
	if (object.reason == "install") {
		chrome.tabs.create({
			url: "https://tunnelrush2.me/"

		});
	}
});

if (chrome.runtime.setUninstallURL) {
	chrome.runtime.setUninstallURL('https://tunnelrush2.me/');
} else {
}


chrome.action.onClicked.addListener(function (tab) {
	chrome.tabs.create({
		url: "game.html"
	});
});