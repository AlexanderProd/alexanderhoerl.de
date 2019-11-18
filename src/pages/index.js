import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo'
import Header from '~/components/Header'
import useSiteMetadata from '~/hooks/useSiteMetadata'

const IndexPage = () => {
  const { description } = useSiteMetadata()

  return (
    <Layout>
      <SEO title='Home' description={description} />
      <Header />
    </Layout>
  )
}

export default IndexPage
