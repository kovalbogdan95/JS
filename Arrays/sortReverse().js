// Сортировка в обратном порядке

var arr = [5, 2, 1, -10, 8];

function compareNumeric(a, b) {
  return -(a - b) ;
}


arr.sort(compareNumeric);
alert(arr);
