import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { SinglePokemon, Search, Pokemons } from "./components/";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <Typography
        component={Link}
        to="/"
        variant="h2"
        gutterBottom
        className={styles.heading}
      >
        Pokedex
      </Typography>
      <Switch>
        <Route path="/:id">
          <SinglePokemon />
        </Route>
        <Route path="/">
          <Search />
          <Pokemons />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
