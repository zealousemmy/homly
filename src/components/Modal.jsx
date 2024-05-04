import React from "react";
import Form from "./Form";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              {/* Modal content */}
              <div className="">
                <div className="flex items-center relative px-4 py-6  bg-[#6fccdc32] justify-between pb-3">
                  <p className="text-xl text-center w-full font-bold">
                    Registration Form
                  </p>
                  <button
                    onClick={onClose}
                    className="text-gray-500 absolute right-[1.3rem] top-[1.3rem] hover:text-gray-700"
                  >
                    <svg
                      fill="#000000"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                    </svg>
                  </button>
                </div>
                <div className="">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
