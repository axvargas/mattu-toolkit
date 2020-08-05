import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "../full-dialog-btn";
import Image from "gatsby-image";

const useStyles = makeStyles({
  root: {
    //maxWidth: "60%"
    width: "350px"
  },
  media: {
    //paddingTop: "25%" // 16:9
  }
});

export default function MediaCard({subject, tools}) {
  const classes = useStyles();
  const {name, content, image, id, slug} = subject
  
  return (
    <Card className={classes.root}>
      <CardMedia 
        component={Image}
        alt={name}
        fluid={image.fluid}
        className={classes.media}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Dialog tools={tools}/>
      </CardActions>
    </Card>
  );
}
