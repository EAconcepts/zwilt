import React from "react";
import play from "../assets/play.png";
import playBlue from "../assets/play-blue.svg";
const Screening = () => {
  return (
    <div className="pt-[149px] px-[70px] w-[750px]">
      <h1 className="font-[700] text-[54px] leading-[64px] text-[#202229]">
        How we ensure you’re in good hands.
      </h1>
      <p className="mt-[30px]  text-[#1E1515CC] text-[22px] leading-[32px] font-[400]">
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>
      {/* Processes */}
      <div className="flex gap-x-[23px] items-center mt-[30px]">
        <img src={play} className="" />
        <div className=" text-[16px] text-[#202229] font-[400] leading-[17.83px] flex gap-x-[2px]">
          <span className="font-[600]">Step 1:</span>
          <span>Resuming Screening</span>
        </div>
      </div>
      <div className="">
        <div className="flex gap-x-[23px] mt-[5px] items-center">
          <img src={playBlue} className="" />
          <div className=" text-[16px] text-[#202229] font-[400] leading-[17.83px] flex gap-x-[2px]">
            <span className="font-[600]">Step 2:</span>
            <span>Video Interview</span>
          </div>
        </div>
        <p className=" mt-[16px] font-[400] text-[16px] opacity-[80%] leading-[26px] text-[#202229]">
          Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit.
        </p>
        <div className="flex flex-col gap-y-[4px]">
          <div className="flex gap-x-[23px] items-center mt-[30px]">
            <img src={play} className="" />
            <div className=" text-[16px] text-[#202229] font-[400] leading-[17.83px] flex gap-x-[2px]">
              <span className="font-[600]">Step 3:</span>
              <span>Technical Evaluation</span>
            </div>
          </div>
          <div className="flex gap-x-[23px] items-center mt-[30px]">
            <img src={play} className="" />
            <div className=" text-[16px] text-[#202229] font-[400] leading-[17.83px] flex gap-x-[2px]">
              <span className="font-[600]">Step 4:</span>
              <span>Application Review</span>
            </div>
          </div>
          <div className="flex gap-x-[23px] items-center mt-[30px]">
            <img src={play} className="" />
            <div className=" text-[16px] text-[#202229] font-[400] leading-[17.83px] flex gap-x-[2px]">
              <span className="font-[600]">Step 5:</span>
              <span>Lets get to work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screening;
