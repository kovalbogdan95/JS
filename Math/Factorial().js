//Функция возвращает факториал числа
var x = +prompt("");
function facktorial(x) {
if (x != 1) { x *= facktorial(x-1); }
else {return x};
};
alert (facktorial(x));
