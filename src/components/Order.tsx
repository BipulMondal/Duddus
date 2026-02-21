import more from "../assets/images/order/more.png";
import bike from "../assets/images/order/bike.png";
import { OrderI } from "../utils/types";

const Order = ({ order }: { order: OrderI }) => {
 
  return (
    <div className="rounded-[16px] border p-[12px] mt-4">
      <div className="flex justify-between items-center border-b-2 pb-[12px]">
        <div className="flex gap-[8px] items-center">
          <div className="flex items-center gap-4">
            <img
              src={order.items.image}
              alt="food"
              className="h-[75px] w-[75px] rounded-[12px]"
            />
          </div>
          <div className="">
            <p className="text-[#050505] font-urbanist text-[18px] font-medium leading-[20px]">
              {order.restaurantName}
            </p>
            <p className="text-[#6A6A6A] font-urbanist text-[12px] font-normal leading-[17px]">
              {order.restaurantAddress}
            </p>
          </div>
        </div>
        <div>
          <img src={more} alt="more" className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="flex justify-between items-center py-[12px] border-b-2 border-dashed">
        <p className="text-[#050505] font-urbanist text-[16px] font-medium leading-[20px]">
          {order.items.quantity} x {order.items.name}
        </p>
        <p className="text-[#050505] font-urbanist text-[16px] font-medium leading-[20px]">
          ₹{order.items.price}.00
        </p>
      </div>
      <div className="flex justify-center items-center border-2 py-[12px] px-[9px] mt-[10px] rounded-[8px] gap-[8px] cursor-pointer">
        <img src={bike} alt="bike" className="h-[24px] w-[24px]" />
        <p className="text-[#7402A7] font-urbanist text-[16px] font-medium leading-[15px]">
          Track Your Order
        </p>
      </div>
    </div>
  );
};

export default Order;
