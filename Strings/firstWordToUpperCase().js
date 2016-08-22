//убирает "-" и следующую букву в верхний регистр
//Возвращает строку


// !!! Делает только для первого слова. Доделать !!!

var str = "s-ffdfd";
var result = firsWordToUpperCase(str);
alert(result);


function firsWordToUpperCase(str) {
  var arr = str.split('');
  var tire = arr.indexOf('-');
  tire++;
  var change = arr[tire];
  change = change.toUpperCase();
  arr.splice(tire-1, 1, change);
  return arr.join('');
}
