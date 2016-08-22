//Копирует массив и сортерует скопированный массив
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];
for (var i = 0; i < arr.length; i++) {
    arrSorted[i] = arr[i];
};
arrSorted.sort();
alert (arrSorted);
alert (arr);
