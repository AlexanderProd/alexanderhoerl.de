import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import LayoutContext from '~/context/LayoutContext'
import { 
  Wrapper,
  ItemsList,
  PrimaryNavItem,
} from './styles'

const MobileNav = ({ visible, nav }) => {
  const { toggleMobileNav } = useContext(LayoutContext)

  const handleClick = link => {
    toggleMobileNav()
    navigate(link)
  }

  const PrimaryNav = nav
    ? nav.map(({ name, link }) => (
      <PrimaryNavItem key={name} onClick={() => handleClick(link)}>
        {name}
      </PrimaryNavItem>
    ))
    : null

  return (
    <Wrapper visible={visible}>
      <ItemsList>
        {PrimaryNav}
      </ItemsList>
    </Wrapper>
  )
}

export default MobileNav