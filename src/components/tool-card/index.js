import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListOptions from "../list-options";

import Image from "gatsby-image";
const useStyles = makeStyles(theme => ({
  root: {
    width: "400px",
    //height: "650px"
  },
  cardMedia:{
    height: "400px"
  },
  cardContent:{
    height: "100px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  tooltip: {
    marginLeft: 'auto',
    marginRight: 0,
  },
}));

export default function RecipeReviewCard({ tool }) {
  const classes = useStyles();
  const { name,
    content,
    linkTool,
    linkExample,
    linkTutorial,
    image } = tool
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ListOptions linkTool={linkTool} linkExample={linkExample} linkTutorial={linkTutorial} />
      </Collapse>
    </Card>
  );
}
