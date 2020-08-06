import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const siteUrl = "https://pol-toolkit.netlify.app"
const identifier = "andrew"
const title = "Toolkit"
const PostTemplate = () => {
    let disqusConfig = {
        url: siteUrl,
        identifier: identifier,
        title: title,
    }
    return (
        <>
            <h1>{title}</h1>
            <CommentCount config={disqusConfig} placeholder={'Dejanos tu comentario'} />
            <Disqus config={disqusConfig} />
        </>
    )
}

export default PostTemplate;