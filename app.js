const lugar = require('./lugar/lugar');
const clima = require("./clima/clima");

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Alias de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

const printWeather = (city, weatherData) => {
    console.log("El clima en", city , ":");
    console.log('Temperatura: ', weatherData.temp, '°');
    console.log("Min: ", weatherData.temp_min, "°");
    console.log("Max: ", weatherData.temp_max, "°");
    console.log("Humedad: ", weatherData.humidity, "%");
}

const getWeatherInfo = async (direccion) => {

    try {

        const coords = await lugar.getLugarCoord(direccion);
        const infoClima = await clima.getWeatherByCoords(coords);

        printWeather(coords.direccion, infoClima.main);

    } catch (error) {

        console.log(error);
        
    }

}

getWeatherInfo(argv.direccion);