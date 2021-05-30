
import { listenMarket } from './functions/indicatorino';
import { binance, balances } from "./lib/binance";
import { buyOrSell } from './helpers';

(async () => {
    // await listenSokCoins(binance)
    //await candles();
    setInterval(async _ => {
        try {
            const _listenMarket = await listenMarket({interval:"3m"}) || [];
            const {
                rsi,
                upper,
                lower,
                sma,
                ema,
                close,
            } = _listenMarket;
          //  console.log(_listenMarket)
            /******calcul critical here */
            const _buyOrSell = buyOrSell(_listenMarket)

            console.log(`===${_buyOrSell}|${close}$|rsi:${rsi}`)

        } catch (error) {
            console.error(error)
        };

        //binance.futuresMiniTickerStream( 'BTCUSDT', console.log );
        //const { USDT, BTC, DOGE } = await balances()

        //console.info( await binance.futuresMarketBuy( 'BTCUSDT', 0.001 ) );
    }, 5000)
})();

