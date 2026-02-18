import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
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
          <div className="flex w-[193px] items-center">
            <div className="flex w-12 h-12 p-2.5 justify-center items-center gap-2.5 flex-shrink-0 rounded-full bg-white/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                  stroke="#706B66"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                  stroke="#706B66"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-gray-900 text-center text-base font-medium leading-[150%]">Home</span>
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

              <span className="overflow-hidden text-gray-600 text-sm font-normal leading-[160%] truncate">
                Block C, Sector 62, Noida, Uttar Pradesh
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form className="flex flex-1 max-w-[640px] min-w-[200px] px-4 py-3 items-center gap-3 rounded-2xl border border-gray-300 bg-white shadow-sm order-3 md:order-2 w-full md:w-auto" onSubmit={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clipPath="url(#clip0_70_7295)">
              <path
                d="M13.125 13.125L16.5 16.5"
                stroke="#7402A7"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 8.25C15 4.52208 11.9779 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15C11.9779 15 15 11.9779 15 8.25Z"
                stroke="#7402A7"
                strokeWidth="1.35"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_70_7295">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            placeholder="Search restaurants or food..."
            className="flex-1 border-none p-0 text-sm outline-none bg-transparent placeholder-gray-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Navigation Links */}
        <div className={`flex items-center gap-[17px] ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:order-3`}>
          <div className="flex w-12 h-12 p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-400/25 bg-white/25 cursor-pointer hover:bg-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z"
                stroke="#706B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z"
                stroke="#706B66"
                strokeWidth="1.5"
              />
              <path
                d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
                stroke="#706B66"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex w-12 h-12 p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-400/25 bg-white/25 cursor-pointer hover:bg-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.5 20.25C10.5 20.6642 10.1642 21 9.75 21C9.33579 21 9 20.6642 9 20.25C9 19.8358 9.33579 19.5 9.75 19.5C10.1642 19.5 10.5 19.8358 10.5 20.25Z"
                stroke="#6A6A6A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 20.25C19 20.6642 18.6642 21 18.25 21C17.8358 21 17.5 20.6642 17.5 20.25C17.5 19.8358 17.8358 19.5 18.25 19.5C18.6642 19.5 19 19.8358 19 20.25Z"
                stroke="#6A6A6A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 3H2.20664C3.53124 3 4.19354 3 4.6255 3.40221C5.05746 3.80441 5.10464 4.46503 5.19902 5.78626L5.45035 9.30496C5.5924 11.2936 5.66342 12.2879 5.96476 13.0961C6.62531 14.8677 8.08229 16.2244 9.89648 16.757C10.7241 17 11.7267 17 13.7317 17C15.8373 17 16.89 17 17.7417 16.7416C19.6593 16.1599 21.1599 14.6593 21.7416 12.7417C21.9426 12.0793 21.9872 11.299 21.9972 10M12.5 6H5.5"
                stroke="#6A6A6A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 6H22M19 9V3"
                stroke="#6A6A6A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex w-12 h-12 p-2.5 justify-center items-center gap-2.5 rounded-full border border-gray-400/25 bg-white/25 cursor-pointer hover:bg-white/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#6A6A6A"
                strokeWidth="1.8"
              />
              <path
                d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                stroke="#6A6A6A"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
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
    </nav>
  );
};

export default Navbar;
