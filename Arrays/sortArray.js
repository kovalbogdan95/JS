//Сортивовка объектов в массиве по свойству age
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function fn(a, b) {
return a.age - b.age;
}

people.sort(fn);

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6
