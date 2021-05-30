let type = "titti";
export const buyOrSell = ({
    rsi,
    upper,
    lower,
    sma,
    ema,
    close, }) => {
    //  console.log({ close, upper, lower, rsi ,ema})

    if (close >= upper && rsi > 65 && type !== "buy") {
        //if (close >= upper && close < ema)   
        type = "sell";
        return type;
    }

    // if (close <= lower && close > ema)
    if (close <= lower && rsi < 45 && type !== "sell") {
        type = "buy";
        return type
    }
    type = "titti";
    return type;
}