import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    // const {_id, name} = cart;
    // console.log(cart)
    return (
        <div>
            <h1>Order Summery</h1>
            {
                cart.map(ts=> <p key={ts._id}>{ts.name} <button onClick={()=>handleRemoveItem(ts._id)}>x</button></p> )
            }
        </div>
    );
};

export default Cart;