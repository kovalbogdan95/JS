/*            ***  Функция для работы со временем.   ***
 Функция умеет:
* Создавать новую точка отчета;
* Говорит сколько секунд прошло с момента установки точки;
* Выводит текущее время;
* Сохраняет сколько времени прошло с момента установки точки;
* Выводит сохраненное значение;
*/
function makeTime() {
  return {
    newPoint : function() {             // Новая точка отчета
      makeTime.time = new Date;
      alert('New Time Point : ' + makeTime.time);
    },
    timeCounter : function() {          // Сколько секунд прошло с момента установки точки
      var temp = new Date;
      var res = Math.floor( (temp - makeTime.time)/1000 );
      alert(res + " : Seconds Goes");
    },
    currentTime : function() {          // Вывести текущее время
      alert("Current Time : " + new Date);
    },
    saveTime : function() {             // Сохраняет сколько времени прошло с момента установки точки
      var temp = new Date;
      if (makeTime.time) { makeTime.save = Math.floor( (temp - makeTime.time)/1000 );
        alert("Time Point Saved"); } else {alert('Please Set Time Point')};
    },
    alertSavedTime : function() {       // Выводит сохраненное значение
      alert('Saved Time Point Is : ' + makeTime.save + ' sec.');
    }
  };
}

var t = makeTime();     // Присваеваем переменной функцию для удобства

// Бесконечный цыкл для опроса пользователя
while (true) {
  var variable = +prompt("1 - newPoint; 2 - timeCounter; 3 - currentTime; 4 - saveTime, 5 - alertSavedTime, 0 - break;", 0);
  if (variable == 0) break;
  switch (variable) {
    case 1 : t.newPoint();
    break;
    case 2 : t.timeCounter();
    break;
    case 3 : t.currentTime();
    break;
    case 4 : t.saveTime();
    break;
    case 5 : t.alertSavedTime();
    break;
  }
}
