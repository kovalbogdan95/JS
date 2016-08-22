var arr = ["test", 2, 1.5, true];


// Находит заданное значение в массиве и возвращает его позицию
function findInArray(arr, value) {
  var possition = -1;
  var logic;
  if (value === 'false') {
    logic = false;
  } else if (value ==='true') {
    logic = true;
  }
  for (var i = 0; i < arr.length; i++) {
      if (value == arr[i] || arr[i] == logic) {
        possition = i;
      }
    }
    return possition;
}

var value = prompt('Enter value');
alert( findInArray(arr, value) );
//findInArray(arr, value);
