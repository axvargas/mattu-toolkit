import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Subject from "./subject-card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7].map(e => (
          <Grid container justify="center" item xs={6} key={e}>
            <Subject />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
