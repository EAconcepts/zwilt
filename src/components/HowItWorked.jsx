import React from "react";
import avatar from "../assets/avatar-red.png";
import logoLeft from "../assets/logo-left.svg";
import logoRight from "../assets/logo-right.svg";

const HowItWorked = () => {
  return (
    <section className="transform -skew-y-2 skew-[40deg]  w-full h-[840px] flex flex-col justify-center bg-[#202229]">
      <div className="flex transform skew-y-2 pl-[80px] justify-between pr-[229px]">
        <div className="w-[439px] ">
          <h2 className="w-full text-[54px] font-[700] leading-[64px] text-white">
            <span className="shrink-0">How it worked for Jason at </span>
            <img
              src={avatar}
              className="inline rounded-full size-[57px]"
            />{" "}
            <span className="inline text-[#AF7CFF]">groove</span>
          </h2>
          <p className=" mt-[44px] text-[22px] w-[] font-[400] leading-[32px] text-white ">
            Zwilt enabled us to deliver on time and they&apos;ve been heavy
            hitters in our corner since.
          </p>
          <div className="flex gap-x-[16px]">
            <img src={logoLeft} className="" />
            <img src={logoRight} className="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-[56.21px]">
          <div className="flex gap-x-[16px]">
            <p className="rounded-full bg-[#AF7CFF] size-[99px] text-center flex items-center justify-center text-[16px] text-white">
              {" "}
              groove
            </p>
            <div className="flex flex-col">
              <h4 className="font-[600] text-[34px] leading-[44px] text-white">
                Jason Makki
              </h4>
              <small className="text-[16px] text-white font-[500] leading-[18px] opacity-[40%]">
                Engineer at GROOVE
              </small>
              <small className="text-[16px] font-[500] text-white leading-[18px] opacity-[40%]">
                San Francisco
              </small>
            </div>
          </div>
          <p className="w-[499px] text-[22px] text-white leading-[32px] font-[400] opacity-[80%]">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters
            in our corner since. Zwilt enabled us to deliver on time and they’ve
            been heavy hitters in our corner since.Zwilt enabled us to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorked;
