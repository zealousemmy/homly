import React from "react";

const TextTitleImage = () => {
  return (
    <div className="flex flex-wrap xl:my-[10rem] p-[20px] justify-center">
      <div className="xl:w-[562px]">
        <h1 className="xl:text-[60px] font-[700] xl:leading-[60px] ">
          Not another Shortlet, Rather shared Living
        </h1>
        <p className="text-[#37363F] my-[2rem] xl:w-[515px] xl:text-[24px] font-[400] ">
          With Homly daily duplexes, people can find a much convenient, cheaper
          and fun alternative to hotels designed specifically for the purpose of
          communal living & shared experiences.
        </p>
        <div>
          <button
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
            }}
            className="bg-[#008081] mr-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
          >
            Book a call
          </button>
          <button className="bg-transparent border-[2px] border-[#000000] mx-[1rem] text-[#000000] font-bold py-[12px] px-4 rounded-[50px]">
            Pay Here
          </button>
        </div>
      </div>
      <div className="relative xl:w-[600px] w-[100%] mt-[3rem] xl:mt-0 xl:h-inherit  h-[300px] ">
        <div className="xl:w-[499px] w-[70%] top-[3rem] absolute">
          <img className="w-[100%]" src="/images/Rectangle 302.png" alt="" />
        </div>
        <div className="xl:w-[268px] w-[50%] xl:top-[-5rem] xl:right-[-2rem] right-[1rem] absolute">
          <img
            className="w-[100%] rounded-[8px] xl:h-[218px]"
            src="/images/f7e0b008e15ae20714bdc36889aabbb1.jpeg"
            alt=""
          />
        </div>
        <div className="xl:w-[244px] w-[50%] bottom-[3px] xl:bottom-[-10rem] right-[2px] absolute">
          <img
            className="w-[100%] rounded-[8px] xl:h-[218px]"
            src="/images/593cacaca05af4c63fa8b869a28b93d5.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TextTitleImage;
