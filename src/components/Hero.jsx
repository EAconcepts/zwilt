import React from "react";
import avatar from "../assets/avatar.png";
import iconBtn from "../assets/icon-btn.png";

const Hero = () => {
  return (
    <section className="pt-[144px] flex flex-col items-center font-switzer">
      <div className="flex flex-col w-[550px]">
        <div className="inline text-center text-[#202229] font-[700] text-[54px] leading-[64px]">
          <h2 className="shrink-0">
            Finding the right fit
            <img src={avatar} className=" inline w-[68px] h-[43px]" /> has never
            been easier.
          </h2>
        </div>
        <p className="mt-[20px] text-[22px] text-[#202229] leading-[32px] text-center font-[400]">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
        {/* Search */}
        <form className="mt-[30px] flex w-[570px]">
          <input
            type="text"
            className="w-full text- rounded-[15px] font-[500] leading-[16px] h-[74px] text-[16px] border-[1.5px] border-[#F0F0F0] bg-white"
            placeholder="Looking for design |"
          />
          <button>
            <img src={iconBtn} className="" />
          </button>
        </form>
      </div>
      {/* Stacks */}
      <div className="w-full flex flex-col mt-[40px] px-[280px]">
        <div className="w-full flex justify-center ">
          <p className="bg-[#C7F4C2] rounded-[15px] py-[10px] px-[30px]">
            IT & Development
          </p>
          <p className=" py-[10px] px-[30px]">Design and Creative</p>
        </div>
        <div className="flex w-full justify-between mt-[23px]">
          <div className="flex flex-col gap-y-[18px] text-start items-start">
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Python Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Shopify Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              MERN Stack Developer
            </p>
            <p className="font-[400] text-[16px] text-[#202229] leading-[16px]">
              Fullstack Developer
            </p>
          </div>
          <div className="flex flex-col gap-y-[18px] text-start items-start">
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Data Scientist
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Front End Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Shopify Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595]  leading-[16px]">
              Python Developer
            </p>
          </div>
          <div className="flex flex-col gap-y-[18px] text-start items-start">
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Shopify Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Python Developer
            </p>
            <p className="font-[400] text-[16px] text-[#959595] leading-[16px]">
              Fullstack Developer
            </p>
            <button className="font-[400] text-[16px] text-[#202229] leading-[16px]">
              Explore More
            </button>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Hero;
