document.addEventListener("DOMContentLoaded", function () {
  !(function (e) {
    var t = document.createElement("style");
    (t.type = "text/css"),
      t.styleSheet
        ? (t.styleSheet.cssText = e)
        : t.appendChild(document.createTextNode(e));
    document.getElementsByTagName("head")[0].appendChild(t);
  })(
    "#button {\n  display:none;\n}\n.imgb_vis {\n  animation: imgb-animation 7s linear;\n}\n@keyframes imgb-animation {\n  10% {\n    transform: translateX(0);\n  }\n  20% {\n    transform: translateX(100px);\n  }\n  90% {\n    transform: translateX(100px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}"
  );
});
