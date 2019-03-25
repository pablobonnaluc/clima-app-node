
const axios = require('axios');

const getLgarLatLng = async ( dir ) => {

    const encodedUri = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUri}`,
        timeout: 3000,
        headers: {'X-RapidAPI-Key': '078dbd82fcmshcd6ec633ce0fc74p12c472jsn66bd2b460e51'}
    });

    const resp = await instance.get();

    if ( resp.data.Results == 0){
        throw new Error (`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion     = data.name;
    const lat           = data.lat;
    const lng           = data.lon;
      
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLgarLatLng
}


