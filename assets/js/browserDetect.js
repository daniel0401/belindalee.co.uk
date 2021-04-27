var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");
var isFirefox = winNav.userAgent.indexOf("Firefox") > -1;

if (isIOSChrome) {
    document.getElementById('colorDetect').style.display = 'none';
} else if (
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false &&
  isFirefox == false
) {
    document.getElementById('colorDetect').style.display = 'block';
} else { 
    document.getElementById('colorDetect').style.display = 'none';
}