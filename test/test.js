const google = require('../lib/index');
const HttpsProxyAgent = require('https-proxy-agent');

(async () => {
    const httpsProxyAgent = new HttpsProxyAgent(`http://127.0.0.1:8888`);
    const axios_config = {
        agent: httpsProxyAgent,
        keepAlive: true,
    }
    const search = await google.search('Stephen Hawking', {safe: true}, false, axios_config);
    console.log(search);
})();
