// detect if user is using Internet Explorer and remove dark/light mode switch
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.getElementById('nav-height').style.display = 'none';
  document.getElementById('iconEmail').style.display = 'block';
} else {
  document.getElementById('iconEmail').style.display = 'none';
  document.getElementById('nav-height').style.display = 'block';
}