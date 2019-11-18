import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: white;
  animation: fadedown 1s;

  @keyframes fadedown {
    from { 
      opacity: 0;
      transform: translateY(-50px)
    }
    to { 
      opacity: 1; 
      transform: translateY(0px)
    }
  }
`

export const Title = styled(Link)`
  text-decoration: none;
  border-bottom: 1pt solid transparent;
  z-index: 3;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem;
  }
`

export const Items = styled.div`
  display: block;

  @media (max-width: ${breakpoints.s}px){
    display: none;
  }
`

export const NavItem = styled(Link)`
  text-decoration: none;
  border-bottom: 1pt solid transparent;
  margin-right: 1rem;

  &:hover {
    border-bottom: 1pt solid white;
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const HamburgerWrapper = styled.span`
  z-index: 23;
  cursor: pointer;

  @media (min-width: ${breakpoints.s}px){
    display: none;
  }
`
