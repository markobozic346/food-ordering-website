import React from 'react'
import './Nav.scss'
interface Props {

}

const Nav = (props: Props) => {
    return (
        <nav className='nav'>
            <p className='nav-item'>Burgers</p>
            <p className='nav-item order-now'>Fries</p>
            <p className='nav-item'>Desserts</p>
            <p className='nav-item'>Drinks</p>
        </nav>
    )
}

export default Nav
