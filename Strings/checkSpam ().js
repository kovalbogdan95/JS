//Функция ищет "xxx", "viagra" в строчке и возвращает true если находит
function checkSpam(str) {
var lc = str.toLowerCase();
if (lc.indexOf("viagra") > -1 || lc.indexOf("xxx") > -1) {
return true
     }  else { return false};
};
alert( checkSpam("ggggghhxx hdhdjejj dkvikdkd  e ") );
