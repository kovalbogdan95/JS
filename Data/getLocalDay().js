//Функция возвращает день недели в формате 1 -7 
 function getLocalDay(date) {
	 var res = 0;
	 var d = date.getDay();
	 if (d == 0) {
		 res = 7;
		 } else {res = d};
		 //return res;


		 return date.getDay() == 0 ? 7 : date.getDay();
	}

	var date = new Date(2012, 0, 8);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
