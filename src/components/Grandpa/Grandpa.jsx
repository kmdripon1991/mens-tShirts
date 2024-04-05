import React, { createContext, useContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
import { MoneyContext } from "../../App";




const Grandpa = () => {

  const ring = 'diamond';
  const money = useContext(MoneyContext);


  return (
    <div className="grandpa">
      <h2 className="text-center">Grandpa</h2>
      <p>Money: {money}</p>
      <section className="flex">
        <Father ring={ring}></Father>
        <Uncle />
        <Aunty ring={ring}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;
