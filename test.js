var test = require("tape");
var on = require('./');
var off = on.off;

test('binds and unbinds a new event', function(t){
  document.body.innerHTML = '<button>Click Me</button>';
  var button = document.querySelector('button');

  t.plan(1);

  on(button, 'click', callback);
  button.click();

  function callback () {
    off(button, 'click', callback);
    button.click();
    t.ok(true);
  }
});

test('binds and unbinds a new event on multiple elements', function(t){
  document.body.innerHTML = '<button>Click Me</button><button>Click Me</button>';
  var buttons = document.querySelectorAll('button');

  t.plan(buttons.length);

  on(buttons, 'click', callback);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click();
  }

  setTimeout(function(){
    off(buttons, 'click', callback);
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  }, 300);

  function callback () {
    t.ok(true);
  }
});

test('binds multiple events', function(t){
  document.body.innerHTML = '<button>Click Me</button>';
  var button = document.querySelector('button');

  t.plan(2);

  on(button, 'click touchstart', callback);
  button.dispatchEvent(new Event('click'));
  button.dispatchEvent(new Event('touchstart'));

  setTimeout(function(){
    off(button, 'click touchstart', callback);
    button.dispatchEvent(new Event('click'));
    button.dispatchEvent(new Event('touchstart'));
  }, 300);

  function callback () {
    t.ok(true);
  }
});
