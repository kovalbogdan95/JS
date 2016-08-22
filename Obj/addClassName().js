//Добавляет класс в свойство объекта

var obj = {
	className : 'open menu'
};

alert(obj.className);

function addClass(obj, value) {
    if ( obj.className.indexOf(value) == -1) {
    obj.className = obj.className + ' ' + value
    }
}

var value = prompt('value');
addClass(obj, value);
alert(obj.className);
