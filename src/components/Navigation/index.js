import React, { useContext } from 'react'

import LayoutContext from '~/context/LayoutContext'
import useSiteMetadata from '~/hooks/useSiteMetadata'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import MobileNav from './MobileNav'
import { 
  Wrapper,
  Title,
  Items,
  NavItem,
} from './styles'

const Navigation = () => {
  const {
    mobileNavVisible,
    toggleMobileNav,
  } = useContext(LayoutContext)
  const { nav } = useSiteMetadata()

  return (
    <>
      <MobileNav nav={nav} visible={mobileNavVisible} />
      <Wrapper>
        <Title to="/">Alexander Hörl</Title>
        {mobileNavVisible
          ? <CloseIcon onClick={toggleMobileNav} />
          : <HamburgerIcon onClick={toggleMobileNav} />}
        <Items>
          {nav.map(({ name, link }) => (
            <NavItem to={link} key={name}>
              {name}
            </NavItem>
          ))}
        </Items>
      </Wrapper>
    </>
  )
}

export default Navigation
