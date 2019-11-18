import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          nav {
            name
            link
          }
          footer {
            name
            link
          }
          social {
            name
            url
          }
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata
