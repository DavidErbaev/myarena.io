var fetch = require('node-fetch'),
    {
        URLSearchParams
    } = require('url'),
    {
        APIError
    } = require("./apierror");

class CSGO {
    constructor(csgo) {
        this.csgo = csgo;
        this.apiUrl = this.csgo.apiUrl;
        this.agent = this.csgo.agent;
        this.options = this.csgo.options;

        if (!this.options.csgo.token) {
            throw new APIError('Invalid token')
        }
    }

    /**
     * Get server statistics
     */
    getStatus() {
        return this.call({
            query: "status",
            params: {
                token: this.options.csgo.token
            }
        })
    }

    /**
     * Server start
     */
    startServer() {
        return this.call({
            query: "start",
            params: {
                token: this.options.csgo.token
            }
        })
    }

    /**
     * Server shutdown
     */
    stopServer() {
        return this.call({
            query: "stop",
            params: {
                token: this.options.csgo.token
            }
        })
    }

    /**
     * Server reboot
     */
    restartServer() {
        return this.call({
            query: "restart",
            params: {
                token: this.options.csgo.token
            }
        })
    }

    /**
     * Change map on server
     */
    async changeMap(params = {}) {
        if (!params.name) throw new APIError('You did not enter a map name')
        let getMap = await this.getMaps();
        let map = getMap.maps.includes(params.name);

        if (!map) return { error: 'The map you specified is not in the list of server maps' }

        return this.call({
            query: "changelevel",
            params: {
                map: params.name,
                token: this.options.csgo.token
            }
        })
    }

    /**
     * Get a list of maps on the server
     */
    getMaps() {
        return this.call({
            query: "getmaps",
            params: {
                token: this.options.csgo.token
            }
        })
    }
    /**
     * Run console command
     * @param {*} cmd 
     */
    exec(cmd) {
        return this.call({
            query: "consolecmd",
            params: {
                cmd: cmd,
                token: this.options.csgo.token
            }
        })
    }
    /**
     * Resource Information
     */
    getResources() {
        return this.call({
            query: "getresources",
            params: {
                token: this.options.csgo.token
            }
        })
    }
    /*------------------------*/
    async call(request = {}) {
        let response,
            headers = {
                "Content-Type": "application/json",
                connection: "keep-alive",
            };
        let url = null,
            body = null;

        if (request.params.cmd) {
            url = `${this.apiUrl}?query=${request.query}&cmd=${request.params.cmd}&token=${request.params.token}`
        } else if (request.params.map) {
            url = `${this.apiUrl}?query=${request.query}&map=${request.params.map}&token=${request.params.token}`
        } else if (!request.params.cmd || !request.params.map) {
            url = `${this.apiUrl}?query=${request.query}&token=${request.params.token}`
        }

        response = await fetch(url, {
            method: "POST",
            headers: headers,
            body,
            agent: this.agent,
        })
        this.response = await response.json();

        return this.response;
    }
}

exports.CSGO = CSGO;