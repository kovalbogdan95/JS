// Функция возвращает последнее значение из массива

var goods = [];

  for (var i = 0 ; i < 100 ; i++) goods[i] = i ;

  function returnLast(arr) {
    return arr[ arr.length -1 ]
  }

  alert( returnLast(goods) );
