const axios = require('axios');

// https://fixer.io/
const FIXER_API_KEY = '06eef6b974529a0341cebf502202475d';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const rest_countries_api = `https://restcountries.eu/rest/v2/currency`;

// async functions return promis. in other words, they never return values.

// async await

// Fetch data about currencies
const getExchangeRate = async (fromCurrency, toCurrency) => {

    try {

        const { data: { rates } } = await axios.get(FIXER_API)
        const euro = 1 / rates[fromCurrency];
        const exchangeRate = euro * rates[toCurrency];

        return exchangeRate;
    } catch (error) {
        throw new Error(`Unable to get currency from ${fromCurrency} and ${toCurrency}`)

    }


}

// Fetch data about countries
const getCountries = async (currencyCode) => {

    try {

        const { data } = await axios.get(`${rest_countries_api}/${currencyCode}`)

        return data.map(({ name }) => name);
    } catch (error) {
        throw new Error(`Unable to get countries that use ${currencyCode}`)

    }



}
// const hamid = await getCountries('AUD')
// console.log(hamid);

//Output data
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase()

    const [exchangeRate, countries] = await Promise.all([
        getExchangeRate(toCurrency, fromCurrency),
        getCountries(toCurrency),
    ])

    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency} right now.
     You can spend these in the following countries: ${countries}.`
}

const result = await convertCurrency("CAD","USD",3000)
console.log(result)
