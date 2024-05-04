import React from "react";

const HowItWorksTwo = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-center xl:text-[42px] text-[25px] font-[700] mt-[3rem] xl:mt-0 xl:my-[2rem] xl:leading-[42px]  ">
          How it works
        </h2>
        <p className="bg-[#E9F6F8] uppercase w-[186px] mx-auto text-[16px] font-[500] rounded-[8px] p-[8px] ">
          for customers{" "}
        </p>
        <p className="xl:w-[863px] w-[90%] my-[3rem] mx-auto font-[400] xl:text-[24px] xl:leading-[30.24px] ">
          Via the Homly platform & app, people can book rooms for as low as{" "}
          <strong>N10,000</strong> per day, in an environment that encourages
          meeting new persons, sharing spaces, free wifi, joint activities,
          creator experiences, together moments and much more.
        </p>
      </div>
      <div className="flex justify-center relative">
        <div className="absolute z-[-1] h-[inherit] w-[1440px] right-0 top-0">
          <img
            className="w-[100%]  h-[588px]"
            src="/images/Frame 1000004787.svg"
            alt=""
          />
        </div>

        <div>
          <img src="/images/Group 1000002698.svg" alt="" />
        </div>
        {/* <div>
          <img src="/images/Nokia XR21.png" alt="" />
        </div>
        <div>
          <img src="/images/Nokia XR21.png" alt="" />
        </div>
        <div>
          <img src="/images/Nokia XR21.png" alt="" />
        </div>
        <div>
          <img src="/images/Nokia XR21.png" alt="" />
        </div> */}
      </div>
      <div className="w-[334px] mx-auto my-[2rem] ">
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

export default HowItWorksTwo;
