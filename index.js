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

function run(action, elements, types, listener, useCapture) {
	types = types.split(' ').filter();
	elements = getElementsList(elements);
	var i, l, m, n;
	for (i = 0, l = elements.length; i < l; i++) {
		for (m = 0, n = types.length; m < n; m++) {
			elements[i][action](types[m], listener, useCapture);
		}
	}
}

module.exports.on = module.exports = run.bind(null, 'addEventListener');
module.exports.off = off.bind(null, 'removeEventListener');
