//               *** ФУНКЦИИ ***

//Функция создает массив со значениями в указанном диапазоне
function createArray(arr, startPos, stopPos) {
    for (; startPos <= stopPos; startPos++) {
    arr.push(startPos);
  }
}

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


//Функция суммирует все значения массива и возвращает их
function getSumFromArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}





//             *** ТЕЛО ПРОГРАММЫ ***

//Создаем массив со значениями от 2 до 120
var numbers = [];
  createArray(numbers, 2, 150);
  alert(numbers);


//Применяем решето Эрестфорда для numbers
Erestford(numbers);


//Выводим numbers
alert(numbers);


//Выводим сумму значений массива
alert( getSumFromArray(numbers) );
