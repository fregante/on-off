# on-off

Add/remove DOM events

## Install

```bash
$ npm install on-off --save
```

## Usage

```js
var on = require('on-off')
var off = on.off

on(document.body, 'click', hello) // adds the event listener
off(document.body, 'click', hello) // removes

on(document.body.children, 'click', hello) // add to array or NodeList of elements elements
on('a', 'click', hello) // add to multiple elements via selector
on('a', 'click touchstart', hello) // add multiple listeners at once

function hello () {
  console.log('hello!')
}
```

## Related

* [bfred-it/select-dom](https://github.com/bfred-it/select-dom) Slim alternative to `document.querySelector/All`

## Changelog

* Version 3.0.0: Added support for multiple elements, selectors, and multiple types
* Version 1.0.0: Added test runner and removed IE8 support
* Version 0.0.3: Republished 0.0.2
* Version 0.0.2: Original version pre-liberation

## License

BSD, originally developed by [Azer Koçulu](http://azer.bike/), maintained by [Federico Brigante](https://twitter.com/bfred_it) after v1