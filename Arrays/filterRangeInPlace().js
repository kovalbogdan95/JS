// Функция удаляет все значения вне указанного диапазона

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );
