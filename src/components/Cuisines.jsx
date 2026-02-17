import React from "react";

const Cuisines = ({index, name, image}) => {
  return (
    <div className="cuisines-main" key={index}>
      <img src={image} alt="cuisines" />
      <span>{name}</span>
    </div>
  );
};

export default Cuisines;
