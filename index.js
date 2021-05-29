

import { listenSokCoins } from './ioBinance';
import {candles} from './functions'


(async () => {
   // await listenSokCoins(binance)
 await candles();

})();

