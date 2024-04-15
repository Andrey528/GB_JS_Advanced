let map = new Map();

map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // цифра в качестве ключа
map.set(true, 'bool1'); // булево в качестве ключа

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get('1')); // str1
console.log(map.get(1)); // num1
console.log(map.size); // 3

// get set

let map2 = new Map();
map2.set('1', 'we').set('2', 'likes').set('3', 'JS');

console.log(map2);

// Перебор коллекции Map
let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);
// Перебор по ключам (овощи)
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable); // 'огурец', 'помидор', 'лук'
}

// Перебор по значениям (числа)
for (const amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// Перебор по элементам в формате [ключ, значение]
for (const entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец: 500, помидор: 350, лук: 50
}

// Выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // 'огурец: 500', 'помидор': 350, 'лук': 50
});

// Работа с объектами

// Object.entries поможет создать Map:
let map3 = new Map(Object.entries(obj));
// Object.fromEntries поможет создать объект из Map:
let obj = Object.fromEntries(map3);

// Set

let buddies = [
  'Жучка',
  'Мурка',
  'Таракашка',
  'Слон',
  'Мурка',
  'Таракашка',
  'Слон',
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

// Перевод в массив
let array = Array.from(uniqueBuddies);
console.log(array);
