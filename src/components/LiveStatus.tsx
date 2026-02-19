import status from "../assets/images/status.png";
import arrow from "../assets/images/arrow-right.png";

const LiveStatus = () => {
  return (
    <div className="fixed bottom-16 right-0 z-50">
      <div className="flex md:w-[376px] w-[280px] max-w-full h-[60px] px-[10px] py-[14px] justify-center items-center gap-2 rounded-l-[14px] bg-[#7402A7] shadow-lg">
        <img
          src={status}
          alt="Live Status"
          className="w-[30px] h-[30px] object-cover"
        />
        <p className="text-white font-urbanist text-[18px] font-medium leading-[20px]">
          Our Delivery Partner is on the way
        </p>
        <img src={arrow} alt="Arrow" className="ml-2 w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default LiveStatus;
