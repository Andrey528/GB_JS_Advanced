// const symbol = Symbol(); // Объявление

// const dogId = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 === dog2); // false

// const dogId = Symbol('dog');
// alert(dogId); // TypeError: Cannot convert a Symbol value to a string
// console.log(dogId); // Symbol(dog)

// console.log(dogId.description); // dog можно посмотреть описание

// let id = Symbol('dogId');
// let buddy = {
//   [id]: 'Жучка',
// };

// console.log(buddy[id]); // Жучка

// let id = Symbol('id');
// buddy[id] = 'Бобик'; // Идентификатор остается уникальным всегда

// // Проблемы, которые могут возникнуть, без использования Symbol
// let buddy = { name: 'Тузик' }; // Объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор'; // ...другой скрипт тоже хочет свой идентификатор...
// buddy.id = 'Их идентификатор'; // Ой! Свойство перезаписано сторонней библиотекой!
// console.log(buddy.id);

// // Как решить?

// let buddies = {
//   [Symbol('Жучка')]: 'Жучка',
//   [Symbol('Мурка')]: 'мурка',
//   [Symbol('Таракашка')]: 'Таракашка',
//   elephant: 'Слон',
// };

// console.log(buddies);

// let newBuddies = {};
// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе и символьные.

// buddies.cat = 'Барсик';

// console.log(newBuddies);

// Symbol.for

// Читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, то создаётся

// Читаем его снова и записываем его в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for('id');

// проверяем: это один и тот же символ
alert(id === idAgain); // true

// Symbol.keyFor описание символа по идентификатору
// Получаем символ по имени
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// Получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id
