// Функция удаляет анаграммы из массива
var arr = ["voz", "kiborg", "korset", "zov", "grobik", "koster", "sektor", "hfhdhjdjd", "hdosueuis"];

function acleaner(arr) {
var anag = [];
for (var i = 0; i < arr.length ; i++)  {anag[i] = arr[i]; };
for (var i = 0; i < arr.length ; i++)  {anag[i] = anag[i].split("").sort().join("") };
//for (var i = 0; i < anag.length; i++) {anag[i].sort()};
alert(anag);
//for (var i = 0; i < anag.length; i++) {anag[i] = anag[i].join(":")}
//alert(anag);
var res;
for (var i = 0;i < anag.length; i++) {
	res = findInArray(anag, anag[i]);
	if (res[0] != -1) {
		findAndRemove(arr, res);
	}
}
}

//Функция переберает массив и вместо найденного значения ставит Null
function findAndRemove(arr, param) {
  for (var i = 0; i < param.length; i++) {
    arr[param[i]] = "deleted";

  }
}



function findInArray(arr, search) {
  var index = -1;
  var result = [];
  do {
       index = arr.indexOf(search, index+1);
     if (index != -1) result.push(index);
  } while (index > -1);
  if (!result.length) { result.push(-1) };

 return result; }


 acleaner(arr);
 alert(arr);
