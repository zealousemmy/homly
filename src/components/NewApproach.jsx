import React from "react";
import TextImage from "./TextImage";
import ImageText from "./ImageText";

const NewApproach = () => {
  return (
    <div>
      <div className="xl:p-[40px]">
        <h1 className="text-center xl:text-[42px] text-[25px] font-[700] mt-[3rem] xl:mt-0 xl:my-[2rem] xl:leading-[42px] ">
          A New Approach
        </h1>
        <TextImage />
        <ImageText />
      </div>
    </div>
  );
};

export default NewApproach;
