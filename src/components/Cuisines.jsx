import React from "react";

const Cuisines = ({ index, name, image }) => {
  return (
    <div className="flex flex-col items-center w-[88.5px]" key={index}>
      <img
        src={image}
        alt="cuisines"
        className="w-[110.625px] h-[90px] flex flex-col items-center justify-center"
      />
      <span className="text-gray-900 font-urbanist text-sm font-medium">
        {name}
      </span>
    </div>
  );
};

export default Cuisines;
