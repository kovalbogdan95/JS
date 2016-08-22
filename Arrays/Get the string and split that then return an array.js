//Принимает строку с числами/словами, разделенные пробелом, выводит строку вида
//слово..чило..слово....(через один) слова по убыванию, числа по возростанию


var symb = prompt("enter here your array");
var arr = symb.split(' ');
alert(arr);
arr.sort();
alert(arr);

for (var firstInt = 0 ;firstInt < arr.length; firstInt++) {
	if (isNaN( parseInt( arr[firstInt]) ) ) break ;
};

var Int = arr.splice(firstInt);
alert(arr);
alert(Int);
Int.reverse();
alert(Int);

var i = 0;
var result =[];
while (arr[i] || Int[i]) {
	if (arr[i]) result.push(arr[i]);
	if (Int[i]) result.push(Int[i]);
    i++;
};

alert( result.join(' '));


/*           Код с комментариями

//Принимает строку с числами/словами, разделенные пробелом, выводит строку вида
//слово..чило..слово....(через один) слова по убыванию, числа по возростанию

//принимаем строку, создаем из нее массив
var symb = prompt("enter here");
var arr = symb.split(' ');
alert(arr);
//сортируем по возрастанию (все)
arr.sort();
alert(arr);
//Производим поиск первого чила в массиве и запоминаем индекс этого числа
for (var firstInt = 0 ;firstInt < arr.length; firstInt++) {
	if (isNaN( parseInt( arr[firstInt]) ) ) break ;
};
//Делим на два массива (Слова, Числа)
var Int = arr.splice(firstInt);
alert(arr);
alert(Int);
//Разворачивам порядок слов
Int.reverse();
alert(Int);
// Создаем новый массив и по очереди пушим в него значения
// с ранее созданных массивов
var i = 0;
var result =[];
while (arr[i] || Int[i]) {
	if (arr[i]) result.push(arr[i]);
	if (Int[i]) result.push(Int[i]);
    i++;
};
//Выводим строкой
alert( result.join(' '));



//    *** РАННЯЯ ВЕРСИЯ ***

var symb = prompt("enter here");
var arr = symb.split(' ');
arr.sort();
for (var firstInt = 0;firstInt < arr.length; firstInt++) {
	if (isNaN( parseInt( arr[firstInt]) ) ) break ;
};
var Int = arr.splice(firstInt);
Int.reverse;
var i = 0;
var result =[];
while (arr[i] || Int[i]) {
	if (arr[i]) result.push(arr[i]);
	if (Int[i]) result.push(Int[i]);
};




alert( result);



*/
