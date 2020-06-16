# restartServer

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
await server.csgo.restartServer() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус перезапуска |
| message | object | Выводит сообщение о перезапуске |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/restartServer.png "Скриншот с объектами")
