import React from 'react'
import './Header.scss'
interface Props {

}

const Header = (props: Props) => {
    return (
        <div className='header'>
            <p className='yum'>yum yum!</p>
            <div className="text-container">
                <p className='mission'>Serving more than burgers since 1985.</p>
                {/* <h1 className='header-text'>Serving more than burgers since 1985.</h1> */}
            </div>
        </div >
    )
}

export default Header
