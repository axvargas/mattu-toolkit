import React from 'react';
//gatsby imports
import { Link as GatsbyLink } from 'gatsby';

//material ui imports
import { AppBar, Typography, Toolbar, Container, Grid, Hidden } from '@material-ui/core'


//comoponent import
import ElevationScroll from './elevationScroll';
//style imports
import useStyles from './style';

const Header = ({ props }) => {
    const classes = useStyles();

    return (
        <header>
            <ElevationScroll {...props}>
                <AppBar color="primary" elevation={2} className={classes.appbar} >
                    {/* Desktop Section */}
                    <Hidden mdUp>
                        <Grid container justify="center">
                            <Toolbar >

                                <Typography variant="h5" className={classes.typo}>
                                    <GatsbyLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Mattu Hotel
                                </GatsbyLink>

                                </Typography>


                            </Toolbar>
                        </Grid>
                 
                    </Hidden>
                    {/* Mobile Section */}
                    <Hidden smDown>
                        <Container>
                            <Grid container>

                                <Toolbar className={classes.title}>
                                    <Typography variant="h5" className={classes.typo} >
                                        <GatsbyLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Mattu ToolTip
                                    </GatsbyLink>
                                    </Typography>
                                </Toolbar>
                            </Grid>
                        </Container>
                    </Hidden>
                </AppBar>
            </ElevationScroll>
            <Hidden mdUp>
                <Toolbar />
            </Hidden>
            <Toolbar />

        </header >
    );
}

export default Header;
