// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//Функция сщитает арифметическую прогрессию
funcrion sumTo(x, n) {
if (n !=1) {
              return x += sumTo(x, n-1)
     } else {return x}
}
