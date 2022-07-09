import API from "../api";
import { FETCH_POKEMONS, FETCH_POKEMON, FETCH_POKEMONS_BY_TYPE } from "../constants/actionTypes";

export const fetchPokemons = (url) => async (dispatch) => {
  const pokemons = await API.fetchPokemons(url);

  dispatch({ type: FETCH_POKEMONS, payload: pokemons });
};

export const fetchPokemon = (id) => async (dispatch) => {
  const pokemon = await API.fetchPokemon(id.toLowerCase());

  dispatch({ type: FETCH_POKEMON, payload: pokemon });
};

export const fetchPokemonByType = (url, type) => async (dispatch) => {
  const pokemonsByType = await API.fetchPokemonByType(url, type);

  if (type) {
    console.log(pokemonsByType);
    dispatch({ type: FETCH_POKEMONS, payload: { results: pokemonsByType } });
  } else {
    dispatch({ type: FETCH_POKEMONS_BY_TYPE, payload: pokemonsByType });
  }
};
