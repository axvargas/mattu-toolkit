import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Tool from "../tool-card";
//
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

export default function FullScreenDialog({tools}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const tools = useTools(subjectId);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //console.log(tools);
  return (
    <div>
      <Button size="medium" color="primary" onClick={handleClickOpen}>
        explorar herramienta
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
        <div className={classes.root}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            {tools.map(tool => (
              <Grid container justify="center" item xs={12} key={tool.id}>
                <Tool tool={tool}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
