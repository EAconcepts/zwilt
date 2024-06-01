import React from "react";
import logoBlack from "../assets/logo-black.svg";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const Journey = () => {
  return (
    <div className="mt-[144px] px-[70px]">
      <h2 className="text-[54px] font-[700] leading-[64px] text-center text-[#202229]">
        Start your journey today.
      </h2>
      <div>
        <div className=" mt-[40px]">
          <div className="w-full transform -skew-y-3 overflow-y-hidde flex flex-col  items-center bg-[#EDEFFF]  ">
            <div className=" transform skew-y-3  flex w-full border2 border-red-400 h-[357.5px] overflow-y-hidden justify-between">
              <div className="flex flex-col pt-[90px]">
                <div className="flex gap-x-[16px]">
                  <p className="text-gradient">1</p>
                  <div className="flex flex-col w-[445px]">
                    <h3 className="font-[600] text-[34px] leading-[44px] text-[#202229]">
                      Find your next star performer.
                    </h3>
                    <p className="text-[16px] mt-[20px] leading-[24px] text-[#202229CC] font-[400]">
                      Explore the vast Zwilt marketplace to find the candidate
                      that meets your needs.
                    </p>
                    <div className="flex gap-x-[8px] mt-[24px] items-center">
                      <img src={logoBlack} className="size-[49.79px]" />
                      <span className="text-[#202229] text-[14.8px] leading-[12.11px] font-[500]">
                        Join Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col -mt-[20px]  ">
                <div className="flex gap-x-[24.53px]">
                  <div className="bg-[#FFFFFFA6] rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#FFDACE] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic1} className="" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        Ruby Developer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Redwood City, California 7 years experience
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFFFFA6] h-fit rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#C8EFC4] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic2} className="h-[141.43pxpx]" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        System ops engineer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Abu Dhabi, UAE 5 years experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[24.53px] flex gap-x-[24.53px]">
                  <div className="bg-[#FFFFFFA6] rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#D8D2FF] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic3} className="h-[141.53px] object-top" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        Ruby Developer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Redwood City, California 7 years experience
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFFFFA6] h-fit rounded-[21.15px] -mt-[20px] pb-[19.69px]">
                    <div className="bg-[#FDDD8B] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic4} className="h-[141.43pxpx]" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        System ops engineer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Abu Dhabi, UAE 5 years experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[40px]">
          <div className="w-full transform -skew-y-3 flex flex-col h-[327.5px] overflow-y-hidden items-center bg-[#fff7e1]  ">
            <div className=" transform skew-y-3 flex w-full justify-between">
              <div className="flex flex-col pt-[90px]">
                <div className="flex gap-x-[16px]">
                  <p className="text-gradient">1</p>
                  <div className="flex flex-col w-[445px]">
                    <h3 className="font-[600] text-[34px] leading-[44px] text-[#202229]">
                      Find your next star performer.
                    </h3>
                    <p className="text-[16px] mt-[20px] leading-[24px] text-[#202229CC] font-[400]">
                      Explore the vast Zwilt marketplace to find the candidate
                      that meets your needs.
                    </p>
                    <div className="flex gap-x-[8px] mt-[24px] items-center">
                      <img src={logoBlack} className="size-[49.79px]" />
                      <span className="text-[#202229] text-[14.8px] leading-[12.11px] font-[500]">
                        Join Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col -mt-[20px]  ">
                <div className="flex gap-x-[24.53px]">
                  <div className="bg-[#FFFFFFA6] rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#FFDACE] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic1} className="" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        Ruby Developer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Redwood City, California 7 years experience
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFFFFA6] h-fit rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#C8EFC4] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic2} className="h-[141.43pxpx]" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        System ops engineer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Abu Dhabi, UAE 5 years experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[24.53px]">
                  <div className="bg-[#FFFFFFA6] rounded-[21.15px] pb-[19.69px]">
                    <div className="bg-[#D8D2FF] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic3} className="h-[141.53px]" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        Ruby Developer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Redwood City, California 7 years experience
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFFFFA6] h-fit rounded-[21.15px] -mt-[20px] pb-[19.69px]">
                    <div className="bg-[#FDDD8B] rounded-t-[21.15px] rounded-bl-[21.15px]">
                      <img src={pic4} className="h-[141.43pxpx]" />
                    </div>
                    <div className="tracking-[2%] mt-[12.59px] px-[24px] ">
                      <h4 className="font-[400] text-[18px] leading-[18px]  text-[#202229]">
                        System ops engineer
                      </h4>
                      <p className="mt-[28px] text-[12px] leading-[12px] w-[143px] font-[400] ">
                        Abu Dhabi, UAE 5 years experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
