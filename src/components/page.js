import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import Subject from "./subject-card";
import useSubjects from '../hooks/useSubjects';
import useTools from '../hooks/useTools';
import PostTemplate from './disqus';

const useStyles = makeStyles(theme => ({
  top:{
    marginTop:  theme.spacing(2),
  },
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
    <Container className={classes.top}>

      <Grid container justify="center" alignItems="center" direction="row" spacing={3}>
        {subjects.map(subject => (
          <Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={subject.id}>
            <Subject subject={subject}
              tools={allTools.filter(tool => tool.subject.name === subject.name)
              } />
          </Grid>
        ))}
      </Grid>

      <PostTemplate />
    </Container>
  );
}
