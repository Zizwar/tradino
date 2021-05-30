import { SMA, EMA, BollingerBands, RSI, StochasticRSI } from 'technicalindicators';
import { candlesticks } from "../../lib/binance";

export const listenMarket = async (args) => {
    try {
        const { ticks = [], symbols } = await candlesticks(args);
        /*
                const [, , , , lastClose, , , , , ,] = ticks[ticks.length - 1];
                const r = RSI.calculate({
                    period: 20, values: [34414.84, 34286.9, 34582.3,
                        34547.98, 34650.08, 34531.82,
                        34468.14, 34402.92, 34290.83,
                        34535.69, 34391.43, 34559.64,
                        34432.38, 34465.46, 34382.21,
                        34264.05, 34467.84, 34258.58,
                        34343.08, 34384.99, 34519.9,]
                });
                console.info({ r, lastClose })
                return;
                */
        const closes = [];
        for (let tick of ticks) {
            let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = tick;
            let timestamp = new Date(time).toLocaleString();
            closes.push(+close)
            //  console.log(timestamp + "=>RSI:"+resRSI+" BTC: $" + close, { symbols });
            //console.info({tick})
        }
        const RS = RSI.calculate({ period: 5, values: closes });//RSI({ period: 99, values: closes })
        const SM = SMA.calculate({ period: 5, values: closes });
        const EM = EMA.calculate({ period: 5, values: closes });
        const BB = BollingerBands.calculate({ period: 20, stdDev: 2, values: closes });
       // const stochRsi = StochasticRSI.calculate({ period: 20, values: closes });
        //const lastArr = (val)=>val.slice(-1)
        const [{ upper, lower }] = BB.slice(-1)
        return ({ rsi: RS.slice(-1)[0],  sma: SM.slice(-1)[0], ema: EM.slice(-1)[0], upper, lower, close: closes.slice(-1)[0] })
        //console.info( await binance.futuresMarketBuy( 'BTCUSDT', 0.001 ) );
    }
    catch (error) {
        console.log("ERR:", error)
    }

}
