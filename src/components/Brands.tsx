interface BrandsProps {
  index: number;
  name: string;
  image: string;
  icon: string;
  by: string;
}

const Brands = ({ index, name, image, icon, by }: BrandsProps) => {
  return (
    <div className="flex flex-col items-center w-[88.5px]" key={index}>
      <div className="relative h-[150px] w-[150px] flex flex-col items-center rounded-[15px] border-[1.25px] border-[#E9E9E9] bg-white pt-2 overflow-hidden">
        <img
          src={icon}
          alt="brands"
          className={`${name === "Burger" ? "w-[60px] h-[33.75px]" : name === "Pizza" ? "w-[82px] h-[47px]" : name === "Noodles" ? "w-[94px] h-[94px]" : "w-[50px] h-[33.75px]"} aspect-video`}
        />
        {/* colored curved background */}
        <div
          className={`absolute bottom-0 w-full h-[85px] rounded-t-[70px]
    ${
      name === "Burger"
        ? "bg-[#7F29FF]"
        : name === "Pizza"
          ? "bg-[#FFC529]"
          : name === "Noodles"
            ? "bg-[#4AE164]"
            : "bg-gray-200"
    }`}
        />
        <img
          src={image}
          alt="brands"
          className="w-[155px] h-[148px] flex flex-col items-center justify-center z-10 -mt-[20px]"
        />
      </div>
      <span className="text-gray-900 font-urbanist text-sm font-medium">
        {name}
      </span>
      <span className="text-gray-500 font-urbanist text-xs font-normal">
        {by}
      </span>
    </div>
  );
};

export default Brands;
