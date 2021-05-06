import React from 'react'
import './Icons.scss'
interface Props {

}

const Cart = (props: Props) => {
    return (
        <div className='icon'>
            🛒
            <p className='cart-item-number'>0</p>
        </div>
    )
}

export default Cart
