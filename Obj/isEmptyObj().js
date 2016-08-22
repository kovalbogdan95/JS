/*
Функция isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
*/

//Функция аналогична isEmpty
function isEmptyAnother(obj) {
    return Object.keys(obj).length ? false : true ;
}


function isEmpty(obj) {
    var numb = 0;
    for (var key in obj) {
        numb++;
    };
    return numb > 0 ? false : true ;
    //return numb;
}

var objEmp = {};
var objFull = {
    par : 122,
    sdfs: 344
}
alert( isEmpty(objEmp) );
alert( isEmpty(objFull) );
