# stopServer

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
await server.csgo.stopServer() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус выключения |
| message | object | Выводит сообщение о выключении |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/stopServer.png "Скриншот с объектами")
