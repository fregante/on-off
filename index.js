module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, type, listener, useCapture) {
  element.addEventListener(type, listener, useCapture);
  return listener;
}

function off (element, type, listener, useCapture) {
  element.removeEventListener(type, listener, useCapture);
  return listener;
}
