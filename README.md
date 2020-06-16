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


