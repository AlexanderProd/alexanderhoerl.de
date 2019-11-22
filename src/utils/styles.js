import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import hex from '~/images/hex.svg'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const colors = {
  blue: '#61AFEF',
  darkBlue: 'RGBA(40, 44, 52, 1.00)',
  grey: 'RGBA(204, 204, 204, .3)',
}

export const GlobalStyles = () => (
  <Global styles={css`
    html {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      background-color: black;
      color: white;
      overflow: hidden;
      background-image: url(${hex});
    }

    a {
      color: white;
      
      :visited {
        color: white;
      }
    }

    p {
      font-size: 16px;
      line-height: 1.4;

      @media (max-width: ${breakpoints.s}px){
        font-size: 14px;
      }
    }
  `}/>
)

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`

export const MainText = styled.div`
  counter-reset: lines;
  border-left: 1pt solid ${colors.grey};
  padding-left: 20px;
  margin-left: -20px;
`
