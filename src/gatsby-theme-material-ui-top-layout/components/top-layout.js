import React from "react";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

//Helmet import
import { Helmet } from 'react-helmet';

import Header from '../../components/header';
import Footer from '../../components/footer';


export default function TopLayout({ theme, children }) {
    // const seo = useSeo();
    // const { fallbackSeo: { title, description } } = seo;
    return (
        <ThemeTopLayout theme={theme}>
            <Helmet>
                <title>
                    {/* {title} */}
                    Toolkit
                </title>
                <meta
                    name="description"
                    // content={description}
                    content={"toolkit"}
                />
            </Helmet>
            <Header />
            {children}
            <Footer />
        </ThemeTopLayout>
    );
}