const axios = require("axios");

const getClima = async (lat, lng) => {
  let clima = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=404b90fe693d0e7133d9b194f54ed186`
  );
  return clima.data.main;
};

module.exports = {
  getClima
};
