let type = "titti";
export const buyOrSell = ({
    rsi,
    upper,
    lower,
    sma,
    ema,
    close, stochRSI}) => {
    //  console.log({ close, upper, lower, rsi ,ema})

    if (close >= upper && rsi > 65 && stochRSI > 70 && type !== "sell") {
        //if (close >= upper && close < ema)   
        type = "sell";
        return type;
    }

    // if (close <= lower && close > ema)
    if (close <= lower && rsi < 45  && stochRSI < 30 && type !== "buy") {
        type = "buy";
        return type
    }
   // type = "titti";
    return "titti";
}