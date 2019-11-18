import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 2rem;
  animation: fadeup 1s ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  @keyframes fadeup {
    from { 
      opacity: 0;
      transform: translateY(50px)
    }
    to { 
      opacity: 1; 
      position: 0px;
      transform: translateY(0px)
    }
  }
`

export const Links = styled.div`
  & * {
    margin-right: 1rem;
  }

  &:last-item {
    margin-right: 0;
  }

  @media (max-width: ${breakpoints.s}px){
   display: none;
  }
`

export const FooterItem = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  color: white;

  &:hover {
    text-decoration: none;
  }
`

export const OutgoingLink = styled.a`
  font-size: 0.8rem;
  text-decoration: none;

  &:visited {
    color: white;
  }
`
