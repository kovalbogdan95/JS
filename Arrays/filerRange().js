var arr = [5, 4, 3, 8, 0];

//Фильтрирует массив на значения в диапазоне и возвращает массив с
// отфильтрованными значениями
function filterRange(arr, min, max) {
  var newArr = [];
  for (var i = 0 ;  i < arr.length ; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      newArr.push( arr[i] )
    }
  }
  return newArr;
}


var result = filterRange(arr, 3, 5);
alert(result);
