import {candlesticks} from "../lib/binance";
export const candles = async (args) =>{
    try {
        const { ticks = [], symbols } = await candlesticks(args);
        for (let tick of ticks) {
            let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = tick;
            let timestamp = new Date(time).toLocaleString();
            console.log(timestamp + " BTC: $" + close, { symbols });
        }
    }
    catch (error) {
        console.log("ERR:", error)
    }

}
