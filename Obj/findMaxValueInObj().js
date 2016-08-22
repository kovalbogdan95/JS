//Поиск самого большого свойства объекта
var user = {
name : 788,
surname : 987,
name1 : 809,
f : 100,
jksksk : 43
};

var max = 0;
var chemp = 0;

 for (var name in user) {
          if (user[name] > max) {
               max = user[name];
               chemp = name;
           }
    }
alert(chemp);
alert(max);
