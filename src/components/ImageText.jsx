import React from "react";

const ImageText = () => {
  return (
    <div>
      <div className="flex flex-wrap-reverse  justify-around items-center">
        <div className="xl:w-[692px]">
          <img
            className="xl:w-[100%] w-[90%] xl:h-[739px] "
            src="/images/Group 1000002694.png"
            alt=""
          />
        </div>
        <div className=" xl:p-[30px] p-[20px] ">
          <p className=" mx-auto xl:tracking-[0.6px] xl:leading-[38px] xl:text-[24px] text-[18px] font-[500] my-[1rem]  xl:w-[486px]">
            What if you could; {"  "} <strong>payless</strong> {"  "}(50%+
            less),{"  "}
            <strong>profit more</strong>
            (70 - 200% ROI first year & 140 - 300% ROI other years), in the{" "}
            {"  "}
            <strong>shortest time possible</strong> {"  "}  (1yr)?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
