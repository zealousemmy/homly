import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MeetTheTeam = () => {
  return (
    <div className="my-[5rem]">
      <h1 className="text-center text-[42px] font-[700] my-[3rem] leading-[42px] ">
        Meet the team
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-[270px] xl:my-0 my-[1rem] mx-[2rem] text-center ">
          <div className="h-[228px] rounded-t-[10px] bg-[#0000002f] "></div>
          <div className="bg-[#E9F6F8] py-[70px] ">
            <h2 className="font-[500] text-[20px]">Name </h2>
            <p>Position</p>
          </div>
        </div>
        <div className="w-[270px] xl:my-0 my-[1rem] mx-[2rem] text-center ">
          <div className="h-[228px] rounded-t-[10px] bg-[#0000002f] "></div>
          <div className="bg-[#E9F6F8] py-[70px] ">
            <h2 className="font-[500] text-[20px]">Name </h2>
            <p>Position</p>
          </div>
        </div>
        <div className="w-[270px] xl:my-0 my-[1rem] mx-[2rem] text-center ">
          <div className="h-[228px] rounded-t-[10px] bg-[#0000002f] "></div>
          <div className="bg-[#E9F6F8] py-[70px] ">
            <h2 className="font-[500] text-[20px]">Name </h2>
            <p>Position</p>
          </div>
        </div>
        <div className="w-[270px] xl:my-0 my-[1rem] mx-[2rem] text-center ">
          <div className="h-[228px] rounded-t-[10px] bg-[#0000002f] "></div>
          <div className="bg-[#E9F6F8] py-[70px] ">
            <h2 className="font-[500] text-[20px]">Name </h2>
            <p>Position</p>
          </div>
        </div>
      </div>

      <div className="w-[334px] flex justify-center mx-auto my-[2rem] ">
        <button className="bg-transparent border-[2px] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]">
          <FaArrowLeft />
        </button>
        <button
          style={{
            backgroundImage: "linear-gradient(to right,  #008081, #FFBE06)",
          }}
          className="bg-transparent border-[2px] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MeetTheTeam;
