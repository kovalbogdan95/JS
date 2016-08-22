//Объявлени массива
var arr = ["voz", "kiborg", "korset", "zov", "grobik", "koster", "sektor", "echo", "slovo", 'baraban', 'grobik'];

var anag = [];
//Деклараця основой функии
//Копироване массива arr в массив anag
for (var i = 0; i < arr.length ; i++)  {anag[i] = arr[i]; };
//Разбиваем слова на буквы сортируем и кладем на место
for (var i = 0; i < arr.length ; i++)  {anag[i] = anag[i].split("").sort().join("") };

//Перебераем массив и ищем совпаденя

//Внешний цикл перебирает каждое свойство массива
	for (var i = 0; i < anag.length; i++) {
			var temp = anag[i];
               var count = 0;
			//Вложенный цикл сравнивает данное значенние со всми значениями массива
			for (var b = 0; b < anag.length; b++) {
			 //Первое слово не трогаем. Увеличиваем счетчик на один				
				if (anag[b] == temp && count == 0) {
					count++;
				} else if ( anag[b] == temp && count > 0) {      //Все последующие слова будут удалятся в оригинальном массиве
						arr[b] = ' ';
					};
			};
		};
	alert(arr.join('  ')); 

// Врешении задачи использовался обьект для записи слов
