import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Subject from "./subject-card";
import useSubjects from '../hooks/useSubjects';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid() {
  const classes = useStyles();
  const subjects = useSubjects();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {subjects.map(element => (
          <Grid container justify="center" item xs={6} key={element.id}>
            <Subject subject={element}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
