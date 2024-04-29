import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="bg-[#fff] p-4 px-[50px] fixed top-0 left-0 w-[100%] z-10">
      <div className="flex  w-[100%] justify-between relative items-center">
        {/* Logo */}
        <div className="xl:w-[156px]">
          <img
            className="h-[41px] w-[100%]"
            src="/images/logo.png"
            alt="Logo"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-[#111111] focus:outline-none"
            onClick={toggleNav}
          >
            {showNav ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
        </div>

        {/* Regular Navigation Links */}
        <div className="hidden md:flex justify-center items-center ">
          <a
            href="#"
            className="text-[#111111] mx-[1rem] px-3 py-2 hover:bg-gray-200"
          >
            Approach
          </a>
          <a
            href="#"
            className="text-[#111111] mx-[1rem] px-3 py-2 hover:bg-gray-200"
          >
            HOW IT WORKS
          </a>
          <a
            href="#"
            className="text-[#111111] mx-[1rem] px-3 py-2 hover:bg-gray-200"
          >
            WHY US
          </a>
          <a
            href="#"
            className="text-[#111111] mx-[1rem] px-3 py-2 hover:bg-gray-200"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-[#111111] mx-[1rem] px-3 py-2 hover:bg-gray-200"
          >
            TEAM
          </a>
          <a
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
            }}
            href="#"
            className="bg-[#008081] mx-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
          >
            Download Presentation
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        {showNav && (
          <div className="mt-2 absolute h-[95vh] left-[0rem] w-[100%] bg-[#fff]">
            <a
              href="#"
              className="text-[#111111] block px-3 py-2 hover:bg-gray-700"
            >
              Approach
            </a>
            <a
              href="#"
              className="text-[#111111] block px-3 py-2 hover:bg-gray-700"
            >
              HOW IT WORKS
            </a>
            <a
              href="#"
              className="text-[#111111] block px-3 py-2 hover:bg-gray-700"
            >
              WHY US
            </a>
            <a
              href="#"
              className="text-[#111111] block px-3 py-2 hover:bg-gray-700"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-[#111111] block px-3 py-2 hover:bg-gray-700"
            >
              TEAM
            </a>
            <a
              href="#"
              className="bg-[#008081] text-white  mx-auto font-bold py-[12px] w-[60%] px-4 rounded-[50px] block mt-4"
            >
              Download Presentation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
