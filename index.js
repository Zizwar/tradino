

import Binance from 'node-binance-api';
import { APIKEY, APISECRET } from './env';
import { listenSokCoins } from './ioBinance';

const binance = new Binance().options({
    APIKEY,
    APISECRET,

});

(async () => {
    await listenSokCoins(binance)
})();

