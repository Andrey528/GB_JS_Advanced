# Учебное домашнее задание к семинару 1. Коллекции и итераторы. Модули. Задачи:
1) Создайте обычный объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция альбомов - это массив внутри нашего объекта (создать несколько альбомов самому). Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
2) Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это актуально.