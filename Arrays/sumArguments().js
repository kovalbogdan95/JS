//Функция возвращает сумму всех переданных аргументов

function sumArg() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

alert( sumArg(1, 2, 3, 4) );
