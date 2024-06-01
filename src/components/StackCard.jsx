import React from "react";

const StackCard = ({ data, title }) => {
  return (
    <div className="max-2xl:w-[600px] bg-white text-center rounded-[7px] px-[29px] pt-[18px] pb-[23px]">
      <h6 className="">{title}</h6>
      <div className="flex xl:gap-x-[20px] ustify-between">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col size-[96px]">
            <img src={item.icon} className="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
