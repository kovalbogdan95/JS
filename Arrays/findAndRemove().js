//Функция переберает массив и вместо найденного значения ставит Null
function findAndRemove(arr, param) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == param) {
      arr[i] = null;
    }
  }
}
