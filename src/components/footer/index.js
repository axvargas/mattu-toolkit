
import React from "react";
// gatsby imports
import { Link } from "gatsby-theme-material-ui";

//material ui imports
import { Typography, Container, Divider } from "@material-ui/core";
export default function Footer() {
    return (
        <Container style={{ marginTop: '5rem' }}>
            <Divider />
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
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

        </Container>

    );
}   