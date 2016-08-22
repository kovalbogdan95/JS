//Правильная сортировка с учетом месного языка (русского)
var animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

var coll = new Intl.Collator(undefined, {sensitivity : 'variant'});
function collator(a, b) {
	return coll.compare(a, b);
}
animals = animals.sort(collator);

// ... ваш код ...

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
