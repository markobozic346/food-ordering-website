import React from 'react'
import './Header.scss'
interface Props {

}

const Header = (props: Props) => {
    return (
        <div className='header'>
            <p className='yum'>yum yum!</p>
            <div className="text-container">
                <p className='mission'>our mission</p>
                <h1 className='header-text'>is to challenge the way people think about burgers. We’re about creative construction. We think life is about experiences. Trying stuff. Learning. Being Inventive.</h1>
            </div>
        </div >
    )
}

export default Header
