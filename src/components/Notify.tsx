import burger from "../assets/images/notification/burger.png";
import boy from "../assets/images/notification/boy.png";
import check from "../assets/images/notification/check.png";

interface NotifyProps {
  day: string;
  count: number;
}

const Notify = ({ day, count }: NotifyProps) => {
  return (
    <div className="max-w-4xl w-[800px] mx-auto">
      <h6 className="text-[#6A6A6A] font-urbanist text-[16px] font-medium leading-[140%] mb-[12px]">
        {day}
      </h6>
      {Array.from({ length: count }).map((_, index) => (
        <div className="bg-white rounded-[16px] border border-[#E9E9E9] flex flex-col items-start gap-3 p-4 self-stretch mb-[20px]">
          <div className="flex justify-between items-center w-full bg-white">
            <div className="flex gap-[12px] items-center">
              <div>
                <img src={burger} alt="burger" className="h-[33px] w-[33px] aspect-square" />
              </div>
              <div>
                <h6 className="text-[#050505] font-urbanist text-[14px] font-medium leading-[20px]">
                  Order Successful
                </h6>
                <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-normal leading-[17px]">
                  14 Pizza from Asian Kitchen
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-medium leading-[17px]">
                08:30PM
              </p>
            </div>
          </div>

          <div className="h-[1px] border-dashed w-full bg-[#E9E9E9]"></div>

          <div className="flex justify-between items-center w-full bg-white">
            <div className="flex gap-[12px] items-center">
              <div>
                <img src={boy} alt="boy" className="h-[33px] w-[33px] aspect-square" />
              </div>
              <div>
                <h6 className="text-[#050505] font-urbanist text-[14px] font-medium leading-[20px]">
                  Delivery Partner assigned
                </h6>
                <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-normal leading-[17px]">
                  Ramesh is your delivery partner for Pizza
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-medium leading-[17px]">
                08:30PM
              </p>
            </div>
          </div>

          <div className="h-[1px] border-dashed w-full bg-[#E9E9E9]"></div>

          <div className="flex justify-between items-center w-full bg-white">
            <div className="flex gap-[12px] items-center">
              <div>
                <img src={check} alt="check" className="h-[33px] w-[33px] aspect-square" />
              </div>
              <div>
                <h6 className="text-[#050505] font-urbanist text-[14px] font-medium leading-[20px]">
                  Order Delivered
                </h6>
                <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-normal leading-[17px]">
                  Your Order 12 Pizza from Asian Kitchen has been delivered
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#6A6A6A] text-center font-urbanist text-[10px] font-medium leading-[17px]">
                08:30PM
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notify;
