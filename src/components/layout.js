import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'
import { Wrapper, GlobalStyles } from '../ui/styles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          social {
            site
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <main>{children}</main>
        <Footer social={data.site.siteMetadata.social}/>
      </Wrapper>
    </>
  )
}

export default Layout
