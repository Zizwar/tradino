

import { listenSokCoins } from './ioBinance';
import {candles} from './functions';
import {RSIno} from './functions/indicatorino';

(async () => {
   // await listenSokCoins(binance)
 //await candles();
await RSIno()
})();

