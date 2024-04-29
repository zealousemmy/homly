import React from "react";

const TextImage = () => {
  return (
    <div className="xl:my-[5rem] ">
      <div className="flex flex-wrap  justify-around items-center">
        <div className=" xl:p-[30px] p-[20px] ">
          <p className="  mx-auto xl:tracking-[0.6px] xl:leading-[38px] xl:text-[24px] text-[18px] font-[500] my-[1rem]  xl:w-[486px]">
            You had to buy the land, (quite expensive), pay fees, settlements,
            levies, etc., and to top these, wait up to 3-5yrs to see a 50-100%
            interest on your investment,{" "}
          </p>
          <p className=" mx-auto xl:tracking-[0.6px] xl:leading-[38px] xl:text-[24px] text-[18px] font-[500] my-[1rem]  xl:w-[486px]">
            if that happens at all or deal with an 8-20% ROI yearly.
          </p>
        </div>
        <div className="xl:w-[692px] ">
          <img
            className="xl:w-[100%] w-[90%] mx-auto xl:h-[739px] "
            src="/images/Group 1000002693.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
