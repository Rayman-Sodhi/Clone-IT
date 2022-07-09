import axios from "axios";

const URL = "https://pokeapi.co/api/v2";

const fetchPokemons = async (url) => {
  try {
    const { data } = await axios.get(url ? url : `${URL}/pokemon`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPokemon = async (query) => {
  try {
    const { data } = await axios.get(`${URL}/pokemon/${query}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonByType = async (url, type) => {
  const {
    data: { pokemon },
  } = await axios.get(url ? url : `${URL}/type/${type}`);

  return pokemon ? pokemon.map(({ pokemon }) => pokemon) : null;
};

export default { fetchPokemons, fetchPokemon, fetchPokemonByType };
