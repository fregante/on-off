function getElementsList(elements) {
	if (typeof elements === 'string') {
		return document.querySelectorAll(elements);
	}
	// if `elements` supports events directly (one element, document, window)
	if (typeof elements.addEventListener === 'function') {
		return [elements];
	}
	return elements;
}

function run(action, elements, types, listener, useCapture) {
	if (!elements) {
		return;
	}
	if (typeof types === 'string') {
		types = types.split(' ').filter();
	}
	elements = getElementsList(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i][action](types[m], listener, useCapture);
		}
	}
}

module.exports.on = run.bind(null, 'addEventListener');
module.exports.off = off.bind(null, 'removeEventListener');
