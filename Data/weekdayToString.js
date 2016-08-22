//Форматирование дня недели в формате "пн"
var date = new Date(2014, 0, 16);
alert( date.toLocaleString('ru', {weekday : 'short'} ));
