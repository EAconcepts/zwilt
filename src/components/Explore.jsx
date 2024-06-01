import React from "react";
import skills from "../assets/skills.svg";
import category from "../assets/categories.svg";
import profile from "../assets/profile.svg";
import shopify from "../assets/shopify.png";
import magneto from "../assets/magneto.png";
import dataScience from "../assets/data-science.png";
import dotnet from "../assets/dotnet.png";
import itLogo from "../assets/it-logo.png";
import webflow from "../assets/webflow.png";
import figma from "../assets/figma.png";
import ps from "../assets/ps.png";
import illustration from "../assets/illustration.png";
import unreal from "../assets/unreal.png";
import cinema4d from "../assets/cinema4d.png";
import StackCard from "./StackCard";
import logoBlack from "../assets/logo-black.svg";

const Explore = () => {
  const ItDev = [
    {
      icon: shopify,
      title: "Shopify Developer",
    },
    {
      icon: magneto,
      title: "Magneto Developer",
    },
    {
      icon: dataScience,
      title: "Data Scientist",
    },
    {
      icon: webflow,
      title: "Webflow Developer",
    },
    {
      icon: dotnet,
      title: "Dot Net Developer",
    },
  ];

  const desginCreative = [
    {
      icon: itLogo,
      title: "",
    },
    {
      icon: figma,
      title: "Ux Designer",
    },
    {
      icon: ps,
      title: "Graphis Designer",
    },
    {
      icon: illustration,
      title: "Illustration Artist",
    },
    {
      icon: unreal,
      title: "Unreal Engine",
    },
    {
      icon: cinema4d,
      title: "Cinema 4D",
    },
  ];
  return (
    <div className="mt-[219px] bg-[#EDEFFF]">
      <h2 className=" px-[232px] text-[54px] leading-[64px] font-[700] text-center text-[#202229]">
        Your one-stop marketplace for finding the talent your business needs.
      </h2>
      <div className="px-[70px] flex justify-between w-full mt-[90px]">
        {/* find Dev */}
        <div className="w-[400px] flex flex-col">
          <h4 className="font-[500] text-[24px] leading-[34px] text-[#202229]">
            Find Dev and IT professionals to scale your business.
          </h4>
          <div className="flex flex-col mt-[20px]">
            <div className="flex w-full justify-between">
              <div className="flex gap-x-[6px] items-center">
                <img src={skills} alt="skills icon" className="" />
                <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                  989 Skills
                </span>
              </div>
              <div className="flex gap-x-[6px] items-center">
                <img src={category} alt="skills icon" className="" />
                <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                  45 Sub-Categories
                </span>
              </div>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <img src={profile} alt="skills icon" className="" />
              <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                1011 Profiles
              </span>
            </div>
          </div>
        </div>
        {/* IT & Development Stack */}
        <StackCard title={"It & Development Stack"} data={ItDev} />
      </div>
      <div className="px-[70px] flex justify-between w-full mt-[90px]">
        {/* Explore Creative */}
        <div className="w-[400px] flex flex-col">
          <h4 className="font-[500] text-[24px] leading-[34px] text-[#202229]">
            Explore Creative individuals with a keen eye for detail.
          </h4>
          <div className="flex flex-col mt-[20px]">
            <div className="flex w-full justify-between">
              <div className="flex gap-x-[6px] items-center">
                <img src={skills} alt="skills icon" className="" />
                <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                  989 Skills
                </span>
              </div>
              <div className="flex gap-x-[6px] items-center">
                <img src={category} alt="skills icon" className="" />
                <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                  45 Sub-Categories
                </span>
              </div>
            </div>
            <div className="flex gap-x-[6px] items-center">
              <img src={profile} alt="skills icon" className="" />
              <span className="text-[16px] font-[400] leading-[32px] text-[#202229CC] ">
                1011 Profiles
              </span>
            </div>
          </div>
        </div>
        {/* Design and Creative Stack */}
        <StackCard data={desginCreative} title={"Design & Creative"} />
      </div>
      {/* Explore more */}
      <div className="px-[70px] mt-[35px] w-full flex items-center justify-between">
        <div className="flex gap-x-[12px] items-center">
          <img src={logoBlack} className="" />
          <p className="font-[500] text-[22px] leading-[18px] text-[#202229]">
            Explore More
          </p>
        </div>
        <p className="w-[730px] text-[22px] font-[500] leading-[32px] text-[#202229CC]">
          <span className="font-[700]">30 more</span> to explore
        </p>
      </div>
    </div>
  );
};

export default Explore;
