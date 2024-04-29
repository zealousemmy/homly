import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-[8rem]">
      <div>
        <h1 className="xl:text-[60px] text-center font-[700] xl:leading-[60px] ">
          About us
        </h1>
        <p className="text-[#37363F] mx-auto text-center xl:my-[2rem] xl:w-[1051px] w-[90%] xl:text-[24px] font-[400] ">
          We are a revolutionary proptech company that seeks to make satisfying
          all accomodation needs easy and accessible.
        </p>
        <div className="flex px-[20px] xl:px-0 flex-wrap my-[3rem] xl:my-[10rem] justify-center">
          <div className="xl:w-[562px]">
            <h1 className="xl:text-[60px] font-[700] leading-[60px] ">
              Explore
            </h1>
            <p className="text-[#37363F] my-[2rem] xl:w-[515px] xl:text-[24px] font-[400] ">
              From finding accomodations, getting roommates, purchasing
              home-items, accessing Shortlets, exploring places & much more!
              That's Homly visit our platform at gethomly.com
            </p>
            <div>
              <button
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, #ffbd06a0 0px 4px 6px, #ffbd066c 0px 12px 13px, #ffbd065a 0px -3px 5px",
                }}
                className="bg-[#008081] xl:mr-[1rem] text-white font-bold py-[12px] px-4 rounded-[50px]"
              >
                Explore Our platform
              </button>
            </div>
          </div>
          <div className="relative xl:w-[600px] w-[90%] mt-[5rem] xl:mt-0 xl:h-inherit ">
            <img src="/images/Group 945 (1).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
