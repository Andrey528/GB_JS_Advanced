# Учебное задание на семинар 1. Задачи:
1) Задание 1: Необходимо создать механизм для безопасного добавления метаданных к объектам книг с использованием ключей типа Symbol. Для чего необходимо:
 - Создать уникальные символы для метаданных: отзывы, рейтинг, теги;
 - Реализовать методы addMetadata и getMetadata и другие методы, которые будут необходимы.
2) Задание 2: Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у которого каждая итерация будет возвращать следующую книгу из библиотеки.Продемонстрируйте работу Symbol.iterator у нашего объекта.
3) Задание 3: Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active.Выведите отфильтрованный результат в консоль.
4) Задание 4. Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. Необходимо: 
 - Создать Map объект, который будет использоваться для хранения соответствия между уроком и преподавателем, урок => преподаватель;
 - Необходимо создать Map объект, ключами которого будут объекты студентов, а значениями будут Set объекты, которые будут хранить уроки, посещенные студентом.