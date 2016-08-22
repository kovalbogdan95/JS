//Функция возвращает сколько секунд осталось до завтра
function getSecondsToTomorrow() {
	var date = new Date();
	var tomorow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
	return Math.floor( (tomorow - date)/1000 );
}

alert( getSecondsToTomorrow() );
