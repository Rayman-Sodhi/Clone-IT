import React from "react";
import { Modal, List, ListItem, ListItemText } from "@material-ui/core/";
import { useSelector } from "react-redux";

import useStyles from "./styles";

export default function SimpleModal({ open, handleClose }) {
  const pokemons = useSelector((state) => state.pokemonsByType);
  const classes = useStyles();

  if (!pokemons) return null;

  return (
    <div style={{ top: `${50}%`, margin: "auto" }}>
      <Modal
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          overflow: "auto",
          maxHeight: 300,
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <List component="nav" aria-label="secondary mailbox folders">
            {console.log(pokemons)}
            {pokemons.map(({ name, url }) => (
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Modal>
    </div>
  );
}
