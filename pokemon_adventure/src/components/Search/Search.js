import React, { useState } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchPokemon, fetchPokemonByType } from "../../actions";
import styles from "./Search.module.css";

const pokemonType = [ "Normal", "Fire", "Water", "Grass", "Flying", "Fighting", "Poison", "Electric", "Ground", "Rock", "Psychic", "Ice", "Bug", "Ghost", "Steel", "Dragon", "Dark", "Fairy" ];

const Search = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");

  const handleClick = () => {
    dispatch(fetchPokemon(searchTerm));
    dispatch(fetchPokemonByType(null, type.toLowerCase()));

    if (searchTerm) {
      history.push(`/${searchTerm}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <TextField
        value={searchTerm}
        className={styles.textField}
        onChange={(event) => setSearchTerm(event.target.value)}
        label="Pokemon"
        variant="filled"
      />

      <div className={styles.selectContainer}>
        <FormControl variant="filled" className={styles.select}>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            {pokemonType.map((pokemonType) => (
              <MenuItem value={pokemonType}>{pokemonType}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
};

export default Search;
