// Функция возвращает 1 если аргументы переданы в функцию и 0 если нет
function f(x) {
  return arguments.length ? 1 : 0;
}

// alert(f(undefined)); // 1
// alert(f()); // 0

// Только если не false
function f(x) {
  return arguments[0] ? 1 : 0 ;
}
