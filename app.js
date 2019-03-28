const { getLatLong } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la ciudad para obtener clima.",
    demand: true
  }
}).argv;

const ciudad = argv.direccion;

/* getLatLong(argv.direccion)
  .then(resp => {
    console.log("Ciudad solicitada:", argv.direccion);
    console.log("Coordenadas:", resp.latitude, resp.longitude);
    getClima(resp.latitude, resp.longitude)
      .then(resp => {
        console.log("Temperatura:", resp.temp);
        console.log("Humedad:", resp.humidity);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err)); */

const getDatos = async ciudad => {
  // Mostrar ciudad
  console.log(ciudad);

  //Get coordenadas
  const coordenadas = await getLatLong(ciudad)
    .then(resp => {
      return resp;
    })
    .catch(err => console.log("Error en coordenadas"));
  console.log("Coordenadas:", coordenadas.longitude, coordenadas.latitude);

  //Get clima en coordenadas.
  const clima = await getClima(coordenadas.latitude, coordenadas.longitude)
    .then(resp => {
      return resp;
    })
    .catch(err => console.log("Error en get clima."));
  console.log("Temperatura:", clima.temp);
};

getDatos(ciudad);
