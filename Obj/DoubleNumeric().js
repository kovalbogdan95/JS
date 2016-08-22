// Функция проверяет на число\нечисло и возващет true \ false
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
// Функция удваивает все числовые свойства объекта
function multiplyNumeric(obj) {
  for (var keys in obj) {
    if ( isNumeric(obj[keys]) ) {
      obj[keys] = obj[keys] * 2;
    }
  }
}



var menu = {
  "Вася": 100,
  "Петя": 300,
  "Даша": "dfvdfvdf"
};
multiplyNumeric(menu);


for (var keys in menu) { alert(menu[keys]) };
