'use strict';

const google = require('..');

describe('GoogleThis Tests', () => {
    it('Should search a query', async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
        const fetch_configs = {
            maxRedirects: 10,
            proxy: {
                protocol: 'http',
                host: '127.0.0.1',
                port: 8888,
            },
        }
        const search = await google.search('Stephen Hawking', {safe: true}, false, fetch_configs);
        console.log(search);
        expect(search.results).not.toHaveLength(0);
    });

    it('Should search images', async () => {
        const search = await google.image('Supermassive Blackhole');
        expect(search).not.toHaveLength(0);
    });

    it('Should do reverse image search', async () => {
        const search = await google.search('https://i.pinimg.com/236x/92/16/d9/9216d9a222ef65eb6eabfff1970180d1.jpg', {ris: true});
        expect(search.results).not.toHaveLength(0);
    });

    it('Should retrieve top news', async () => {
        const news = await google.getTopNews('en', 'AU');
        expect(news.headline_stories).not.toHaveLength(0);
    });
});
