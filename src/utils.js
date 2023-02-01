const levels = [
  [2, 3, 5, 7],
  [11, 13, 17, 19, 23, 29],
  [31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79],
];

const fetchPokemon = async (pokemon_id) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(url + pokemon_id);
  const json = await res.json();

  return {
    id: json.id,
    name: json.name,
    img: json["sprites"]["other"]["official-artwork"]["front_default"],
    clicked: false,
  };
};

export { levels, fetchPokemon };
