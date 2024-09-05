// Fichero src/services/api.js
const callToApi = () => {
  // Llamamos a la API
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = response.map((character) => ({
        name: character.name,
        id: character.id,
        species: character.species,
        patronus: character.patronus,
        ancestry: character.ancestry,
        image: character.image,
        alive: character.alive,
        house: character.house,
      }));
      return result;
    });
};

export default callToApi;
