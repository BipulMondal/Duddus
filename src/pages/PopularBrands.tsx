import burger from "../assets/images/brands/burger.png";
import pizza from "../assets/images/brands/pizza.png";
import noodles from "../assets/images/brands/noodels.png";
import Brands from "../components/Brands";
import burgerIcon from "../assets/images/brands/b-burger.png";
import pizzaIcon from "../assets/images/brands/b-pizza.png";
import noodlesIcon from "../assets/images/brands/b-noodles.png";


const PopularBrands = () => {

  const brands = [
    { name: "Burger", image: burger, icon: burgerIcon, by: "by Burger King" },
    { name: "Pizza", image: pizza, icon: pizzaIcon, by: "by Pizza Hut" },
    { name: "Burger", image: burger, icon: burgerIcon, by: "by Burger King" },
    { name: "Noodles", image: noodles, icon: noodlesIcon, by: "by Noodle Co." },
    { name: "Burger", image: burger, icon: burgerIcon, by: "by Burger King" },
    { name: "Pizza", image: pizza, icon: pizzaIcon, by: "by Pizza Hut" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-gray-900 text-left font-urbanist text-2xl font-semibold leading-[140%] my-4">
          Popular brands
        </p>
      </div>
      <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
        {brands.map((item, index) => (
          <Brands key={index} index={index} name={item.name} image={item.image} icon={item.icon} by={item.by} />
        ))}
      </div>

    </div>
  );
};export default PopularBrands
