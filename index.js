module.exports = on;
module.exports.on = on;
module.exports.off = off;

function getElementsArray(elements) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}
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

function on(elements, types, listener, useCapture) {
	types = types.split(' ');
	elements = getElementsArray(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i].addEventListener(types[m], listener, useCapture);
		}
	}
}

function off(elements, types, listener, useCapture) {
	types = types.split(' ');
	elements = getElementsArray(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i].removeEventListener(types[m], listener, useCapture);
		}
	}
}
