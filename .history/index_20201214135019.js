const axios = require('axios');

// https://fixer.io/
const FIXER_API_KEY = '06eef6b974529a0341cebf502202475d';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const rest_countries_api = `https://restcountries.eu/rest/v2/currency`;

// async functions return promis. in other words, they never return values.

// async await

// Fetch data about currencies

const getExchangeRate = async (fromCurrency,toCurrency)=>{

    const { data: { rates } } = await axios.get(FIXER_API)
    console.log(rates)
    const euro = 1/rates[fromCurrency];
    const exchangeRate = euro * rates[toCurrency];

    return exchangeRate

 }
// minutes: 12:00
let a getExchangeRate('USD', 'EUR')




// Fetch data about countries

//Output data

