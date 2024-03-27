function createUnityInstance(f, b, c) {
  function d(c) {
    var b =
        "unhandledrejection" == c.type && "object" == typeof c.reason
          ? c.reason
          : "object" == typeof c.error
          ? c.error
          : null,
      d = b
        ? b.toString()
        : "string" == typeof c.message
        ? c.message
        : "string" == typeof c.reason
        ? c.reason
        : "";
    if (
      (b &&
        "string" == typeof b.stack &&
        (d +=
          "\n" +
          b.stack
            .substring(b.stack.lastIndexOf(d, 0) ? 0 : d.length)
            .replace(/(^\n*|\n*$)/g, "")),
      d && a.stackTraceRegExp && a.stackTraceRegExp.test(d))
    ) {
      var e =
          c instanceof ErrorEvent
            ? c.filename
            : b && "string" == typeof b.fileName
            ? b.fileName
            : b && "string" == typeof b.sourceURL
            ? b.sourceURL
            : "",
        f =
          c instanceof ErrorEvent
            ? c.lineno
            : b && "number" == typeof b.lineNumber
            ? b.lineNumber
            : b && "number" == typeof b.line
            ? b.line
            : 0;
      i(d, e, f);
    }
  }
  function h(a) {
    a.preventDefault();
  }
  function i(b, c, d) {
    if (a.startupErrorHandler) return void a.startupErrorHandler(b, c, d);
    if (
      !(
        (a.errorHandler && a.errorHandler(b, c, d)) ||
        (console.log("Invoking error handler due to\n" + b),
        "function" == typeof dump &&
          dump("Invoking error handler due to\n" + b),
        -1 != b.indexOf("UnknownError") ||
          -1 != b.indexOf("Program terminated with exit(0)") ||
          i.didShowErrorMessage)
      )
    ) {
      var b =
        "An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n" +
        b;
      -1 != b.indexOf("DISABLE_EXCEPTION_CATCHING")
        ? (b =
            "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.")
        : -1 != b.indexOf("Cannot enlarge memory arrays")
        ? (b =
            "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.")
        : (-1 == b.indexOf("Invalid array buffer length") &&
            -1 == b.indexOf("Invalid typed array length") &&
            -1 == b.indexOf("out of memory") &&
            -1 == b.indexOf("could not allocate memory")) ||
          (b =
            "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),
        alert(b),
        (i.didShowErrorMessage = !0);
    }
  }
  function j(e, d) {
    if ("symbolsUrl" != e) {
      var b = a.downloadProgress[e];
      b ||
        (b = a.downloadProgress[e] =
          {
            started: !1,
            finished: !1,
            lengthComputable: !1,
            total: 0,
            loaded: 0,
          }),
        "object" != typeof d ||
          ("progress" != d.type && "load" != d.type) ||
          (b.started ||
            ((b.started = !0),
            (b.lengthComputable = d.lengthComputable),
            (b.total = d.total)),
          (b.loaded = d.loaded),
          "load" == d.type && (b.finished = !0));
      var h = 0,
        f = 0,
        g = 0,
        i = 0,
        j = 0;
      for (var e in a.downloadProgress) {
        var b = a.downloadProgress[e];
        if (!b.started) return 0;
        g++,
          b.lengthComputable
            ? ((h += b.loaded), (f += b.total), i++)
            : b.finished || j++;
      }
      c(0.9 * (g ? (g - j - (f ? (i * (f - h)) / f : 0)) / g : 0));
    }
  }
  c = c || function () {};
  var a = {
    canvas: f,
    webglContextAttributes: { preserveDrawingBuffer: !1 },
    streamingAssetsUrl: "StreamingAssets",
    downloadProgress: {},
    deinitializers: [],
    intervals: {},
    setInterval: function (b, c) {
      var a = window.setInterval(b, c);
      return (this.intervals[a] = !0), a;
    },
    clearInterval: function (a) {
      delete this.intervals[a], window.clearInterval(a);
    },
    preRun: [],
    postRun: [],
    print: function (a) {
      console.log(a);
    },
    printErr: function (a) {
      console.error(a);
    },
    locateFile: function (a) {
      return "build.wasm" == a ? this.codeUrl : a;
    },
    disabledCanvasEvents: ["contextmenu", "dragstart"],
  };
  for (var e in b) a[e] = b[e];
  a.streamingAssetsUrl = new URL(a.streamingAssetsUrl, document.URL).href;
  var g = a.disabledCanvasEvents.slice();
  g.forEach(function (a) {
    f.addEventListener(a, h);
  }),
    window.addEventListener("error", d),
    window.addEventListener("unhandledrejection", d);
  var k = {
    Module: a,
    SetFullscreen: function () {
      return a.SetFullscreen
        ? a.SetFullscreen.apply(a, arguments)
        : void a.print("Failed to set Fullscreen mode: Player not loaded yet.");
    },
    SendMessage: function () {
      return a.SendMessage
        ? a.SendMessage.apply(a, arguments)
        : void a.print("Failed to execute SendMessage: Player not loaded yet.");
    },
    Quit: function () {
      return new Promise(function (b, c) {
        (a.shouldQuit = !0),
          (a.onQuit = b),
          g.forEach(function (a) {
            f.removeEventListener(a, h);
          }),
          window.removeEventListener("error", d),
          window.removeEventListener("unhandledrejection", d);
      });
    },
  };
  return (
    (a.SystemInfo = (function () {
      function d(a, b, c) {
        return (a = RegExp(a, "i").exec(b)) && a[c];
      }
      for (
        var e,
          b,
          k,
          a,
          f,
          l,
          c = navigator.userAgent + " ",
          i = [
            ["Firefox", "Firefox"],
            ["OPR", "Opera"],
            ["Edg", "Edge"],
            ["SamsungBrowser", "Samsung Browser"],
            ["Trident", "Internet Explorer"],
            ["MSIE", "Internet Explorer"],
            ["Chrome", "Chrome"],
            ["CriOS", "Chrome on iOS Safari"],
            ["FxiOS", "Firefox on iOS Safari"],
            ["Safari", "Safari"],
          ],
          g = 0;
        g < i.length;
        ++g
      )
        if ((b = d(i[g][0] + "[/ ](.*?)[ \\)]", c, 1))) {
          e = i[g][1];
          break;
        }
      "Safari" == e && (b = d("Version/(.*?) ", c, 1)),
        "Internet Explorer" == e && (b = d("rv:(.*?)\\)? ", c, 1) || b);
      for (
        var j = [
            ["Windows (.*?)[;)]", "Windows"],
            ["Android ([0-9_.]+)", "Android"],
            ["iPhone OS ([0-9_.]+)", "iPhoneOS"],
            ["iPad.*? OS ([0-9_.]+)", "iPadOS"],
            ["FreeBSD( )", "FreeBSD"],
            ["OpenBSD( )", "OpenBSD"],
            ["Linux|X11()", "Linux"],
            ["Mac OS X ([0-9_.]+)", "macOS"],
            ["bot|google|baidu|bing|msn|teoma|slurp|yandex", "Search Bot"],
          ],
          h = 0;
        h < j.length;
        ++h
      )
        if ((a = d(j[h][0], c, 1))) {
          (k = j[h][1]), (a = a.replace(/_/g, "."));
          break;
        }
      (a =
        {
          "NT 5.0": "2000",
          "NT 5.1": "XP",
          "NT 5.2": "Server 2003",
          "NT 6.0": "Vista",
          "NT 6.1": "7",
          "NT 6.2": "8",
          "NT 6.3": "8.1",
          "NT 10.0": "10",
        }[a] || a),
        (f = document.createElement("canvas")) &&
          ((glVersion = (gl = f.getContext("webgl2")) ? 2 : 0),
          gl || ((gl = f && f.getContext("webgl")) && (glVersion = 1)),
          gl &&
            (l =
              (gl.getExtension("WEBGL_debug_renderer_info") &&
                gl.getParameter(37446)) ||
              gl.getParameter(7937)));
      var m = "undefined" != typeof SharedArrayBuffer,
        n =
          "object" == typeof WebAssembly &&
          "function" == typeof WebAssembly.compile;
      return {
        width: screen.width,
        height: screen.height,
        userAgent: c.trim(),
        browser: e || "Unknown browser",
        browserVersion: b || "Unknown version",
        mobile: /Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),
        os: k || "Unknown OS",
        osVersion: a || "Unknown OS Version",
        gpu: l || "Unknown GPU",
        language: navigator.userLanguage || navigator.language,
        hasWebGL: glVersion,
        hasCursorLock: !!document.body.requestPointerLock,
        hasFullscreen: !!document.body.requestFullscreen,
        hasThreads: m,
        hasWasm: n,
        hasWasmThreads: !1,
      };
    })()),
    (a.abortHandler = function (a) {
      return i(a, "", 0), !0;
    }),
    (Error.stackTraceLimit = Math.max(Error.stackTraceLimit || 0, 50)),
    new Promise(function (f, b) {
      var d, e;
      a.SystemInfo.hasWebGL
        ? a.SystemInfo.hasWasm
          ? (1 == a.SystemInfo.hasWebGL &&
              a.print(
                'Warning: Your browser does not support "WebGL 2.0" Graphics API, switching to "WebGL 1.0"'
              ),
            (a.startupErrorHandler = b),
            c(0),
            a.postRun.push(function () {
              c(1), delete a.startupErrorHandler, f(k);
            }),
            new Promise(function (c, d) {
              var b = document.createElement("script");
              (b.src = a.frameworkUrl),
                (b.onload = function () {
                  var a = unityFramework;
                  (unityFramework = null), (b.onload = null), c(a);
                }),
                document.body.appendChild(b),
                a.deinitializers.push(function () {
                  document.body.removeChild(b);
                });
            }).then(function (b) {
              b(a);
            }),
            (e =
              ((d = "dataUrl"),
              new Promise(function (c, e) {
                j(d);
                var b = new XMLHttpRequest();
                b.open("GET", a[d]),
                  (b.responseType = "arraybuffer"),
                  b.addEventListener("progress", function (a) {
                    j(d, a);
                  }),
                  b.addEventListener("load", function (a) {
                    j(d, a), c(new Uint8Array(b.response));
                  }),
                  b.send();
              }))),
            a.preRun.push(function () {
              a.addRunDependency("dataUrl"),
                e.then(function (c) {
                  var f = new DataView(c.buffer, c.byteOffset, c.byteLength),
                    b = 0,
                    h = "UnityWebData1.0\0";
                  if (
                    !String.fromCharCode.apply(
                      null,
                      c.subarray(b, b + h.length)
                    ) == h
                  )
                    throw "unknown data format";
                  b += h.length;
                  var k = f.getUint32(b, !0);
                  for (b += 4; b < k; ) {
                    var i = f.getUint32(b, !0);
                    b += 4;
                    var l = f.getUint32(b, !0);
                    b += 4;
                    var j = f.getUint32(b, !0);
                    b += 4;
                    var d = String.fromCharCode.apply(
                      null,
                      c.subarray(b, b + j)
                    );
                    b += j;
                    for (
                      var e = 0, g = d.indexOf("/", e) + 1;
                      g > 0;
                      e = g, g = d.indexOf("/", e) + 1
                    )
                      a.FS_createPath(
                        d.substring(0, e),
                        d.substring(e, g - 1),
                        !0,
                        !0
                      );
                    a.FS_createDataFile(
                      d,
                      null,
                      c.subarray(i, i + l),
                      !0,
                      !0,
                      !0
                    );
                  }
                  a.removeRunDependency("dataUrl");
                });
            }))
          : b("Your browser does not support WebAssembly.")
        : b("Your browser does not support WebGL.");
    })
  );
}
