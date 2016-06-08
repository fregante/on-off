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

function hello () {
  console.log('hello!')
}
```

## Changelog

Version 1.0.0: Added test runner and removed IE8 support
Version 0.0.3: Republished 0.0.2
Version 0.0.2: Original version pre-liberation

## License

BSD, originally developed by [Azer Koçulu](http://azer.bike/), maintained by [Federico Brigante](https://twitter.com/bfred_it)