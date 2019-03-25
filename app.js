
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion
/*lugar.getLgarLatLng(argv.direccion).then(
    console.log
)*/

/*clima.getClima(40.750000, -74.000000)
    .then ( console.log)
    .catch (console.log)*/

const getInfo = async  (direccion) => {

    try{

    let lugarBuscado = await lugar.getLgarLatLng(direccion);
    
    let climaDeLugar = await clima.getClima(lugarBuscado.lat, lugarBuscado.lng);

    return `El clima de ${lugarBuscado.direccion} es de ${climaDeLugar}`

    }
    catch(e){
            return `no se pudo determianar el clima de ${direccion} `;
    }

    // salida
    // el clima de xxxx es de xx
    // no se pudo determianr el clima de xx
}

getInfo(argv.direccion)
    .then( console.log )
    .catch ( console.log)


//247e0c88cb7b55b0b2ce6fd737fcc8db

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139