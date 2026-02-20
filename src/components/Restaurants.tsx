import React from "react";
import arrow from "../assets/images/restaurants/arrow-right.png";
import ratting from "../assets/images/restaurants/star.png";
import pointer from "../assets/images/restaurants/location.png";
import clock from "../assets/images/restaurants/clock.png";

interface RestaurantsProps {
  name: string;
  image: string;
  status: string;
  star: number | string;
  reviews: number | string;
  time: string;
  location: string;
}

const Restaurants = ({
  name,
  image,
  status,
  star,
  reviews,
  time,
  location,
}: RestaurantsProps) => {
  return (
    <div className="min-w-[405px] h-[198px] rounded-[18px] relative">
      <div>
        <img
          src={image}
          alt={name}
          className={`h-[198px] w-full ${status === "open" ? "" : "grayscale brightness-40"}`}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-white bg-black/10 backdrop-blur-[12.27px] bg-opacity-80 p-2 flex justify-between items-center rounded-b-[18px]">
        <div className="">
          <h6>{name}</h6>
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-1 items-center">
              <img src={ratting} alt="star" className="h-[15px] w-[15px]" />{" "}
              {star} ({reviews})
            </div>
            <div className="flex gap-1 items-center">
              <img src={clock} alt="clock" className="h-[15px] w-[15px]" />{" "}
              {time}
            </div>
            <div className="flex gap-1 items-center">
              <img src={pointer} alt="location" className="h-[15px] w-[15px]" />{" "}
              {location}
            </div>
          </div>
        </div>
        <div>
          <img src={arrow} alt="arrow" className="h-[30px] w-[30px]" />
        </div>
      </div>

      {status && (
        <div
          className={`absolute top-8 right-0 inline-flex justify-center items-center py-[5px] px-[11px] gap-[11px] rounded-l-[4.267px] ${status === "open" ? "bg-[#7402A7]" : "bg-[#C96B03]"}`}
        >
          <p
            className={`${status === "open" ? "text-white" : "text-black"} font-urbanist text-[12.8px] font-semibold leading-[140%]`}
          >
            {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
