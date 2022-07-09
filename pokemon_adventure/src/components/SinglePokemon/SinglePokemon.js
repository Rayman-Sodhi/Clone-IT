import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, LinearProgress, CircularProgress, Button, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemon, fetchPokemonByType } from "../../actions";
import Modal from "../Modal/Modal";

import useStyles from "./styles";

const SinglePokemon = () => {
  const { abilities, height, base_experience, name, types, stats, id: pokemonId, } = useSelector((state) => state.pokemon);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    dispatch(() => dispatch(fetchPokemon(id)));
  }, [dispatch, id]);

  const handleModal = (url) => {
    dispatch(fetchPokemonByType(url));

    setOpen(true);
  };

  if (!name) {
    return (
      <div className={classes.textContainer}>
        <CircularProgress
          size={90}
          thickness={5}
          className={classes.progress}
        />
      </div>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "25px" }}>
        <Typography gutterBottom variant="h4">
          {name[0].toUpperCase()}
          {name.slice(1)}
        </Typography>
        <img
          alt="pokemon"
          className={classes.cardMedia}
          src={
            !name.includes("-")
              ? `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`
              : "https://images.uncyclomedia.co/uncyclopedia/en/0/01/DramaticQuestionMark.png"
          }
          width="250px"
        />
        <Typography gutterBottom variant="body1">
          <strong>Abilities: </strong>
          {abilities.map(({ ability }) => ability.name).join(", ")}
        </Typography>
        <Typography gutterBottom variant="body1">
          <strong>The height of this Pokémon in decimetres: </strong> {height}
        </Typography>
        <Typography gutterBottom variant="body1">
          <strong>
            The base experience gained for defeating this Pokémon:{" "}
          </strong>{" "}
          {base_experience}
        </Typography>
        {stats.map(({ base_stat, stat: { name } }) => {
          return (
            <div key={name}>
              <p>{`${name[0].toUpperCase()}${name.slice(1)}`}</p>
              <LinearProgress variant="determinate" value={base_stat} />
            </div>
          );
        })}
        {types.map(({ type }) => (
          <Button
            className={classes.typeTag}
            x={console.log(type)}
            onClick={() => handleModal(type.url)}
          >
            {type.name}
          </Button>
        ))}
        <Modal open={open} handleClose={() => setOpen(false)} />
      </Paper>
    </Container>
  );
};

export default SinglePokemon;
