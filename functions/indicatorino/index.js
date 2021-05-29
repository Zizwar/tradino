import { EMA, BollingerBands ,RSI } from 'technicalindicators';
import {candlesticks} from "../../lib/binance";

export const RSIno = async (args) =>{
    try {
        const { ticks = [], symbols } = await candlesticks(args);
        for (let tick of ticks) {
            let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = tick;
            let timestamp = new Date(time).toLocaleString();
          //  console.log(timestamp + "=>RSI:"+resRSI+" BTC: $" + close, { symbols });
        console.info({tick})
        }
    }
    catch (error) {
        console.log("ERR:", error)
    }

}
