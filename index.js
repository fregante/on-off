module.exports = on;
module.exports.on = on;
module.exports.off = off;

function getElementsArray(elements) {
	if (!elements) {
		return [];
	}
	// some elements are array-like (<form> has a .length) so they need to be stopped here
	if (elements instanceof HTMLElement || elements === document) {
		return [elements];
	}
	if (Array.isArray(elements)) {
		return elements;
	}
	if (Array.from) {
		return Array.from(elements);
	}
	return Array.prototype.slice.call(elements);
}

function on(elements, type, listener, useCapture) {
	elements = getElementsArray(elements);
	for (var i = 0, l = elements.length; i < l; i++) {
		elements[i].addEventListener(type, listener, useCapture);
	}
}

function off(elements, type, listener, useCapture) {
	elements = getElementsArray(elements);
	for (var i = 0, l = elements.length; i < l; i++) {
		elements[i].removeEventListener(type, listener, useCapture);
	}
}
