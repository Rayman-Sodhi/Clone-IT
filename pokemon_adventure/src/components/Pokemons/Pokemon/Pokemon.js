import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Pokemon = ({ result }) => {
  const classes = useStyles();
  const id = result.url.substring(34).slice(0, -1);

  if (!result.name) return <CircularProgress />;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h4">
          {result.name[0].toUpperCase()}
          {result.name.slice(1)}
        </Typography>
        <CardMedia
          className={classes.cardMedia}
          image={
            !result.name.includes("-")
              ? `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
              : "https://images.uncyclomedia.co/uncyclopedia/en/0/01/DramaticQuestionMark.png"
          }
          title={result.name}
        />
        <Button className={classes.btn}>
          <Link className={classes.cardLink} to={`/${id}`}>
            More info
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Pokemon;
