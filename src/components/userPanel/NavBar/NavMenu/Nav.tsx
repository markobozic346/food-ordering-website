import React from 'react'
import './Nav.scss'
interface Props {

}

const Nav = (props: Props) => {
    return (
        <nav className='nav'>
            <p className='nav-item'>Home</p>
            <p className='nav-item order-now'>Order Now</p>
            <p className='nav-item'>About Us</p>
            <p className='nav-item'>Contact Us</p>
        </nav>
    )
}

export default Nav
