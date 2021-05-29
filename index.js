
const { SMA } = require('technicalindicators');
const Binance = require('node-binance-api');
const { APIKEY, APISECRET } = require('./env');



const binance = new Binance().options({
    APIKEY,
    APISECRET,
});

console.log({ APIKEY, APISECRET });