import React from "react";

const YourSecurity = () => {
  return (
    <div className="flex flex-wrap my-[10rem] px-[20px] xl:px-0 justify-center">
      <div className="xl:w-[562px]">
        <h1 className="xl:text-[60px] xl:w-[405px] font-[700] xl:leading-[60px] ">
          Your security, our security
        </h1>
        <p className="text-[#37363F] my-[2rem] xl:w-[515px] xl:text-[24px] font-[400] ">
          Your investments is insured & guaranteed by both the company, Homly
          LLC and her partners.
        </p>
        <div className="my-[1rem]">
          <img src="/images/Group 1000002695.png" alt="" />
        </div>
        <div>
          <button
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
            }}
            className="bg-[#008081] mr-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
          >
            Book a call
          </button>
          <button className="bg-transparent border-[2px] border-[#000000] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]">
            Pay Here
          </button>
        </div>
      </div>
      <div className="relative xl:w-[600px] w-[100%] mt-[3rem] xl:mt-0 xl:h-inherit  h-[300px] ">
        <div className="xl:w-[499px] w-[70%] top-[3rem] absolute">
          <img className="w-[100%]" src="/images/Rectangle 305.png" alt="" />
        </div>
        <div className="xl:w-[268px] w-[50%] xl:top-[-5rem] xl:right-[-2rem] right-[1rem] absolute">
          <img
            className="w-[100%] rounded-[8px] xl:h-[218px]"
            src="/images/0f7011800b6bcd356991c816f4896213.jpeg"
            alt=""
          />
        </div>
        <div className=" xl:w-[244px] w-[50%] bottom-[3px] xl:bottom-[-9rem] right-[2px] absolute">
          <img
            className="w-[100%] rounded-[8px] xl:h-[218px]"
            src="/images/6758e5e59cd0afd138591fd1c76e63ef.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default YourSecurity;
