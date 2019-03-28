const axios = require("axios");

const getLatLong = async direccion => {
  const encodedUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: {
      "X-RapidAPI-Key": "161df86cd3msh7dd6cb3cdbfe848p148cbajsne33bef5f6498"
    }
  });

  let response = await instance.get();

  if (response.data.Results.length === 0) {
    throw new Error("No se encontró nada...");
  }

  let data = response.data.Results[0];

  let direc = data.name;
  let latitude = data.lat;
  let longitude = data.lon;

  return {
    direc,
    latitude,
    longitude
  };
};

module.exports = {
  getLatLong
};
