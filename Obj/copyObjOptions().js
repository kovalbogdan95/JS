//Функция объеденяет все свойства объектов в один
function copyObjOptions(src) {
  var obj = {};
  var temp;
    for (var i = 0; i < arguments.length; i++) {
      temp = arguments[i];
        for (var key in temp) {
          obj[key] = temp[key];
        }
      };
    return obj;
}



// Объеденяемые объекты
var vasya = {
  age: 21,
  name: 'Вася',
  surname: 'Петров'
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: 'My university'
};



var result = copyObjOptions(vasya, user, student);

//Выводим объедененный объект
for (var key in result) {
  alert(result[key]);
};
