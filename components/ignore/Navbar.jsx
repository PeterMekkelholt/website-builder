import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/sample-logo.png'
import NavItem from './NavItem'

const MENU_LIST = [
  { text: 'Products', href: '/products' },
  { text: 'About Us 2', href: '/about' },
  { text: 'Contact', href: '/contact' },
]
const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          <Image src={logo} alt="Sample logo" width={100} height={100} />
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
