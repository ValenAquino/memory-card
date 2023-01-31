const MAX_POKEMON = 1008;
const MIN_POKEMON = 1;

const getRandomPokemonID = () =>
  Math.round(Math.random() * (MAX_POKEMON - MIN_POKEMON) + MIN_POKEMON);

const getRandomArray = (numberOfElements) => {
  const arr = [];

  for (let i = 0; i < numberOfElements; i++) {
    arr.push(getRandomPokemonID());
  }

  return arr;
};

export { getRandomArray };
