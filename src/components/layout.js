import React from 'react'
import styled from '@emotion/styled'

import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'
import { LayoutProvider } from '~/context/LayoutContext'
import {
  breakpoints,
  Wrapper,
  GlobalStyles 
} from '~/utils/styles'

const Main = styled.main`
  padding 0 2rem;
  animation: fadein 2s ease;
  width: 60%

  @media (max-width: ${breakpoints.s}px){
    width: 100%;
  }

  @media (min-width: ${breakpoints.l}px){
    width: 40%;
  }

  @keyframes fadein {
    from { 
      opacity: 0;
    }
    to   { 
      opacity: 1;
    }
  }
`

const Layout = ({ children }) => (
  <LayoutProvider>
    <GlobalStyles />
    <Wrapper>
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </LayoutProvider>
)

export default Layout
