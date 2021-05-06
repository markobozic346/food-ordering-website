import React from 'react'
import Admin from './Icons/Admin'
import Cart from './Icons/Cart'
import Logo from './Logo/Logo'
import './NavBar.scss'
import Nav from './NavMenu/Nav'
interface Props {

}

const NavBar = (props: Props) => {
    return (
        <div className='navbar-container'>
            <Logo />
            <Nav />
            <Cart />
            <Admin />
        </div>
    )
}

export default NavBar
