import Order from "../components/Order";
import food from "../assets/images/order/food.png";
import map from "../assets/images/order/map.png";
import partner from "../assets/images/order/delivary-partner.png";
import message from "../assets/images/order/message.png";
import call from "../assets/images/order/call.png";
import menu from "../assets/images/order/more.png";
import arrow from "../assets/images/navbar/arrow-right.png";
import { useState } from "react";

const AllOrder = () => {
  const [activeTab, setActiveTab] = useState<"pending" | "previous">("pending");
  const orders = [
    {
      id: 1,
      restaurantName: "Asian Kitchen",
      restaurantAddress: "Sector 62, Noida",
      items: {
        name: "Masala Dosa",
        quantity: 4,
        price: 300,
        image: food,
      },
    },
    {
      id: 2,
      restaurantName: "Asian Kitchen",
      restaurantAddress: "Sector 62, Noida",
      items: {
        name: "Masala Dosa",
        quantity: 4,
        price: 300,
        image: food,
      },
    },
    {
      id: 3,
      restaurantName: "Asian Kitchen",
      restaurantAddress: "Sector 62, Noida",
      items: {
        name: "Masala Dosa",
        quantity: 4,
        price: 300,
        image: food,
      },
    },
    {
      id: 4,
      restaurantName: "Asian Kitchen",
      restaurantAddress: "Sector 62, Noida",
      items: {
        name: "Masala Dosa",
        quantity: 4,
        price: 300,
        image: food,
      },
    },
  ];

  return (
    <div className="flex border-2 bg-[#FFFFFF]">
      <div className="w-[35%] border-r p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("pending")}
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200
            ${
              activeTab === "pending"
                ? "text-[#7402A7]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Pending Orders
            {activeTab === "pending" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#7402A7] rounded-full"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("previous")}
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200
            ${
              activeTab === "previous"
                ? "text-[#7402A7]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Previous Orders
            {activeTab === "previous" && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#7402A7] rounded-full"></span>
            )}
          </button>
        </div>

        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
      <div className="w-[65%] border-l">
        <div>
          <img src={map} alt="map" className="h[344px] min-w-[810px] w-full" />
        </div>

        <div className="p-6">
          <div className="border-2 p-[12px] rounded-[16px]">
            <div className="flex justify-between border-b-2 pb-[12px]">
              <p className="text-[#050505] font-urbanist text-[16px] font-semibold leading-[140%]">
                Your Order is Arriving in{" "}
                <span className="text-[#7402A7]">29:16</span> Mins
              </p>
              <img src={menu} alt="menu" className="h-[16px] w-[16px]" />
            </div>
            <div className="flex justify-between items-center border-b-2 py-[12px]">
              <div className="flex gap-[8px] items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={partner}
                    alt="partner"
                    className="h-[75px] w-[75px] rounded-[12px]"
                  />
                </div>
                <div className="">
                  <p className="text-[#050505] font-urbanist text-[18px] font-medium leading-[20px]">
                    Rohan Kumar
                  </p>
                  <p className="text-[#6A6A6A] font-urbanist text-[12px] font-normal leading-[17px]">
                    Delivery Partner
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex justify-center items-center h-[36px] w-[36px] rounded-full border-2">
                  <img src={message} alt="message" className="h-full w-full" />
                </div>
                <div className="flex justify-center items-center h-[36px] w-[36px] rounded-full border-2">
                  <img src={call} alt="call" className="h-full w-full" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-[12px] bg-[#F5F5F5] rounded-[12px] px-[12px] py-[7.5px] mt-[12px]">
              <input
                type="text"
                placeholder="Add Delivery Instructions"
                className="text-[#6A6A6A] font-urbanist text-[14px] font-medium leading-[160%] outline-none bg-transparent"
              />
              <button className="flex items-center py-[7.5px] px-[12px] gap-[6px] rounded-[7.5px] border-[0.75px] border-[#7402A7] bg-[#7402A7] text-white">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="border-2 p-[12px] rounded-[16px]">
            {/* Header */}
            <div className="flex justify-between items-center pb-[12px] border-b-2">
              <p className="text-[#050505] font-urbanist text-[16px] font-semibold leading-[140%]">
                Order Summary
              </p>
              <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
            </div>

            {/* Restaurant Info (Taking from first order) */}
            <div className="flex justify-between items-center border-b-2 py-[12px]">
              <div className="flex gap-[8px] items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={orders[0].items.image}
                    alt="partner"
                    className="h-[75px] w-[75px] rounded-[12px]"
                  />
                </div>
                <div>
                  <p className="text-[#050505] font-urbanist text-[18px] font-medium leading-[20px]">
                    {orders[0].restaurantName}
                  </p>
                  <p className="text-[#6A6A6A] font-urbanist text-[12px] font-normal leading-[17px]">
                    {orders[0].restaurantAddress}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={menu} alt="menu" className="h-[24px] w-[24px]" />
              </div>
            </div>

            {/* Items List */}
            <div>
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center py-[12px] border-b-2"
                >
                  <p className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">
                    {order.items.quantity} x {order.items.name}
                  </p>
                  <p className="text-[#050505] font-urbanist text-[12px] font-medium leading-[20px]">₹{order.items.price}.00</p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-[12px]">
              <p className="text-[#050505] font-urbanist text-[16px] font-medium leading-[160%]">Total</p>
              <p className="text-[#050505] font-urbanist text-[16px] font-medium leading-[160%]">
                ₹{" "}
                {orders.reduce(
                  (acc, order) =>
                    acc + order.items.price * order.items.quantity,
                  0,
                )}
                .00
              </p>
            </div>

            {/* Instructions */}
            <div className="flex justify-between items-center pt-[12px] bg-[#F5F5F5] rounded-[12px] px-[12px] py-[7.5px] mt-[12px]">
              <input
                type="text"
                placeholder="Add Cooking Instructions"
                className="text-[#6A6A6A] font-urbanist text-[14px] font-medium leading-[160%] outline-none bg-transparent"
              />
              <button className="flex items-center py-[7.5px] px-[12px] gap-[6px] rounded-[7.5px] border-[0.75px] border-[#7402A7] bg-[#7402A7] text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrder;
