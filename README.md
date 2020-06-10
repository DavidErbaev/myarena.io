# myarena.io

## Description
>[EN] A module created for CS: GO servers that are rented on MyArena.<br/>
>[RU] Модуль, созданный для серверов CS: GO, которые арендуются на MyArena.

## Installation
```bash
npm i myarena.io
```

## Example
```js
const { MyArena } = require('myarena.io')
const server = new MyArena({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})

(async () => {
     let getMaps = await server.csgo.getMaps()
    
     console.log(balance)
})
```

## README
   * [RU](docs/ru)
   * [EN](docs/en)


