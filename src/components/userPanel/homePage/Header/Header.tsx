import React from 'react'
import './Header.scss'
interface Props {

}

const Header = (props: Props) => {
    return (
        <div className='header'>
            <div className="text-container">
                <div className="text">
                    <h1>yum-yum</h1>
                </div>
            </div>
        </div>
    )
}

export default Header
