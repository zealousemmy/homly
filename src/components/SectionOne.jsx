import React from "react";

const SectionOne = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #6FCBDC1A, #6FCBDC, #6FCBDC1A)",
      }}
      className=" xl:p-[60px] p-[20px] "
    >
      <div className="xl:w-[1005px] mx-auto ">
        <h1 className="xl:text-[36px] text-center xl:leading-[43.2px] font-[400]">
          Do you remember the returns you last had investing in lands & property
          or perhaps you know someone who did?
        </h1>
        <div className=" my-[2rem] flex flex-wrap justify-center ">
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="flex flex-col w-[263px] bg-[#fff] mx-[2rem] pb-[20px] items-center "
          >
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #008081, #FFBE06)",
              }}
              className="h-[10px] mb-[1.5rem] w-[100%]"
            ></div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              High Capital Entry
            </p>
          </div>
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="flex flex-col w-[263px] bg-[#fff] mx-[2rem] pb-[20px] items-center "
          >
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #008081, #FFBE06)",
              }}
              className="h-[10px] mb-[1.5rem] w-[100%]"
            ></div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              Time Consuming{" "}
            </p>
          </div>
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="flex flex-col w-[263px] bg-[#fff] mx-[2rem] pb-[20px] items-center "
          >
            <div
              style={{
                backgroundImage: "linear-gradient(to right, #008081, #FFBE06)",
              }}
              className="h-[10px] mb-[1.5rem] w-[100%]"
            ></div>
            <p className=" ml-[1rem] font-[500] leading-[24px] text-[24px]">
              Low Yield
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
