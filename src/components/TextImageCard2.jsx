import React from "react";
import { IMAGES } from "../constants/images";
// import bgImage from "/images/13744-01 1.png";

const TextImageCard2 = () => {
  return (
    <div
      style={{ background: `url(${IMAGES.bgImage})` }}
      className="h-[480px] bg-[#E9F6F8] mx-[2rem] my-[1rem] rounded-[8px] p-[20px] bg-cover bg-no-repeat w-[90%] xl:w-[340px]"
    >
      <div className="bg-[#FFFFFF] w-[227px] mx-auto my-[3rem] p-[10px] rounded-[8px] ">
        <img
          className="w-[80%]"
          src="/images/Mobile trading app with buy button and growth arrow.png"
          alt=""
        />
      </div>
      <div className="text-center">
        <h1 className="text-[32px] font-[800] leading-[40.32px] ">Track</h1>
        <p className="text-[14px] font-[400] mt-[1rem] text-[#37363F] leading-[19px] tracking-[0.4px] ">
          With a well curated investors dashboard, you can track the performance
          of your share(s) once purchased; earnings, request withdrawals, get
          notifications, Homly opportunities & much more
        </p>
      </div>
    </div>
  );
};

export default TextImageCard2;