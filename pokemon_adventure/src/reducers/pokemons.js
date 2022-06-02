import { FETCH_POKEMONS } from "../constants/actionTypes";

export default (state = { results: [] }, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return action.payload;
    default:
      return state;
  }
};
