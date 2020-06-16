# getResources

```js
var { MyArena } = require('myarena.io')
var server = new MyArena({
    csgo: {
        token: process.ENV.TOKEN
    }
})
```

Информация о ресурсах

```js
await server.csgo.getResources() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|-----|----------|
| status | string | Выводит статус о выводе ресурсов |
| cpu_proc | number | Использование процессора в процентах |
| mem_used | number | Использовано оперативной памяти (в мегабайтах) |
| mem_quota | number | Выделено оперативной памяти (в мегабайтах) |
| mem_proc | number | Использование памяти в процентах |
| players | number | Количество игроков |
| players_max | number | Максимальное количество слотов |
| players_proc | number | Занятость слотов в процентах |
| disk_used | number |Использовано дисковой квоты (в мегабайтах) |
| disk_quota | number |Выделено дисковой квоты (в мегабайтах) |
| disk_proc | number | Использование дисковой квоты в процентах |

Скриншот

![alt tag](https://raw.githubusercontent.com/DavidErbaev/myarena.io/master/docs/ru/api-reference/imgs/getResources.png "Скриншот с объектами")
