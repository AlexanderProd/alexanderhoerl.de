import React, { useState } from 'react'

export const defaultLayoutContext = {
  mobileNavVisible: false,
  toggleMobileNav: () => { },
}

const LayoutContext = React.createContext(defaultLayoutContext)

export const LayoutProvider = ({ children }) => {
  const [mobileNavVisible, setMobileNavVisible] = useState(defaultLayoutContext.mobileNavVisible)

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible)
  }

  const layout = {
    mobileNavVisible,
    toggleMobileNav
  }

  return (
    <LayoutContext.Provider value={layout}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContext
