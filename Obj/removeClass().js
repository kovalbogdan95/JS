// Функция удаляет класс из объекта

function findAndRemove(arr, param) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == param) {
      delete arr[i];
      i--;   // Добавил эту строчку так как в ответе на задание была похожая вещь
             // но без нее тоже все работало.
    }
  }
}

function removeClass(obj, value) {
    if ( obj.className.indexOf(value) != -1) {
    var arr = obj.className.split(' ');
    findAndRemove(arr, value);
    obj.className = arr.join(' ');
    }
}

var obj = {
	className : 'my menu menu'
};

alert(obj.className);
var value = prompt('value');
removeClass(obj, value);
alert(obj.className);
