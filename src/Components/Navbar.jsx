import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between p-0 '>
      <Logo/>
      <h1>Header</h1>
    </header>
  )
}

export default Navbar
