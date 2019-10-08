import React from 'react'

import {
  Wrapper,
  SocialLinks, 
  Link
} from './styles'

const Footer = ({ social }) => {
  const links = social.map(elem => (
    <li key={elem.site}>
      <Link href={elem.url} target="_blank" color={elem.color}>
        {elem.site}
      </Link>
    </li>
  ))

  return (
    <Wrapper>
      <p>Follow Me:</p>
      <SocialLinks>
        {links}
      </SocialLinks>
    </Wrapper>
  )
}

export default Footer