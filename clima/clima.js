
const axios = require('axios');


const getClima = async ( lat,lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=247e0c88cb7b55b0b2ce6fd737fcc8db&units=metric`);

    if ( resp.data.Results == 0){
        throw new Error (`No hay resultados para latitud ${lat} y longitud ${lng}`)
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}