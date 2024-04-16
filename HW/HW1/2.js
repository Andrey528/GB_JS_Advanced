'use strict';

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    this.menu = {
      Пицца: new Map([
        ['Маргарита', 'Олег'],
        ['Пепперони', 'Олег'],
        ['Три сыра', 'Олег'],
      ]),
      Суши: new Map([
        ['Филадельфия', 'Андрей'],
        ['Калифорния', 'Андрей'],
        ['Чизмаки', 'Андрей'],
        ['Сеякемаки', 'Андрей'],
      ]),
      Десерт: new Map([
        ['Тирамису', 'Анна'],
        ['Чизкейк', 'Анна'],
      ]),
    };
    this.cooks = new Map([
      ['Олег', 'Пицца'],
      ['Андрей', 'Суши'],
      ['Анна', 'Десерты'],
    ]);
    this.orders = new Map();
  }
  newOrder(client, ...orders) {
    console.log(`Клиент ${client.firstname} заказал:`);
    if (this.orders.has(client.firstname)) {
      const existingOrders = this.orders.get(client.firstname);
      orders.forEach((order) => {
        const dish = order.name;
        const quantity = order.quantity;
        const type = order.type;
        if (this.menu[type] && this.menu[type].has(dish)) {
          const index = existingOrders.findIndex(
            (o) => o.name === dish && o.type === type
          );
          if (index !== -1) {
            existingOrders[index].quantity += order.quantity;
          } else {
            existingOrders.push(order);
          }
        } else {
          throw Error(`Десерт "${dish}" - такого блюда не существует.`);
        }
      });
      existingOrders.forEach((order) => {
        console.log(
          `${order.type} "${order.name}" - ${
            order.quantity
          }; готовит повар ${this.menu[order.type].get(order.name)}`
        );
      });
    } else {
      const newOrders = [];

      orders.forEach((order) => {
        const dish = order.name;
        const quantity = order.quantity;
        const type = order.type;
        if (this.menu[type] && this.menu[type].has(dish)) {
          newOrders.push(order);
          console.log(
            `${type} "${dish}" - ${quantity}; готовит повар ${this.menu[
              type
            ].get(dish)}`
          );
        } else {
          throw Error(`Десерт "${dish}" - такого блюда не существует.`);
        }
      });
      this.orders.set(client.firstname, newOrders);
    }
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client('Иван', 'Иванов'),
  { name: 'Маргарита', quantity: 1, type: 'Пицца' },
  { name: 'Пепперони', quantity: 2, type: 'Пицца' },
  { name: 'Чизкейк', quantity: 1, type: 'Десерт' }
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client('Павел', 'Павлов');
manager.newOrder(
  clientPavel,
  { name: 'Филадельфия', quantity: 5, type: 'Суши' },
  { name: 'Калифорния', quantity: 3, type: 'Суши' }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: 'Калифорния', quantity: 1, type: 'Суши' },
  { name: 'Тирамису', quantity: 2, type: 'Десерт' }
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: 'Филадельфия', quantity: 1, type: 'Суши' },
  { name: 'Трубочка с вареной сгущенкой', quantity: 1, type: 'Десерт' }
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
