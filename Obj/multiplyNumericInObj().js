//Функция удваивает все числовые свойства объекта
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

function multiply(obj)
          for (var prop in obj)
                      if (isNumeric(obj[prop]) obj[prop] = +obj[prop] * 2;




var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


alert(multiply(menu))
