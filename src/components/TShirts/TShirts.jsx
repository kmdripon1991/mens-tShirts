import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../Shirt/TShirt";
import Cart from "../Cart/Cart";
import "./TShirts.css";

const TShirts = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);
  // console.log(tShirts);
  const handleAddToCart = tShirt =>{
    const newCart = [...cart, tShirt];
    setCart(newCart);
  }

  const handleRemoveItem = id =>{
    console.log(id)
  }
  // console.log(cart)

  return (
    <div className="container">
      <div className="tShirts-container">
        {tShirts.map((tShirt) => (
          <TShirt 
          key={tShirt._id} 
          tShirt={tShirt}
          handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        cart={cart}
        handleRemoveItem={handleRemoveItem}
        ></Cart>
      </div>
    </div>
  );
};

export default TShirts;
