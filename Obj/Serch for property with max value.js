"use strict";
//Проверяет на пустоту и если объект пуст то выводит сообщение 'obj empty',
//если нет, то исчет максимальное свойство объекта
function isEmptyAnother(obj) {
    return Object.keys(obj).length ? false : true ;
};

var salaries = {

};

if ( isEmptyAnother(salaries) ) {
        alert('obj empty')
    } else {
        var max = 0
        for (var prop in salaries) {
            if (salaries[prop] > max) {max = salaries[prop];}
};
alert(max);
    }
