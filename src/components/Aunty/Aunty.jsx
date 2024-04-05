import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ring}) => {
  return (
    <div>
      <h2 className="text-center">Aunty</h2>
      <section className="flex">
        <Cousin>Abul</Cousin>
        <Cousin hasFriend={true} ring={ring}>Babul</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
