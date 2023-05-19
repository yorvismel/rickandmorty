const axios = require("axios");

const getCharById = function (res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const data = response.data;
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species
      };
      res.send(character);
    })
    .catch((error) => {
      console.error("Error fetching character:", error);
      res.status(500).send("Error fetching character");
    });
};
