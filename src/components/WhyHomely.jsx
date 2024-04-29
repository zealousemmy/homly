import React from "react";

const WhyHomely = () => {
  return (
    <div className="my-[5rem]">
      <div>
        <h1 className="text-center xl:text-[42px] font-[700] my-[1rem] xl:leading-[42px] ">
          Why Homly Daily
        </h1>
      </div>
      <div className="bg-[#6FCBDC1A] mt-[3rem] p-[20px]">
        <p className="text-center text-[32px] font-[700] my-[1rem] leading-[32px] ">
          1st year
        </p>
        <h2 className="text-center border-[10px] border-[#008081] rounded-[10px] xl:w-[628.77px] mx-auto py-[20px] text-[75.08px] font-[700] my-[1rem] leading-[75.08px] ">
          70-200%{" "}
          <span className="text-[75.08px] font-[500] leading-[75.08px] ">
            ROI
          </span>
        </h2>
        <h3
          style={{
            backgroundImage: "linear-gradient(to right,  #008081, #FFBE06)",
          }}
          className="text-[58px] font-[800] flex items-center justify-center text-[#fff] xl:w-[416px] mx-auto py-[8px] px-[5px] rounded-[50px] text-center "
        >
          8% <span className="text-[36px] font-[500]"> per month</span>
        </h3>
      </div>
    </div>
  );
};

export default WhyHomely;
