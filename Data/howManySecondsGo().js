//Функция показывает сколько секкунд прошло
function howManySecondsGo() {
	var date = new Date();
	alert(date);
	var temp = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	alert(temp);
	var diff = date - temp;
	return Math.floor(diff/1000);
}

alert(howManySecondsGo());
