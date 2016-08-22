//Удаляет повторяющееся строки
var result = [];
function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
          obj[arr[i]] = arr[i];
    };


for (var keys in obj) {
         result.push(keys);
     }
alert(result.join(' '))
}


var strings = ["kris", "kris", "hare", "hare",
  "hare", "hare", "kris", "kris", "8-()"
];

unique(strings); // кришна, харе, 8-()
