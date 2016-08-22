//Функция переберает массив и вместо найденного значения ставит Null
function findAndRemove(arr, param) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == param) {
      arr[i] = null;
    }
  }
}

//Решето Эрестфорда ( need findAndRemove() )
function Erestford(arr) {
  for (var i = 0; i < arr.length; i++) {
        for (var j = 2; j < arr.length; j++) {
              var temp = numbers[i] * j;
              findAndRemove(arr, temp);
        }
      }
}
