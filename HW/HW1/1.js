'use strict';

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: 'Back in Black',
      artist: 'AC/DC',
      year: '1980',
    },
    {
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      year: '1971',
    },
    {
      title: 'Thriller',
      artist: 'Michael Jackson',
      year: '1982',
    },
  ],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          let album = this.albums[index];
          index++;
          return {
            value: `${album.title} - ${album.artist} (${album.year})`,
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  },
};

for (let album of musicCollection) {
  console.log(album);
}
