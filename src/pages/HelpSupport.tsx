import cart from "../assets/images/support/cart.png";
import credit_card from "../assets/images/support/credit-card.png";
import dish from "../assets/images/support/dish.png";
import help_circle from "../assets/images/support/help-circle.png";
import scooter from "../assets/images/support/scooter.png";
import arrow from "../assets/images/location-modal/arrow-right.png";

const Help_Support = () => {
  const data = [
    {
      id: 1,
      item: "Masala Dhosha",
      count: 4,
      orderDate: "18 Nov, 10:10 PM",
      orderStatus: "Delivered",
      restaurent: "Asian Kitchen, Noida",
      price: 300,
    },
    {
      id: 1,
      item: "Masala Dhosha",
      count: 4,
      orderDate: "18 Nov, 10:10 PM",
      orderStatus: "Delivered",
      restaurent: "Asian Kitchen, Noida",
      price: 300,
    },
    {
      id: 1,
      item: "Masala Dhosha",
      count: 4,
      orderDate: "18 Nov, 10:10 PM",
      orderStatus: "Delivered",
      restaurent: "Asian Kitchen, Noida",
      price: 300,
    },
  ];

  return (
    <div className="flex border-2">
      <div className="w-[35%] border-r p-6">
        <div>
          <p className="text-[#6A6A6A] font-urbanist text-[16px] font-medium leading-[20px]">
            Profile / Help and Support
          </p>
          <p className="text-[#050505] font-urbanist text-[24px] font-semibold leading-[140%]">
            Help & Support
          </p>

          <div className="space-y-6 mt-[24px]">
            {/* Menu Items */}
            <div className="border rounded-[16px] p-4">
              <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                <div className="flex items-center gap-[8px]">
                  <img src={cart} alt="Cart" className="h-[20px] w-[20px]" />
                  <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                    Orders
                  </span>
                </div>
                <div>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

              <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={help_circle}
                    alt="Help"
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                    Payments & Refunds
                  </span>
                </div>
                <div>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

              <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={scooter}
                    alt="Delivery & Address Issues"
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                    Delivery & Address Issues
                  </span>
                </div>
                <div>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

              <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={dish}
                    alt="Restaurant & Food Quality"
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                    Restaurant & Food Quality
                  </span>
                </div>
                <div>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

              <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                <div className="flex items-center gap-[8px]">
                  <img
                    src={credit_card}
                    alt="Offers & Coupons"
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                    Offers & Coupons
                  </span>
                </div>
                <div>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[65%] border-l p-6">
        <div>
          {data.map((item) => (
            <div
              key={item.id}
              className="border rounded-[16px] p-4 mb-4 bg-white"
            >
              <div className="flex justify-between items-center bg-white border-b-2 border-dashed pb-[8px]">
                <p className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">
                  {item.count} x {item.item}
                </p>
                <p className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">
                  {item.restaurent}
                </p>
              </div>
              <div className="flex justify-between items-center bg-white border-b-2 py-[8px]">
                <div className="text-[#6A6A6A] font-urbanist text-[10px] font-medium leading-[17px]">
                  <p>{item.orderDate}</p>
                  <p>{item.orderStatus}</p>
                </div>
                <p className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">
                  ₹ {item.price}
                </p>
              </div>
              <div className="flex justify-between items-center bg-white pt-[8px]">
                <div className="flex items-center gap-2">
                  <span className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">
                    All Details
                  </span>
                  <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
                </div>
                <p className="text-[#7402A7] font-urbanist text-[12px] font-medium leading-[20px]">
                  HELP
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help_Support;
