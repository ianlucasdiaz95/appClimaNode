const axios = require("axios");


const getWeatherByCoords = async ( lugar ) => {
    const weatherApi = axios.create({
      baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lng}&APPID=faf226c7cca525ae65fad5fc3ba40f3c&units=metric`,
    });

    const resp = await weatherApi.get();

    return resp.data;
}

module.exports = {
  getWeatherByCoords
};