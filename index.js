module.exports = on;
module.exports.on = on;
module.exports.off = off;

function getElementsList(elements) {
	if (typeof elements === 'string') {
		elements = document.querySelectorAll(elements);
	}
	if (!elements) {
		return [];
	}
	// if elements is actually just one element or window or document
	if (typeof elements.addEventListener === 'function') {
		return [elements];
	}
	return elements;
}

function on(elements, types, listener, useCapture) {
	types = types.split(' ');
	elements = getElementsList(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i].addEventListener(types[m], listener, useCapture);
		}
	}
}

function off(elements, types, listener, useCapture) {
	types = types.split(' ');
	elements = getElementsList(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i].removeEventListener(types[m], listener, useCapture);
		}
	}
}
