var https = require('https');
var defaultOptions = {
    apiUrl: 'https://www.myarena.ru/api.php',
    agent: new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 1000,
    })
}
var { CSGO } = require('./api/csgo.js')

class MyArena {
    constructor(params = {}) {
        this.options = { ...params }
        this.apiUrl = defaultOptions.apiUrl
        this.agent = defaultOptions.agent

        if (this.apiUrl.startsWith('http://')) {
            this.agent = null;
        }

        this.csgo = new CSGO(this);
    }
   
    setOptions(options) {
        Object.assign(this.options, options);
        return this;
    }
}

exports.MyArena = MyArena;