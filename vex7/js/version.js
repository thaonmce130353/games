var _azerionIntegration = {
  rtgEnabled: true,
  lbEnabled: false,
  fbType: "dummy",
  alxType: "std",
  af: false,
  sa: false,
  la: false,
  bd: 0,
  playBtn: true,
  cp: false,
};
var libs = [];

var gameName = "vex7.min.js";

var enableAnalytics, azAdWrapper, _azFeedback;

var version = "";

var gdsdk = {
  sendEvent: () => { },
};