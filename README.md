# myarena.io

## Description

>[EN] A module created for servers that are rented on MyArena.ru
>[RU] Модуль создан для серверов, которые арендуются на MyArena.ru

## Installation

```bash
npm i myarena.io
```

## Example

```js
const { MyArena } = require('myarena.io')
const server = new MyArena({
    csgo: {
        token: process.ENV.TOKEN
    }
})

(async () => {
     let getMaps = await server.csgo.getMaps()

     console.log(balance)
})
```

## README

* [RU](docs/ru)
* [EN](docs/en)
