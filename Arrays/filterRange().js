//          *** Аналогичная функция ***
// В сортированном массиве обрезает начало и конец не входящие в указанный диапазон

function createArray(arr, startPos, stopPos) {
    for (; startPos <= stopPos; startPos++) {
    arr.push(startPos);
  }
}


function filterRangeInPlace(arr, a, b) {
  alert(arr.indexOf(a));
  arr.splice(0, arr.indexOf(a));
  alert(arr.indexOf(b));
  arr.splice(arr.indexOf(b) + 1, arr.length - arr.indexOf(b) );
}

arr = [];

createArray(arr, 1, 100);

filterRangeInPlace(arr, 5, 77);

alert( arr );
