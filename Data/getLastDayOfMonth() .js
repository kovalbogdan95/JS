//Функция выводит последнее число указанного месяца
function getLastDayOfMonth(year, month) {
	var date = new Date(year, month);
	alert(date.getMonth());
	date.setMonth( date.getMonth() + 1 );
	date.setDate( date.getDate() - 1);
	alert( date.getDate() );
}
getLastDayOfMonth(2012, 3 ) // 29
