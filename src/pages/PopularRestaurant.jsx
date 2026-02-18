import Restaurants from "../components/Restaurants";
import img from "../assets/images/restaurants/1.png";

const PopularRestaurant = () => {
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
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-900 text-left font-urbanist text-2xl font-semibold leading-[140%] my-4">
          Popular brands
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
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
  );
};

export default PopularRestaurant;
