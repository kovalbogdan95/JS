//Функция показывает какая дата была n-е количество дней назад от заданной
function getDateAgo(date, days) {
	return new Date( date.setDate( date.getDate() - days) );
}


var date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1));
