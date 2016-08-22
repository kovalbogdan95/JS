//Возвращает массив с значениями длины слов
var arr = ["Est", "Jizn", "na", 'Marse'];

var arrLength = arr.map(function(name) {
      return name.length; 
  }
)

alert( arrLength ); // 4,5,2,5