//Поиск простых чисел в диапазоне. !!!В РАЗРАБОТКЕ!!!
//n > 1
//n % ( b-1)
var intervalLower = prompt("enter lower border of diapason", 3);
var intervalUpper = prompt("enter upper border of diapason", 10);
var b = intervalLower - 1;
for (;intervalLower <= intervalUpper; intervalLower++) {
if (intervalLower > 1) {
alert(intervalLower);
b--;
};
//alert (intervalLower )
}
