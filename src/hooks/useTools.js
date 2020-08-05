import { graphql, useStaticQuery } from 'gatsby';
const useTools = (slug) => {
  const data = useStaticQuery(graphql`
    {
      {
        allDatoCmsTool(filter: {subject: {slug: {eq: ${slug}}}}) {
          nodes {
            name
            content
            linkTool
            linkExample
            linkTutorial
          }
        }
      }
      
      
    `);

  return data.allDatoCmsTool.nodes

}

export default useTools;