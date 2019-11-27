const axios = require("axios");


const getLugarCoord = async ( direccion ) => {

    const encodedURL = encodeURI(direccion);

    const geolocationApi = axios.create({
      baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
      headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "943909b13amsh9fc52429fca5c73p101964jsn6c784104fca4"
      }
    });

    const resp = await geolocationApi.get();

    if ( resp.data.Results.length === 0){
        throw new Error('No hay resultados para la dirección ingresada.');
    }

    const data = resp.data.Results[0];

      return {
          direccion: data.name,
          lat: data.lat,
          lng: data.lon
      }

}

module.exports = {
  getLugarCoord
};