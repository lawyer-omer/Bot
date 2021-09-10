const axios = require('axios').default;
const { WebClient } = require('@slack/web-api');
const { RTMClient } = require('@slack/rtm-api');
var express = require('express')
var app = express()

//module

module.exports = async function App(context) {
  if (context.event.text == 'btc-usd') {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      console.log(response.data.bitcoin.usd);
    await context.postMessage(`Hi this is btc price ${response.data.bitcoin.usd} USD.`);
  }

  if (context.event.text == 'eth-usd') {
    const responseEth = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      console.log(responseEth.data.ethereum.usd);
    await context.postMessage(`Hi this is eth price ${responseEth.data.ethereum.usd} USD.`);
  }

  if (context.event.text == 'doge-usd') {
    const responseDoge = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
      console.log(responseDoge.data.dogecoin.usd);
    await context.postMessage(`Hi this is doge price ${responseDoge.data.dogecoin.usd} USD.`);
  }
}
