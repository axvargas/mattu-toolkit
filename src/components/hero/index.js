import React from 'react';
// material ui imports
import { Typography, Grid, Container, Hidden } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Image from "gatsby-image";
//style imports
import useStyles from './style';
const ImageHotel = () => {
    const classes = useStyles();
    const { image } = useStaticQuery(
        graphql`
            query {
                image: file(relativePath:{eq:"hero.png"}){
                    sharp:childImageSharp{
                         fluid(quality: 100, maxWidth: 3840){
                            ...GatsbyImageSharpFluid_withWebp
                            
                        }
                    }
                }
            }
        `
    );
    const logoPath = "../../images/logoToolkit.png";
    return (
        <div className={classes.blank}>
            <Container>
                <Hidden smDown>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>

                        <Grid item xl={3} lg={4} md={4} sm={10} xs={10}>
                            
                            <Grid container direction="column" justify="flex-start" alignItems="    " spacing={3} >
                                <Grid item>
                                    <Typography variant="h3" className={classes.typoP}>Bienvenido!</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" className={classes.typo}>
                                    Pol Toolkit es una página web que recopila herramientas web 
                                    que serán de ayuda para el desarrollo de las clases virtuales 
                                    para colegios, beneficiando tanto a docentes como a estudiantes.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={9} lg={8} md={8} sm={12} xs={12}>
                            <Image fluid={image.sharp.fluid} alt="sth" className={classes.img} />
                        </Grid>

                    </ Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                        <Grid item xl={9} lg={8} md={8} sm={12} xs={12}>
                            <Image fluid={image.sharp.fluid} alt="sth" className={classes.img} />
                        </Grid>
                        <Grid item xl={3} lg={4} md={4} sm={10} xs={10}>
                            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3} >
                                <Grid item>
                                    <Typography variant="h3" className={classes.typoP}>Bienvenido!</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5" className={classes.typo}>
                                    Pol Toolkit es una página web que recopila herramientas web 
                                    que serán de ayuda para el desarrollo de las clases virtuales 
                                    para colegios, beneficiando tanto a docentes como a estudiantes.
                                      </Typography>
                                </Grid>
                            </Grid>
                        </Grid>


                    </ Grid>
                </Hidden>
            </Container>
        </div>
    );
}

export default ImageHotel;
