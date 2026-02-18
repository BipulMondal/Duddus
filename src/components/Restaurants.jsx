import React from "react";
import arrow from "../assets/images/restaurants/arrow-right.png";

const Restaurants = ({
  name,
  image,
  status,
  star,
  reviews,
  time,
  location,
}) => {
  return (
    <div className="min-w-[405px] h-[198px] rounded-[18px] relative">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-white bg-black bg-opacity-80 p-2 flex justify-between items-center rounded-b-[18px]">
        <div className="">
          <h6>{name}</h6>
          <div className="flex justify-between items-center gap-4">
            <p>
              ★ {star} ({reviews})
            </p>
            <p>{time}</p>
            <p>{location}</p>
          </div>
        </div>
        <div>
          <img src={arrow} alt="arrow" className="h-[30px] w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
