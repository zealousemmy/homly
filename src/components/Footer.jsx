import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(to right, #6FCBDC1A, #6FCBDC, #6FCBDC1A)",
      }}
      className="p-[40px]"
    >
      <div className="flex flex-wrap justify-center">
        <div>
          <div>
            <img src="/images/Homly logo creation-03 1.png" alt="" />
          </div>
          <p className="my-[1rem] xl:my-0">
            Share the culture, lifestyle and activities of places you explored.
          </p>
          <p className="my-[1rem] xl:my-0">
            <span className="font-[700]">Home Office:</span> 24 Adejumobi,
            Ayanwale Rd, Off Toluwani, ikotun. Lagos, Nigeria.
          </p>
          <div className="flex flex-wrap items-center">
            <p className="font-[700]">Follow Us On Social Media:</p>
            <div className="flex xl:items-center mt-[1rem] xl:mt-0 ">
              <span className="border-[2px] border-[#666666] xl:mx-[1rem] xl:mr-0 mr-[1rem] rounded-[5px] p-[5px]">
                <FaTwitter />
              </span>
              <span className="border-[2px] border-[#666666] mx-[1rem] rounded-[5px] p-[5px]">
                <FaFacebookSquare />
              </span>
              <span className="border-[2px] border-[#666666] mx-[1rem] rounded-[5px] p-[5px]">
                <FaTiktok />
              </span>
              <span className="border-[2px] border-[#666666] mx-[1rem] rounded-[5px] p-[5px]">
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-[3rem] xl:mt-0 justify-center w-[551px]  ">
          <div className="mr-[5rem]">
            <h6 className="font-[500] text-[20px]">LINKS</h6>
            <ul className="list-disc">
              <li className="my-[1rem]">INFO</li>
              <li className="my-[1rem]">HOW IT WORKS</li>
              <li className="my-[1rem]">WHY US</li>
            </ul>
          </div>
          <div>
            <h6 className="font-[500] text-[20px]">LINKS</h6>
            <ul className="list-disc">
              <li className="my-[1rem]">APPROACH</li>
              <li className="my-[1rem]">ABOUT US</li>
              <li className="my-[1rem]">TEAM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
