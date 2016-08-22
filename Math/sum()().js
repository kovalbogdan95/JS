// Функция sum, которая работает так: sum(a)(b) = a+b.

alert( sum(1)(2) );
alert( sum(5)(-1) );

function sum(a) {

  var func = function(b) {return a + b};

  return func;
}
