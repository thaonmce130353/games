
const urlParams = new URLSearchParams(window.location.search);
const gameURL = urlParams.get('game');
window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  player.style.width = "900px";
  player.style.height = "680px";
  const container = document.getElementById("game");
  container.appendChild(player);
  player.load(gameURL + ".swf");
});
