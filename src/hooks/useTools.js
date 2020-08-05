import { graphql, useStaticQuery } from 'gatsby';

const useTools = () => {
  const data = useStaticQuery(graphql`
  {
    allDatoCmsTool {
      nodes {
        id
        content
        linkExample
        linkTutorial
        linkTool
        name
        slug
        subject {
          name
        }
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    }`);

  return data.allDatoCmsTool.nodes

}

export default useTools;