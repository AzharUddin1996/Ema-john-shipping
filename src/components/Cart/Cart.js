import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h1>Order summary</h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total price:{ }</p>
            <p>shipping :</p>
            <p>Text:</p>
            <h4>grand Total:</h4>
        </div>
    );
};

export default Cart;