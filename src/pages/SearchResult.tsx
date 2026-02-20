import React from "react";
import add from "../assets/images/icons/add.png";
import minus from "../assets/images/icons/minus.png";
import star from "../assets/images/icons/star.png";
import img from "../assets/images/restaurants/1.png";
import Restaurants from "../components/Restaurants";

const SearchResult = () => {
  const [count, setCount] = React.useState(2);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = React.useState<number[]>([]);
  const [priceRange, setPriceRange] = React.useState({ min: 500, max: 5000 });

  const categories = [
    "Fast Food",
    "South Indian",
    "Chinese",
    "Veg",
    "Non-Veg",
    "Free Delivery",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };
  

  const restaurants = [
    {
      name: "Asian Kitchen",
      image: img,
      status: "open",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Restaurants",
      image: img,
      status: "closed",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Food",
      image: img,
      status: "closed",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Kitchen",
      image: img,
      status: "open",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Restaurants",
      image: img,
      status: "closed",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Food",
      image: img,
      status: "closed",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Kitchen",
      image: img,
      status: "open",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
    {
      name: "Asian Restaurants",
      image: img,
      status: "closed",
      star: "4.5",
      reviews: "78",
      time: "20 min",
      location: "sector 2",
    },
  ];

  return (
    <div className="flex gap-12 p-5">
      <div className="flex flex-col justify-between w-[430px] h-[851px] p-6 rounded-[16px] border border-[#E9E9E9] bg-white">
        <div>
          <div className="flex justify-between w-full items-center">
            <p className="text-[#050505] font-urbanist text-[18px] font-semibold leading-[140%]">
              Filter
            </p>
            <p className="text-[#7402A7] font-urbanist text-[18px] font-semibold leading-[140%]">
              Reset
            </p>
          </div>

          <div className="h-[2px] bg-gray-200 w-full my-[28px]"></div>

          <div>
            <p className="text-[#050505] font-urbanist text-[18px] font-semibold leading-[140%] mb-[20px]">
              Categories
            </p>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => toggleCategory(item)}
                  className={`flex flex-1 justify-center items-center gap-2 py-[10px] px-3 rounded-[10px] cursor-pointer ${
                    selectedCategories.includes(item)
                      ? "border border-[#7604A5] bg-[#7604A5]"
                      : "border border-[#E9E9E9] bg-white"
                  }`}
                >
                  <span className={`font-urbanist text-[16px] leading-[140%] ${
                    selectedCategories.includes(item) ? "text-white" : "text-[#050505]"
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[2px] bg-gray-200 w-full my-[28px]"></div>

          <div className="flex justify-between items-center w-full">
            <p className="text-[#050505] font-urbanist text-[18px] font-semibold leading-[140%]">
              Distance to me
            </p>
            <div className="flex items-center gap-[8px]">
              <img
                src={minus}
                alt="Minus"
                className="h-[16px] w-[16px]"
                onClick={() => setCount(count - 1)}
              />
              <span className="text-[#7604A5] font-urbanist text-[16px] font-medium leading-[140%]">
                {count} km{" "}
              </span>
              <img
                src={add}
                alt="Add"
                className="h-[16px] w-[16px]"
                onClick={() => setCount(count + 1)}
              />
            </div>
          </div>

          <div className="h-[2px] bg-gray-200 w-full my-[28px]"></div>

          <div className="w-full">
            <p className="text-[#050505] font-urbanist text-[18px] font-semibold leading-[140%] mb-[20px]">
              Rating
            </p>
            <div className="flex justify-between items-center gap-[12px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  onClick={() => toggleRating(index + 1)}
                  className={`flex flex-1 justify-center items-center gap-1 py-[10px] px-3 rounded-[10px] cursor-pointer ${
                    selectedRatings.includes(index + 1)
                      ? "border border-[#7604A5] bg-[#7604A5]"
                      : "border border-[#E9E9E9] bg-white"
                  }`}
                >
                  <span className={selectedRatings.includes(index + 1) ? "text-white" : "text-[#050505]"}>
                    {index + 1}
                  </span>
                  <img src={star} alt="Star" className="h-[14px] w-[14px]" />
                </div>
              ))}
            </div>
          </div>

          <div className="h-[2px] bg-gray-200 w-full my-[28px]"></div>

          <div className="flex justify-between items-center w-full mb-[28px]">
            <p className="text-[#050505] font-urbanist text-[18px] font-semibold leading-[140%]">
              Price
            </p>
            <div className="flex items-center gap-[8px]">₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}</div>
          </div>

          <div className="w-full relative py-2">
            <div className="relative h-5">
              {/* Track background */}
              <div className="absolute w-full h-1 bg-gray-300 rounded-full top-1/2 -translate-y-1/2"></div>
              {/* Selected range highlight */}
              <div 
                className="absolute h-1 bg-[#7402A7] rounded-full top-1/2 -translate-y-1/2"
                style={{
                  left: `${(priceRange.min / 10000) * 100}%`,
                  width: `${((priceRange.max - priceRange.min) / 10000) * 100}%`
                }}
              ></div>
              {/* Min range input */}
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="100"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Math.min(Number(e.target.value), priceRange.max - 100) })}
                className="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7402A7] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#7402A7] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent" 
                style={{ zIndex: 5 }}
              />
              {/* Max range input */}
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="100"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Math.max(Number(e.target.value), priceRange.min + 100) })}
                className="absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#7402A7] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#7402A7] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:cursor-pointer [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent" 
                style={{ zIndex: 6 }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center self-stretch py-3 pr-3 pl-6 rounded-[150px] bg-[#7604A5]">
          <p className="text-white font-urbanist text-[18px] font-semibold leading-[140%]">
            Show Results
          </p>
        </div>
      </div>

      <div>
        <p className="text-[#6A6A6A] font-urbanist text-[16px] font-medium leading-[20px] mb-10">
          Showing 1644 Results
        </p>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {restaurants.map((item, index) => (
              <Restaurants
                key={index}
                name={item.name}
                image={item.image}
                status={item.status}
                star={item.star}
                reviews={item.reviews}
                time={item.time}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
