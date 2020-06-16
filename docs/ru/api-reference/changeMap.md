# changeMap

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
await server.csgo.changeMap({
    name: 'awp_lego_2'
}) // => Promise<Object>
```

| Параметр | Тип | Описание |
|------------------|-------|------------------|
| name | string | Название карты из списка карт сервера |

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус об смене карты |
| message | object | Выводит сообщение о смене карты |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/changeMap.png "Скриншот с объектами")
