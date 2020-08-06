import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Grid,
  Container
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

import Tool from "../tool-card";


const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  root: {
    padding: 10
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ tools }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="medium" color="primary" onClick={handleClickOpen}>
        explorar herramientas
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Herramientas
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container justify="center" alignItems="center" spacing={3}>
            {tools.map(tool => (
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={tool.id}>
                <Tool tool={tool} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
