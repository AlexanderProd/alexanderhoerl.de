import React from 'react'

import useSiteMetadata from '~/hooks/useSiteMetadata'
import {
  Wrapper,
  Links,
  FooterItem, 
  OutgoingLink
} from './styles'

const Footer = () => {
  const { footer, social } = useSiteMetadata()

  return (
    <Wrapper>
      <Links>
        {footer.map(({name, link}) => (
          <FooterItem to={link} key={name}>
            {name}
          </FooterItem>
        ))}
        {social.map(({name, url}) => (
          <OutgoingLink href={url} target="_blank" rel="noopener noreferrer" key={name}>
            {name}
          </OutgoingLink>
        ))}
      </Links>
      <p>
        This page is contiously deployed with <a href="/">JAM-Stack in a Box</a>.
      </p>
    </Wrapper>
  )
}

export default Footer