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
    const euro = 1 / rates[fromCurrency];
    const exchangeRate = euro * rates[toCurrency];

    return exchangeRate

 }
 
// Fetch data about countries
const getCountries = async(currencyCode)=>{
    const {data} = await axios.get(`${rest_countries_api}/${currencyCode}`)

    return data.map(({ name })=>name);



}
// const hamid = await getCountries('AUD')
// console.log(hamid);

//Output data
