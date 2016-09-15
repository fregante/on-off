var test = require("tape");
var on = require('./');
var off = on.off;

test('binds and unbinds a new event', function(t){
  document.body.innerHTML = '<button>Click Me</button>';
  var button = document.querySelector('button');

  t.plan(1);

  on(button, 'click', callback);

  setTimeout(function(){
    button.click();
  }, 100);

  function callback () {
    off(button, 'click', callback);
    button.click();
    t.ok(true);
  }
});

reset();

test('binds and unbinds a new event on multiple elements', function(t){
  document.body.innerHTML = '<button>Click Me</button><button>Click Me</button>';
  var buttons = document.querySelectorAll('button');

  t.plan(buttons.length);

  on(buttons, 'click', callback);

  setTimeout(function(){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].click();
    }
  }, 100);

  function callback () {
    off(this, 'click', callback);
    this.click();
    t.ok(true);
  }
});

function reset () {
}
