import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    width: "100%",
    borderRadius: "0 !important",
  },

  cardMedia: {
    height: "380px",
    width: "100%",
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  card: {
    height: "100%",
  },

  cardAction: {
    display: "flex",
    justifyContent: "center",
  },

  cardLink: {
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgba(192,192,192,0.7)",
    padding: "5px",
    borderRadius: "12px",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
}));
