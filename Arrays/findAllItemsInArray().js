//Поиск по массиву. От indexOf() отличается тем, что находит все значения (даже если больше 1)
//Возвращает массив с индексами найденных значений.
//Если совпадений нет то пушит в массив 'no matches'


//        *** PROTOTYPE ***
var arr = ['e','e','e','efw','b','effefwef','e','e'];
var search = 'e';
var index = -1;
var result = [];

do {
     index = arr.indexOf(search, index+1);
   if (index != -1) result.push(index);
} while (index > -1);

if (!result.length) { result.push('no matches') };

alert(result);


//            *** FUNCTION ***

function findInArray(arr, search) {
  var index = -1;
  var result = [];
  do {
       index = arr.indexOf(search, index+1);
     if (index != -1) result.push(index);
  } while (index > -1);
  if (!result.length) { result.push(-1) };

 return result;
}
