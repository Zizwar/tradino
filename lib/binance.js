


import Binance from 'node-binance-api';
import { APIKEY, APISECRET } from '../env';

export const binance = new Binance().options({
    APIKEY,
    APISECRET,
    useServerTime: true,
    test: true

});



export const candlesticks = async (args = []) => {
    const { symbol = "BTCUSDT", interval = '5m', limit = 23 } = args
    // const hestory = await binance.promiseRequest('v1/time')
    //console.info(hestory)
    return new Promise((resolve_, reject_) => {
        binance.candlesticks(symbol, interval, (error, ticks, symbols) => {
            if (error) return reject_(error);
            resolve_({ ticks, symbols })

        }, { limit });
    })
    //console.info( await binance.futuresMarketBuy( 'BTCUSDT', 0.001 ) );
    //return;

}

export const balances = async (args = []) => {
    return new Promise((resolve_, reject_) => {
        binance.balance((err, balances) => {
            if (err)
                return reject_(err);
            resolve_(balances)
        })
    })
}

