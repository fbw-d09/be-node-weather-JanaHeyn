require('dotenv').config();
const axios = require('axios');
const base_URL = process.env.base_URL;
const key = process.env.KEY;

const [ node, script, ...city ] = process.argv;

const getWeatherInfo = (city) =>
{
    const row = '@'.repeat(19);
    console.log(row);
    console.log('@ WEATHER PROGRAM @');
    console.log(row);

    axios.get(`${base_URL}${key}&q=${city}`)
    .then(res => {
        console.log('It is now ' + res.data.current.temp_c + '°C in ' + res.data.location.name);
        console.log('The current weather conditions are: ' + res.data.current.condition.text);

        console.log(res.data.)
    })

}

getWeatherInfo(city);