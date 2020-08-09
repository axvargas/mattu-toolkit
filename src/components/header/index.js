import React from 'react';
//gatsby imports
import { Link as GatsbyLink } from 'gatsby';

//material ui imports
import { AppBar, Typography, Toolbar, Container, Grid, Hidden } from '@material-ui/core'
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

import { graphql, useStaticQuery } from 'gatsby';
import Image from "gatsby-image";
//comoponent import
import ElevationScroll from './elevationScroll';
//style imports
import useStyles from './style';
const formlink = "https://docs.google.com/forms/d/e/1FAIpQLSeL6p9N1ZwHgiFuzkfel6HObNr1LsRjxPqvdJfu2DVEy-31cw/viewform?usp=sf_link"

const Header = ({ props }) => {
    const classes = useStyles();
    const { image } = useStaticQuery(
        graphql`
            query {
                image: file(relativePath:{eq:"favicon2.png"}){
                    sharp:childImageSharp{
                         fluid(quality: 100, maxWidth: 3840){
                            ...GatsbyImageSharpFluid_withWebp
                            
                        }
                    }
                }
            }
        `
    );
    return (
        <header>
            <ElevationScroll {...props}>
                <AppBar color="primary" elevation={2} className={classes.appbar} >
                    {/* Desktop Section */}
                    <Hidden mdUp>
                        <Grid container justify="center">
                            <Toolbar >
                                <Image fluid={image.fluid} alt="sth" className={classes.img} />
                                <Typography variant="h5" className={classes.typo}>
                                    <GatsbyLink to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        Pol ToolKit
                                    </GatsbyLink>
                                </Typography>

                            </Toolbar>
                            <Toolbar>
                                <Tooltip title="Ayúdanos a mejorar" aria-label="help" className={classes.tooltip}>
                                    <Fab onClick={(e) => { window.open(formlink, '_blank') }} variant="extended" size="medium" className={classes.fab} color="secondary">
                                        <ThumbsUpDownIcon className={classes.extendedIcon} />
                                        {/* Ayúdanos */}
                                    </Fab>
                                </Tooltip>
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
                                            Pol ToolKit
                                    </GatsbyLink>
                                    </Typography>
                                    <Tooltip title="Ayúdanos a mejorar" aria-label="help" className={classes.tooltip}>
                                        <Fab onClick={(e) => { window.open(formlink, '_blank') }} variant="extended" size="medium" className={classes.fab} color="secondary">
                                            <ThumbsUpDownIcon className={classes.extendedIcon} />
                                             Ayúdanos
                                        </Fab>
                                    </Tooltip>
                                </Toolbar>
                            </Grid>
                        </Container>
                    </Hidden>
                </AppBar>
            </ElevationScroll>
            <Hidden smUp>
                <Toolbar />
            </Hidden>
            <Toolbar />

        </header >
    );
}

export default Header;
