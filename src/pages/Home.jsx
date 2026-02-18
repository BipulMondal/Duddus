import TopCard from "../components/TopCard";
import PopularBrands from "./PopularBrands";
import PopularCuisines from "./PopularCuisines";
import PopularRestaurant from "./PopularRestaurant";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <TopCard />
      <PopularCuisines />
      <PopularBrands />
      <PopularRestaurant />
    </div>
  );
};

export default Home;
