var useEvents = (typeof Event === 'function');

function myDispatchEvent(name) {
    var event;
    if (useEvents) {
        event = new Event(name);
    } else {
        event = document.createEvent('Event');
        event.initEvent(name, true, true);
    }
    document.getElementById("content").dispatchEvent(event);
}

window.GD_OPTIONS = {
    gameId: "3dbd133d0cd9468bafdf2c9812290f4b",
    onEvent: function (event) {
        switch (event.name) {
            case "SDK_GAME_START":
                myDispatchEvent('SDK_GAME_START');
                break;
            case "SDK_GAME_PAUSE":
                myDispatchEvent('SDK_GAME_PAUSE');
                break;
            case "SDK_GDPR_TRACKING":
                console.log("SDK_GDPR_TRACKING");
                break;
            case "SDK_GDPR_TARGETING":
                console.log("SDK_GDPR_TARGETING");
                break;
            case "SDK_READY":
                console.log("SDK_READY");
                break;
        }
    },
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'js/main.min.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'gamedistribution-jssdk'));
