import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/images/logo.png";
import location from "../assets/images/location.png";
import location2 from "../assets/images/location-modal/location.png";
import add from "../assets/images/location-modal/add.png";
import briefcase from "../assets/images/location-modal/briefcase.png";
import home from "../assets/images/location-modal/home.png";
import arrow from "../assets/images/location-modal/arrow-right.png";
import check from "../assets/images/location-modal/check.png";
import cancel from "../assets/images/navbar/cancel.png";
import search from "../assets/images/navbar/search.png";
import user from "../assets/images/navbar/user.png";
import bell from "../assets/images/navbar/bell.png";
import cart from "../assets/images/navbar/cart.png";
import profile from "../assets/images/navbar/profile.png";
import edit from "../assets/images/navbar/edit.png";
import address from "../assets/images/navbar/home.png";
import help from "../assets/images/navbar/help.png";
import star from "../assets/images/navbar/star.png";
import policy from "../assets/images/navbar/policy.png";
import terms from "../assets/images/navbar/terms.png";
import faq from "../assets/images/navbar/faq.png";
import info from "../assets/images/navbar/information.png";
import darkmode from "../assets/images/navbar/moon.png";
import signout from "../assets/images/navbar/logout.png";
import whitebell from "../assets/images/navbar/white-bell.png";
import whitecart from "../assets/images/navbar/white-cart.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const searchedItem = [
    "Dosa",
    "Burger",
    "Asian Kitchen",
    "Domino’s Pizza",
    "South Indian",
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] p-0 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 py-3 flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link to="/" className="">
            <img src={logo} alt="Duddus Logo" className="w-[146px] h-12" />
          </Link>
          <div className="flex w-[193px] items-center relative">
            <div className="flex w-12 h-12 p-2.5 justify-center items-center gap-2.5 flex-shrink-0 rounded-full bg-white/25">
              <img
                src={location}
                alt="location"
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-gray-900 text-center text-base font-medium leading-[150%]">
                  Home
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 7.5L9.41074 11.9107C9.68852 12.1885 9.82741 12.3274 10 12.3274C10.1726 12.3274 10.3115 12.1885 10.5893 11.9107L15 7.5"
                    stroke="#141B34"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="w-[160px] overflow-hidden text-gray-600 text-sm font-normal leading-[160%] truncate">
                Block C, Sector 62, Noida, Uttar Pradesh
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form
          className="flex flex-1 max-w-[390px] min-w-[200px] px-4 py-3 items-center gap-3 rounded-2xl border border-[#7402A7] bg-white shadow-sm order-3 md:order-2 w-full md:w-auto"
          onSubmit={handleSearch}
        >
          <img src={search} alt="search" className="h-[14px] w-[14px]" />
          <input
            type="text"
            placeholder="Search restaurants or food..."
            className="flex-1 border-none p-0 text-sm outline-none bg-transparent placeholder-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <img
              src={cancel}
              alt="cancel"
              className="h-[14px] w-[14px] cursor-pointer hover:opacity-70"
              onClick={(e) => {
                e.preventDefault();
                setSearchQuery("");
              }}
            />
          )}
        </form>

        {/* Navigation Links */}
        <div
          className={`flex items-center gap-[17px] ${isMenuOpen ? "flex" : "hidden"} md:flex md:order-3`}
        >
          {/* Navigation Links */}
          <div
            className={`flex items-center gap-[17px] ${isMenuOpen ? "flex" : "hidden"} md:flex md:order-3`}
          >
            <div
              className="h-[48px] w-[48px] rounded-full cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor:
                  activeIcon === "bell" ? "#7402A7" : "transparent",
              }}
              onClick={() => {
                setActiveIcon("bell");
                navigate("/notification");
              }}
            >
              <img
                src={activeIcon === "bell" ? whitebell : bell}
                alt="Notifications"
                className={`${activeIcon === "bell" ? "h-[22px] w-[22px]" : "h-[48px] w-[48px]"}`}
              />
            </div>
            <div
              className="h-[48px] w-[48px] rounded-full cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor:
                  activeIcon === "cart" ? "#7402A7" : "transparent",
              }}
              onClick={() => {
                setActiveIcon("cart");
                navigate("/orders");
              }}
            >
              <img
                src={activeIcon === "cart" ? whitecart : cart}
                alt="Cart"
                className={`${activeIcon === "cart" ? "h-[22px] w-[22px]" : "h-[48px] w-[48px]"}`}
              />
            </div>
            <div
              className="h-[48px] w-[48px] rounded-full cursor-pointer flex items-center justify-center"
              onClick={() => {
                setIsUserModalOpen(true);
              }}
            >
              <img src={user} alt="User" className="h-[48px] w-[48px]" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="hidden md:hidden bg-none border-none text-gray-900 text-2xl cursor-pointer p-1 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isLocationOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setIsLocationOpen(false)}
        >
          <div
            className="absolute left-[217px] top-[33px] mt-2 w-[430px] bg-white rounded-[20px] shadow-[0_8px_17px_0_rgba(0,0,0,0.20)] p-5 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Use Current Location */}
            <div className="flex justify-between items-center border rounded-[16px] p-[12px] cursor-pointer">
              <div className="flex items-center gap-3">
                <img
                  src={location2}
                  alt="location"
                  className="h-[16px] w-[16px]"
                />
                <span className="text-purple-700 font-medium">
                  Use Current location
                </span>
              </div>
              <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
            </div>

            {/* Address List Card */}
            <div className="border rounded-[16px] p-[12px] space-y-4">
              {/* HOME */}
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img src={home} alt="home" className="h-[20px] w-[20px]" />
                  <div>
                    <p className="text-[14px] font-medium text-black">HOME</p>
                    <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[#6A6A6A] font-urbanist text-[14px] font-normal leading-[140%]">
                      H-22, Block A, Sector 61, Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>
                <img src={check} alt="" className="h-[24px] w-[24px]" />
              </div>

              <div className="border-t border-dashed"></div>

              {/* WORK */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={briefcase}
                    alt="briefcase"
                    className="h-[20px] w-[20px]"
                  />
                  <div>
                    <p className="text-[14px] font-medium text-black">WORK</p>
                    <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[#6A6A6A] font-urbanist text-[14px] font-normal leading-[140%]">
                      H-22, Block A, Sector 61, Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>
                <button className="text-[#7402A7] font-urbanist text-[10px] font-semibold leading-[140%]">
                  SET DEFAULT
                </button>
              </div>

              <div className="border-t border-dashed"></div>

              {/* OTHER */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={location2}
                    alt="location"
                    className="h-[20px] w-[20px]"
                  />
                  <div>
                    <p className="text-[14px] font-medium text-black">OTHER</p>
                    <p className="w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-[#6A6A6A] font-urbanist text-[14px] font-normal leading-[140%]">
                      H-22, Block A, Sector 61, Noida, Uttar Pradesh
                    </p>
                  </div>
                </div>
                <button className="text-[#7402A7] font-urbanist text-[10px] font-semibold leading-[140%]">
                  SET DEFAULT
                </button>
              </div>
            </div>

            {/* Add New Address */}
            <div className="flex justify-between items-center border rounded-[16px] px-4 py-4 cursor-pointer">
              <div className="flex items-center gap-3">
                <img src={add} alt="add" className="h-[16px] w-[16px]" />
                <span className="text-[#7604A5] font-urbanist text-[16px] font-medium leading-[160%]">
                  Add New Address
                </span>
              </div>
              <img src={arrow} alt="arrow" className="h-[18px] w-[18px]" />
            </div>

            {/* Save Button */}
            <button className="w-full text-center flex justify-center items-center self-stretch py-3 pr-3 pl-6 rounded-[150px] bg-[#7604A5] text-white font-urbanist text-[16px] font-medium leading-[160%]">
              Save
            </button>
          </div>
        </div>
      )}

      {searchQuery && (
        <div className="absolute left-[42%] top-[59px] z-[999] w-[390px] bg-white rounded-[10px] shadow-[0_8px_17px_0_rgba(0,0,0,0.20)] p-4 space-y-5">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[#6A6A6A] font-urbanist text-[12px] font-medium leading-[140%]">
                Recent Searches
              </p>
              <div className="flex gap-[4px]">
                <img src={cancel} alt="cancel" className="h-[16px] w-[16px]" />
                <p
                  className="text-[#7402A7] font-urbanist text-[12px] font-medium leading-[140%] cursor-pointer"
                  onClick={() => setSearchQuery("")}
                >
                  Clear
                </p>
              </div>
            </div>
            {searchedItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center py-3 px-[6px] gap-2 self-stretch border-b"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* User Modal - Slide from Right */}
      {isUserModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={() => setIsUserModalOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out rounded-l-[20px] p-6 shadow-[-23px_0_72px_0_rgba(0,0,0,0.15)] gap-6 overflow-y-auto"
            style={{ animation: "slideInRight 0.3s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <img
                src={cancel}
                alt="close"
                className="flex w-[36px] h-[36px] p-[7.5px] justify-center items-center gap-[7.5px] shrink-0 rounded-full border-[0.75px] border-[rgba(112,107,102,0.25)] bg-[rgba(255,255,255,0.25)] cursor-pointer"
                onClick={() => setIsUserModalOpen(false)}
              />
            </div>

            {/* Modal Content */}
            <div className="space-y-6 mt-[24px]">
              {/* User Info */}
              <div className="rounded-[16px] border">
                <div className="flex justify-between items-center gap-4 p-[16px]">
                  <div className="rounded-full flex items-center justify-center gap-[12px] ">
                    <img
                      src={profile}
                      alt="User"
                      className="h-[72px] w-[72px]"
                    />
                    <div>
                      <h6 className="text-[#050505] font-urbanist text-[22px] font-semibold leading-[140%]">
                        Aman Bansal
                      </h6>
                      <p className="text-[#6A6A6A] font-urbanist text-[14px] font-medium leading-[20px]">
                        +91 9876543210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center py-[7.5px] px-[9px] gap-[6px] rounded-[7.5px] border-[0.75px] border-[#E9E9E9] bg-[#F5F5F5] cursor-pointer">
                    <img
                      src={edit}
                      alt="Edit"
                      className="h-[12px] w-[12px] cursor-pointer"
                    />
                    <p className="text-[#050505] text-center font-urbanist text-[12px] font-medium leading-[15px]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="flex  h-[60px] py-[12px] px-4 justify-between items-center gap-[10px] bg-[#7402A7] rounded-b-[16px]">
                  <div>
                    <p className="text-white font-urbanist text-[14px] font-medium leading-[140%]">
                      Upgrade to Duddus+
                    </p>
                    <p className="text-white font-urbanist text-[10px] font-medium leading-[16px] mt-1">
                      Get Exclusive Offers, Free food delivery and much more
                    </p>
                  </div>
                  <div className="flex items-center py-[7.5px] px-[9px] gap-[6px] rounded-[7.5px] border-[0.75px] border-[#E9E9E9] bg-[#FFFEFD]">
                    <button>Upgrade</button>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="border rounded-[16px] p-4">
                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={address}
                      alt="Home"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Manage Address
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div
                    className="flex items-center gap-[8px]"
                    onClick={() => (navigate("/help-and-support"), setIsUserModalOpen(false))}
                  >
                    <img src={help} alt="Help" className="h-[20px] w-[20px]" />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Help and Support
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>
                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={star}
                      alt="Rate Us"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Rate Us
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={terms}
                      alt="terms"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Terms and Conditions
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img src={faq} alt="FAQ" className="h-[20px] w-[20px]" />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      FAQs
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={info}
                      alt="Terms and Conditions"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      About Us
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={policy}
                      alt="Privacy Policy"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Privacy Policy
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>
                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={darkmode}
                      alt="Dark Mode"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Dark Mode
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gray-300 my-[20px]"></div>

                <div className="flex justify-between items-center gap-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ">
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={signout}
                      alt="Sign Out"
                      className="h-[20px] w-[20px]"
                    />
                    <span className="text-[#040404] font-urbanist text-[16px] font-medium leading-[20px]">
                      Sign Out
                    </span>
                  </div>
                  <div>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="h-[18px] w-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
