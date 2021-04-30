import React from 'react'
import './Cart.scss'
interface Props {

}

const Cart = (props: Props) => {
    return (
        <div className='cart'>
            🛒
            <p className='cart-item-number'>0</p>
        </div>
    )
}

export default Cart
