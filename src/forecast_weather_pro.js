require('dotenv').config();
const axios = require('axios');


const base_URL = process.env.base_URL;
// const api = axios.create({ baseURL: process.env.API_URL });

const key = process.env.KEY;

const [ node, script, ...city ] = process.argv;


let colors = require('colors');
colors.setTheme({
    program: 'rainbow'
});

const getWeatherInfos = async (city) =>
{
    const row = '@'.repeat(19);
    console.log(row.program);
    console.log('@ WEATHER PROGRAM @'.program);
    console.log(row.program);
    
    const req1 = axios.get(`${base_URL}${key}&q=${city}`);
    const req2 = axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5`);

    await axios.all([ req1, req2 ])
    .then(axios.spread((res1, res2) => {

        // Anfrage 1
        console.log('It is now ' + res1.data.current.temp_c + '°C in ' + res1.data.location.name);
        console.log('The current weather conditions are: ' + res1.data.current.condition.text);

        // Anfrage 2 mit forecast
        res2.data.forecast.forecastday.forEach(day => 
        console.log(`Datum: ${day.date}, Max-Temp: ${day.day.maxtemp_c}°C, Min-Temp: ${day.day.mintemp_c}°C, Rain: ${day.day.daily_chance_of_rain}%`));

        // console.log(res2.data.forecast.forecastday);
    }))
        
}

getWeatherInfos(city);