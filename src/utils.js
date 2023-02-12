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

const fetchPokemons = async (level) => {
  const pokemons = [];

  for (const id of levels[level]) {
    pokemons.push(await fetchPokemon(id));
  }

  return pokemons;
};

const shuffleArray = (array) => {
  return [...array].sort(() => 0.5 - Math.random());
};

const updateBestScore = (bestScore) => {
  localStorage.setItem("bestScore", JSON.stringify(bestScore));
}

const getBestScore = () => {
  let serializedScore = localStorage.getItem("bestScore");

  if(serializedScore) {
    return JSON.parse(serializedScore);
  }
  else {
    return "Error";
  }
}

export { fetchPokemons, shuffleArray, updateBestScore, getBestScore  };
