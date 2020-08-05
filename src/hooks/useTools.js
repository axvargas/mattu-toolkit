/*import { graphql, useStaticQuery } from 'gatsby';
const query = (id) => {`
{
  allDatoCmsTool(filter: {subject: {id: {eq:`+id+`}}}}) {
    nodes {
      name
      content
      linkTool
      linkExample
      linkTutorial
      image {
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`}
const useTools = (id) => {
  const data = useStaticQuery(graphql`${query(id)}`);

  return data.allDatoCmsTool.nodes

}

export default useTools;*/