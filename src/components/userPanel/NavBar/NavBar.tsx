import React from 'react'
import Cart from './Cart/Cart'
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
        </div>
    )
}

export default NavBar
