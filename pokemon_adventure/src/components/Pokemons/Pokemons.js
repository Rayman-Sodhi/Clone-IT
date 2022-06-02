import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Pokemon from "./Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";
import useStyles from "./styles";

const Pokemons = () => {
  const classes = useStyles();

  const { results: pokemons } = useSelector((state) => state.pokemons);

  if (!pokemons.length) {
    return (
      <div className={classes.textContainer}>
        <CircularProgress
          size={90}
          thickness={5}
          className={classes.progress}
        />
        ;
      </div>
    );
  }

  return (
    <Grid container spacing={3} className={classes.container}>
      {pokemons.map((result, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
          <Pokemon result={result} />
        </Grid>
      ))}
      <Pagination className={classes.pagination} />
    </Grid>
  );
};

export default Pokemons;
