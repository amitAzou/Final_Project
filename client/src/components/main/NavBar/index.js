import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn} from './NavBarElements'
import SiteLogo from '../../common/SiteLogo/SiteLogo'

const NavBar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/main" activestyle>
            Home
          </NavLink>
          <NavLink to="/podcasts" activestyle>
            Podcasts
          </NavLink>
          <NavLink to="/news" activestyle>
            News
          </NavLink>
          <NavLink to="/transfers" activestyle>
            Transfers
          </NavLink>
        </NavMenu>
        <NavBtn>
          <SiteLogo />
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar
