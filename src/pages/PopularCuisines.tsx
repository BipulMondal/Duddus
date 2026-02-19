import React from "react";
import Cuisines from "../components/Cuisines";
import biryani from "../assets/images/cuisines/biryani.svg";
import burger from "../assets/images/cuisines/burger.svg";
import cake from "../assets/images/cuisines/cake.svg";
import chicken from "../assets/images/cuisines/chicken.svg";
import dosa from "../assets/images/cuisines/dosa.svg";
import fryrice from "../assets/images/cuisines/fryrice.svg";
import pizza from "../assets/images/cuisines/pizza.svg";
import sandwich from "../assets/images/cuisines/sandwich.svg";

const PopularCuisines = () => {
  const cuisines = [
    { name: "Biryani", image: biryani },
    { name: "Burger", image: burger },
    { name: "Cake", image: cake },
    { name: "Chicken", image: chicken },
    { name: "Dosa", image: dosa },
    { name: "Fry Rice", image: fryrice },
    { name: "Pizza", image: pizza },
    { name: "Sandwich", image: sandwich },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-900 text-left font-urbanist text-2xl font-semibold leading-[140%]">
          Popular Cuisines
        </p>
        <p className="text-purple-600 font-urbanist text-base font-medium cursor-pointer hover:text-purple-800">
          View all
        </p>
      </div>
      <div className="flex justify-between items-center">
        {cuisines.map((item, index) => (
          <Cuisines key={index} index={index} name={item.name} image={item.image} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        {cuisines.map((item, index) => (
          <Cuisines key={index} index={index} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default PopularCuisines;
