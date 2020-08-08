import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Link, Typography, Hidden } from "@material-ui/core";
import Subject from "./subject-card";
import useSubjects from '../hooks/useSubjects';
import useTools from '../hooks/useTools';
import PostTemplate from './disqus';

const useStyles = makeStyles(theme => ({
  top: {
    marginTop: theme.spacing(2),
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
      <Grid container justify="center" alignItems="flex-start" spacing={1}>
        <Hidden smDown>
          <Grid item justify="flex-start" alignItems="flex-start" spacing={0} xs={3}>
            <div>
              <Typography className={classes.root} color="inherit" variant="h6">
                {"Tabla de contenido"}
              </Typography>
              {subjects.map(e => (<>
                <Typography className={classes.root}>
                  <Link href={`#${e.name}`} color="inherit" variant="body2">
                    {e.name}
                  </Link>
                </Typography>
              </>))}
            </div>
          </Grid>
        </Hidden>
        <Grid container item justify="center" alignItems="center" direction="row" spacing={3} xs={9}>
          {subjects.map(subject => (
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} key={subject.id} id={subject.name}>
              <Subject subject={subject}
                tools={allTools.filter(tool => tool.subject.name === subject.name)
                } />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <PostTemplate id={"de"} />
    </Container>
  );
}
