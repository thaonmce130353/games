let highscore_share = 0;
var savedscore = getCookie("highscore");
"" != savedscore && (highscore_share = parseInt(savedscore));
let homePage = chrome.runtime.getManifest().homepage_url,
    shareText = "I just scored " + highscore_share + " points in the HTML5 Flappy Bird game! ";
var myParam = location.search.split("mode=")[1],
    fullBtn = document.querySelector("#fullbtn"),
    coverEle = document.querySelectorAll(".cover");

function getCookie(e) {
    for (var t = e + "=", r = document.cookie.split(";"), a = 0; a < r.length; a++) {
        var h = r[a].trim();
        if (0 == h.indexOf(t)) return h.substring(t.length, h.length)
    }
    return ""
}

document.querySelector("#more-game").setAttribute("href", "https://games777.io/");