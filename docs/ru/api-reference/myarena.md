# MyArena

```js
const MyArena = require('myarena.io')

// OR

const { MyArena } = require('myarena.io')
```

## Constructor

Инициализация новой инстанции

```js
    new MyArena([options])
```

Пример

```js
   new MyArena({
        csgo: {
            token: process.env.TOKEN
        }
   })
```

| Параметр | Тип | Описание |
|----------|--------|-------------------|
| options  | object | [Опции](#options) |

## Options

### Общие опции

| Опция | Тип | Описание |
|----------|--------|----|
| csgo | object | [Опиции](#csgo) |

## csgo

### Опции

| Опция | Тип | Описание | По умолчанию |
|----------|--------|----|--------------|
| token | string | Токен сервера | null |
