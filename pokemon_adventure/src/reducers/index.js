import { combineReducers } from "redux";

import pokemons from "./pokemons";
import pokemon from "./pokemon";
import pokemonsByType from "./pokemonsByType";

export default combineReducers({
  pokemons,
  pokemon,
  pokemonsByType,
});
