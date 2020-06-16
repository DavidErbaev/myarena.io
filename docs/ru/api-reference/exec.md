# changeMap

```js
var { MyArena } = require('myarena.io')
var server = new MyArena({
    csgo: {
        token: process.ENV.TOKEN
    }
})
```

Выполнить консольную команду

```js
await server.csgo.exec({ cmd: 'exec cw.cfg' }) // => Promise<Object>
```

| Параметр | Тип | Описание |
|------------------|-------|------------------|
| cmd | string | Консольная команда |

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус об смене карты |
| message | object | Выводит сообщение о смене карты |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/exec.png "Скриншот с объектами")
