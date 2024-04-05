import React from "react";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ring}) => {
  return (
    <div className="grandpa">
      <h2 className="text-center">Father</h2>
      <section className="flex">
        <Myself ring={ring}></Myself>
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Father;
