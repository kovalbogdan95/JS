/* функция truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength. */

function truncate(str, lengthCustom) {
    if (str.length < lengthCustom) return str;
    var newString = "";
    for(var i = 0; i < lengthCustom - 3; i++) {
        newString = newString + str[i];
    };
    newString = newString + "...";
    return newString;
}
function truncateSlice(str, lengthCustom) {
    if (str.length > lengthCustom) {
        return str.slice(0, lengthCustom - 3) + '...';
    }
    return str;
}
var line = prompt('enter string', 'ssdfgfgghghgjkjkjkjkj');
var len = +prompt("enter length", 10);
alert( truncateSlice(line, len));