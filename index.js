
import { listenMarket } from './functions/indicatorino';
import { binance, balances } from "./lib/binance"

(async () => {
    // await listenSokCoins(binance)
    //await candles();
    setInterval(async _=>{
    try {
        const _listenMarket = await listenMarket() || [];
        const {
            rsi,
            upper,
            lower,
            sma,
            ema,
            close,
        } = _listenMarket;
        console.log(_listenMarket)
    
        /******calcul critical here */

    } catch (error) {
        console.error(error)
    };

    //binance.futuresMiniTickerStream( 'BTCUSDT', console.log );
    //const { USDT, BTC, DOGE } = await balances()
   
    //console.info( await binance.futuresMarketBuy( 'BTCUSDT', 0.001 ) );
},3000)
})();

