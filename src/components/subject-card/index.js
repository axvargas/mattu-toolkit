import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Dialog from "../full-dialog-btn";
import Image from "gatsby-image";

const useStyles = makeStyles({
  root: {
    width: "400px",
    //height: "650px"
  },
  cardMedia:{
    height: "400px"
  },
  cardContent:{
    height: "175px"
  }
});

export default function MediaCard({ subject, tools }) {
  const classes = useStyles();
  const { name, content, image } = subject

  return (
    <Card className={classes.root}>
      <CardMedia
        component={Image}
        alt={name}
        fluid={image.fluid}
        title={name}
        className={classes.cardMedia}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Dialog tools={tools} subject={subject} />
      </CardActions>
    </Card>
  );
}
