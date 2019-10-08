import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  mobile: 480,
  phablet: 720,
  tablet: 1200,
  desktop: 1700,
};

export const colors = {
  blue: '#61AFEF',
  darkBlue: 'RGBA(40, 44, 52, 1.00)',
  grey: 'RGBA(204, 204, 204, .3)',
}

export const Wrapper = styled.div`
  position: absolute;
  left: 50px;
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
`

export const MainText = styled.div`
  counter-reset: lines;
  border-left: 1pt solid ${colors.grey};
  padding-left: 20px;
  margin-left: -20px;
`

export const GlobalStyles = props => (
  <Global styles={css`
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: Menlo, Monaco, 'Courier New', monospace;
      background-color: ${colors.darkBlue};
      color: white;
      line-height: 1.4;
    }
    a {
      color: ${colors.blue};
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
      :visited {
        color: ${colors.blue};
      }
    }
  `}/>
)
