import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "../full-dialog-btn";

const useStyles = makeStyles({
  root: {
    maxWidth: "60%"
  },
  media: {
    paddingTop: "100%" // 16:9
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://i.pinimg.com/originals/bb/22/9a/bb229a5d9f2775353c4aec2a9c66e622.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Biología
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Herramientas para x también para realizar tareas de y, además de tener
          apartados para z.
        </Typography>
      </CardContent>
      <CardActions>
        <Dialog />
      </CardActions>
    </Card>
  );
}
