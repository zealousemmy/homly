import React from "react";
import TextImageCard from "./TextImageCard";
import TextImageCard2 from "./TextImageCard2";
import TextImageCard3 from "./TextImageCard3";

const HowItWorks = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center xl:text-[42px] text-[25px] font-[700] mt-[3rem] xl:mt-0 xl:my-[2rem] xl:leading-[42px]  ">
          How it works
        </h2>
        <p className="bg-[#E9F6F8] w-[186px] mx-auto text-[16px] font-[500] rounded-[8px] p-[8px] ">
          for INVESTORS
        </p>
      </div>
      <div className="flex flex-wrap mt-[3rem] justify-center p-[30px]">
        <TextImageCard />
        <TextImageCard2 />
        <TextImageCard3 />
      </div>
      <div className="xl:w-[334px] mx-auto my-[2rem] ">
        <button
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
          }}
          className="bg-[#008081] mx-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
        >
          Book a call
        </button>
        <button className="bg-transparent border-[2px] border-[#000000] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]">
          Pay Here
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
