import styled from '@emotion/styled'

import { colors } from '../../ui/styles'

export const Wrapper = styled.div`
  margin-top: 3rem;
`

export const SocialLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  li {
    padding-top: 10px;

    :first-child {
      padding-top: 0px;
    }
  }
`

export const Link = styled.a`
  color: ${({ color }) => color ? color : colors.blue};

  :visited {
    color: ${({ color }) => color ? color : colors.blue};
  }
`
