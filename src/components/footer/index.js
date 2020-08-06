
import React from "react";
// gatsby imports
import { Link } from "gatsby-theme-material-ui";
import { makeStyles } from "@material-ui/core/styles";

//material ui imports
import { Typography, Container, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    top1: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    top2: {
        marginTop: theme.spacing(4),
    },
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <Container className={classes.top1}>
            <Divider />

            <Typography variant="body2" color="textSecondary" align="center" className={classes.top2}>
                {`Built with love by `}
                <Link color="primary" target="_blank" href="https://github.com/axvargas">
                    MattuApp &copy;
                    </Link>
                {" & "}
                <Link color="primary" target="_blank" href="https://github.com/jcoboss">
                    jcoboss &copy;
                    </Link>
            </Typography>


        </Container>

    );
}   