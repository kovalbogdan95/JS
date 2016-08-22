//Форматирует дату в вид дд.мм.гг
var date = new Date(2001, 0, 1, 12, 30, 0);

var options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
  };

  alert( date.toLocaleString("ru", options) );
