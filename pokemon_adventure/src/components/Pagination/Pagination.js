import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemons } from "../../actions";
import useStyles from "./styles";

const Pagination = () => {
  const classes = useStyles();
  const { previous, next } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <Button
        onClick={() => dispatch(fetchPokemons(previous))}
        disabled={!previous}
        variant="contained"
        color="primary"
        type="button"
      >
        Previous
      </Button>
      <Button
        onClick={() =>
          dispatch(fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=964"))
        }
        variant="contained"
        color="primary"
        type="button"
      >
        All
      </Button>
      <Button
        disabled={!next}
        onClick={() => dispatch(fetchPokemons(next))}
        variant="contained"
        color="primary"
        type="button"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
