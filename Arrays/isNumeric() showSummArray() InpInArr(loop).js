//Проверяет на число
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



//Цикл запрашивает числа и пушит в массив
var arr = [];
while (true) {
    var enter = prompt("Enter number");
    if ( isNumeric(enter) ) {
      arr.push(+enter);
    } else {
      break;
    }
} alert(arr);


//Показывает сумму всех значений массива
function showSummArray(arr) {
  var summ = 0;
  for (var i = 0 ; i < arr.length ; i++) {
  summ += arr[i]; }
  alert(summ);
}

showSummArray(arr);
