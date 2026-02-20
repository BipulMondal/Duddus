import LiveStatus from "../components/LiveStatus";
import TopCard from "../components/TopCard";
import PopularBrands from "./PopularBrands";
import PopularCuisines from "./PopularCuisines";
import PopularRestaurant from "./PopularRestaurant";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-5">
      <TopCard />
      <PopularCuisines />
      <PopularBrands />
      <PopularRestaurant />
      <LiveStatus />
    </div>
  );
};

export default Home;
