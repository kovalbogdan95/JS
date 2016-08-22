// Возвращает массив с частичной суммой
var arr = [-2,-1,0,1] ;
//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]; 

var result = [];
var tempRes = arr[0];
result = arr.map(function(argum, ind) { 
       return arr.reduce(function(sum, curent, i) {
       if (i <= ind) {  tempRes = sum + curent 
       };
       return tempRes;
       })
});

alert(result);
