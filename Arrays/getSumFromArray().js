//Функция суммирует все значения массива и возвращает их
function getSumFromArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
