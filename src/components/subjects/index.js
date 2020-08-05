import React, { useEffect } from 'react';

//material ui imports
import { Typography, Grid, Container } from '@material-ui/core';

//style imports
import useStyles from './style';
//hooks imports
import useSubjects from '../../hooks/useSubjects';


const Subjects = () => {
    const classes = useStyles();

    const subjects = useSubjects();
    console.log(subjects);

    return (
        <Container className={classes.container}>
            <Grid container justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h4" gutterBottom className={classes.typo}>Find the perfect tool for you</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Subjects;




