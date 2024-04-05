import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../Shirt/TShirt";
import Cart from "../Cart/Cart";
import "./TShirts.css";
import toast from "react-hot-toast";

const TShirts = () => {
  const tShirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tShirt) => {
    const exists = cart.find((ts) => ts._id === tShirt._id);
    if (exists) {
      toast("You already added this product");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };

  const handleRemoveItem = (id) => {
    const remaining = cart.filter(ts=>ts._id !== id)
    setCart(remaining)
  };

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
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default TShirts;
