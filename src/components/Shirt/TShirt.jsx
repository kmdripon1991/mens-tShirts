import React from 'react';
import './TShirt.css';

const TShirt = ({tShirt, handleAddToCart}) => {
    // console.log(tShirt)
    const {_id, name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;