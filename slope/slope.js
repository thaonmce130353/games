const buildUrl = "assets";
const loaderUrl = `${buildUrl}/loader.js`;

const config = {
  dataUrl: `${buildUrl}/build.data.gz`,
  frameworkUrl: `${buildUrl}/build.framework.js`,
  codeUrl: `${buildUrl}/build.wasm.gz`,
  streamingAssetsUrl: "StreamingAssets",
  productName: "Slope",
  productVersion: "1.4",
};

const container = document.querySelector("#unity-container");
const canvas = document.querySelector("#unity-canvas");
const loadingBar = document.querySelector("#unity-loading-bar");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
const fullscreenButton = document.querySelector("#unity-fullscreen-button");
const mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  container.className = "unity-mobile";
  config.devicePixelRatio = 1;
  mobileWarning.style.display = "block";
} else {
  canvas.style.width = "960px";
  canvas.style.height = "600px";
}

loadingBar.style.display = "block";
let myGameInstance = null;

const script = document.createElement("script");
script.onload = initializeUnityInstance;
script.src = loaderUrl;
document.body.appendChild(script);

function initializeUnityInstance() {
  createUnityInstance(canvas, config, updateProgressBar)
    .then((unityInstance) => {
      myGameInstance = unityInstance;
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    })
    .catch(showErrorMessage);
}

function updateProgressBar(progress) {
  progressBarFull.style.width = `${100 * progress}%`;
}

function showErrorMessage(message) {
  alert(message);
}
