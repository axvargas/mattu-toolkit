import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CategoryIcon from "@material-ui/icons/Category";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const useStyles = makeStyles(theme => ({
  root: {
    maxwidth: "100%",
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList({linkTool, linkExample, linkTutorial,}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={(e)=>{window.open(linkTool,'_blank')}}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Quiero probarlo!" />
      </ListItem>
      <ListItem button onClick={(e)=>{window.open(linkTutorial,'_blank')}}>
        <ListItemIcon href={linkTutorial}>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="¿Cómo se usa?" />
      </ListItem>
      <ListItem button onClick={(e)=>{window.open(linkExample,'_blank')}}>
        <ListItemIcon href={linkExample}>
          <FindInPageIcon />
        </ListItemIcon>
        <ListItemText primary="Quiero ver ejemplos!" />
      </ListItem>
    </List>
  );
}
