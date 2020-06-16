# startServer

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
await server.csgo.startServer() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус запуска |
| message | object | Выводит сообщение о запуске |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/startServer.png "Скриншот с объектами")
