import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend, ring}) => {
    console.log(ring);
  return (
    <div className="flex">
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>

      </p>
      {
        hasFriend && <Friend ring={ring}></Friend>
      }
    </div>
  );
};

export default Cousin;
