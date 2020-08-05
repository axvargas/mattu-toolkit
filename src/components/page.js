import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Subject from "./subject-card";
import useSubjects from '../hooks/useSubjects';
import useTools from '../hooks/useTools';
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
  const allTools = useTools();
  //console.log(allTools);
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {subjects.map(subject => (
          <Grid container justify="center" item xs={6} key={subject.id}>
            <Subject subject={subject} 
            tools={allTools.filter(tool => tool.subject.name === subject.name)
            }/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
