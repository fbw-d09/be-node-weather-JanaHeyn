require('dotenv').config();
const axios = require('axios');
const base_URL = process.env.base_URL;
const key = process.env.KEY;

const [ node, script, ...city ] = process.argv;

const getWeatherInfo = async (city) =>
{
    const row = '@'.repeat(19);
    console.log(row);
    console.log('@ WEATHER PROGRAM @');
    console.log(row);

    try
    {
        const res = await axios.get(`${base_URL}${key}&q=${city}`);

        console.log('It is now ' + res.data.current.temp_c + '°C in ' + res.data.location.name);
        console.log('The current weather conditions are: ' + res.data.current.condition.text);
        
    }
    catch(err)
    {
        console.log('Asynchroner Get Request Fehler');
        console.log('Error:', err.response.status);
    }
}

getWeatherInfo(city);