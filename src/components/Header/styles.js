import styled from '@emotion/styled'

import { breakpoints } from '~/utils/styles'

export const Title = styled.h1`
  margin-top: 0;
  font-size: 1.6rem;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem;
  }
`

export const CarouselWrapper = styled.div`
  border-bottom: 2px solid white;
  padding: 10px 0;
  background: linear-gradient(to bottom, transparent 50%, white 50%);
  background-size: 100% 200%;
  background-position: top bottom;
  font-weight: 600;
  font-size: 2rem;

  &:hover {
    color: black !important;
    background-position: right bottom;
    letter-spacing: -0.05rem;
    padding-left: 10px;
    transition:all 0.5s ease;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.5rem;
  }

  .Typist .Cursor {
    display: inline-block; 
  }
  .Typist .Cursor--blinking {
    opacity: 1;
    animation: blink 1s linear infinite; 
  }

  @keyframes blink {
    0% {
      opacity: 1; 
    }
    50% {
      opacity: 0; 
    }
    100% {
      opacity: 1; 
    } 
  }
`
