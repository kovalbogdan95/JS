/* Напишите функцию formatDate(date), которая форматирует дату date так:

Если со времени date прошло менее секунды, то возвращает "только что".
Иначе если со времени date прошло менее минуты, то "n сек. назад".
Иначе если прошло меньше часа, то "m мин. назад".
Иначе полная дата в формате "дд.мм.гг чч:мм".
Например:
*/
function formatDate(date) {
	var now = new Date(); 
	var diff = now - date;
	var options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

	if (diff  < 1000) {
			alert('tolko chto')
		} else if (diff < 60 * 1000) {
			alert(Math.floor(diff/1000) + ' sec. nazad');
		} else if (diff < 60 * 60 * 1000) {
			alert(Math.floor(diff/60000) + ' min. nazad' )
		} else if (diff > 60 * 60 * 1000)alert(date.toLocaleString("ru", options) );
}

formatDate(new Date(new Date - 1)) ; // "только что"

formatDate(new Date(new Date - 30 * 1000)) ; // "30 сек. назад"

formatDate(new Date(new Date - 5 * 60 * 1000)) ; // "5 мин. назад"

formatDate(new Date(new Date - 86400 * 1000)) ; // вчерашняя дата в формате "дд.мм.гг чч:мм"
