import React from "react";

const Hero = () => {
  return (
    <div
      className="relative mt-[6rem]"
      style={{ background: "url(/images/13744-01 1.png)" }}
    >
      <div className="absolute hidden xl:block w-[100%] right-0 -z-10 top-0">
        <img
          className="h-[588px] w-[100%] "
          src="/images/banner bg.png"
          alt=""
        />
      </div>
      <div className="">
        <div className="text-center my-[3rem]">
          <h1 className="font-[800] xl:text-[60px] leading-[60px] tracking-[1.5px] ">
            Invest in Homly Daily!
          </h1>
          <p className="xl:text-[20px] font-[500] my-[1rem] leading-[28px] xl:tracking-[1.5px] ">
            A new way to become a landlord in the 21st century
          </p>
          <div>
            <button
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
              }}
              className="bg-[#008081]  mx-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
            >
              Book a call
            </button>
            <button className="bg-transparent border-[2px] border-[#000000] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]">
              Pay Here
            </button>
          </div>
        </div>
        <div className="mx-auto xl:w-[1027.59px]">
          <img className="w-[100%]" src="/images/Group 945.png" alt="" />
        </div>
        <div className=" my-[2rem] flex flex-wrap justify-center ">
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderImageSource:
                "linear-gradient(to right, #00818140, #ffbd063d)",
              borderImageSlice: 1,
              borderRadius: "10px",
            }}
            className="flex xl:w-[263px] my-[1rem] xl:mt-0 border-[5px] rounded-[10px] bg-[#fff] mx-[2rem] p-[20px] items-center "
          >
            <div>
              <img src="/images/profit.png" alt="" />
            </div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              Smallest market entry
            </p>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderImageSource:
                "linear-gradient(to right, #00818140, #ffbd063d)",
              borderImageSlice: 1,
              borderRadius: "10px",
            }}
            className="flex xl:w-[263px] my-[1rem] xl:mt-0 bg-[#fff] border-[8px] rounded-[10px] mx-[2rem] p-[20px] items-center "
          >
            <div>
              <img src="/images/investment.png" alt="" />
            </div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              Exponential returns
            </p>
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderImageSource:
                "linear-gradient(to right, #00818140, #ffbd063d)",
              borderImageSlice: 1,
              borderRadius: "10px",
            }}
            className="flex xl:w-[263px] my-[1rem] xl:mt-0 bg-[#fff] mx-[2rem] border-[8px] rounded-[10px] p-[20px] items-center "
          >
            <div>
              <img src="/images/shield.png" alt="" />
            </div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              Secure investment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
