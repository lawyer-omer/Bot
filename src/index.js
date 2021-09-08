const tester = 'testing';
const axios = require('axios').default;

/* function
function axiosTest() {
  // create a promise for the axios request
  const promise = axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(function (response) {
    console.log(response.data.bitcoin.usd);
  });
}


axiosTest()
*/
/*
async function getUserData() {
  try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      console.log(response.data.bitcoin.usd);
      return response.data.bitcoin.usd
      
  }
  catch (error) {
      console.log(error);
  }
}

var asd = getUserData()
*/

//module
const options = {
  method: 'GET',
  url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
  responseType: 'arraybuffer'
  };

module.exports = async function App(context) {
  if (context.event.text == 'btc-usd') {
    //await context.postMessage('asd');
    await axios.request(options).then((response) => {
      //console.log(response.data.bitcoin.usd)
      return context.response;})
    //const take = await App(context)
    await context.postMessage('I will say Bitcoin price soon!');
  }
}

/*
const options = {
  method: 'GET',
  url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`}

module.exports
  if (context.event.text == 'btc-usd'){
      return axios.request(options).then((response) => {
          return response.data.bitcoin.usd;});
          */