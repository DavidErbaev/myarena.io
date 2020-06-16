# getStatus

```js
var { MyArena } = require('myarena.io')
var server = new MyArena({
    csgo: {
        token: process.ENV.TOKEN
    }
})
```

Узнаем статистику сервера

```js
await server.csgo.getStatus() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус проверки |
| data | object | Выводит объект с данными |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/getStatus.jpg "Скриншот с объектами")
​
