import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    let message;

    if(cart.length > 2){
        message = <p>You added MOre than 2 items</p>
    }
    

    return (
        <div>
            <h3>Order Summery</h3>
            {message}
            {
                cart.length > 5 ? <span>Boro loker pula</span> : <span>Fokinni</span>
            }
            {
                cart.length===0 && <p>No items added</p>
            }
            {
                cart.length ===7 || <p>Akhono 7 ta hoi nai</p>
            }

            {
                cart.map(ts=> <p key={ts._id}>{ts.name} <button onClick={()=>handleRemoveItem(ts._id)}>x</button></p> )
            }
        </div>
    );
};

export default Cart;