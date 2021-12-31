import { FETCH_POKEMONS_BY_TYPE } from "../constants/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POKEMONS_BY_TYPE:
      return action.payload;
    default:
      return state;
  }
};
