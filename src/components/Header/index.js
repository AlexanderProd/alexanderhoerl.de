import React from 'react'
import useGreeting from '../../hooks/useGreeting'

const Header = () => (
  <header>
    <h1>{useGreeting()}</h1>
  </header>
)

export default Header
