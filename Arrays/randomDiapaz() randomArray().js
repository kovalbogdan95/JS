var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

function randomDiapaz(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
  }

function randomArray(arr) {
  return arr[ randomDiapaz(0, arr.length - 1)]
}

alert( randomArray(arr) );
