//Рандомизация массива
var arr = [];
for (var i = 0; i < 100; i++) {
arr[i] = -i;
}

arr.sort(fn);
alert(arr);

function fn() {
    return Math.random() > 0.5 ? 1 : -1 ;
}
