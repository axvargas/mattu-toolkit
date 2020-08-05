import { graphql, useStaticQuery } from 'gatsby';
const useSubjects = () => {
  const data = useStaticQuery(graphql`
    {
        allDatoCmsSubject {
          nodes {
            id
            name
            slug
            content
            image {
              fluid((maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      
    `);

  return data.allDatoCmsSubject.nodes

}

export default useSubjects;