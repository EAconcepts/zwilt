import React from "react";
import logo from "../assets/logo.svg";
import logoIcon from "../assets/logoIcon.svg";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const menuLinks = [
    {
      title: "Find Work",
      path: "#work",
    },
    {
      title: "Find Talent",
      path: "#talent",
    },
    {
      title: "Articles",
      path: "#articles",
    },
    {
      title: "About Us",
      path: "#about",
    },
    {
      title: "Contact Us",
      path: "#contact",
    },
  ];
  return (
    <header className="w-full px-[70px] pt-[36px] font-switzer">
      <nav className=" pl-[25px] pr-[9px] w-full flex justify-between items-center bg-[#525AA0] rounded-[15px] drop-shadow-sm blur-[25] h-[60px] shadow-[#00000026]">
        {/* Logo */}
        <div className="flex items-center gap-x-[6.11px]">
          <img src={logo} alt="logo" className="" />
          <img src={logoIcon} alt="logo-icon" className="" />
        </div>
        <div className="flex gap-x-[30px]">
          {menuLinks?.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="text-white font-[500] text-[14px] leading-[14px] "
            >
              {" "}
              {link.title}
            </NavLink>
          ))}
        </div>
        {/* Onboard */}
        <div className="flex gap-x-[20px]">
          <button className="bg-transparent text-[14px] text-white leading-[14px] font-[500]">
            Login
          </button>
          <button className="h-[43px] rounded-[16px] bg-transparent text-[14px] leading-[14px] font-[500] px-[21px] py-[14px] bg-white text-[#202229]">
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
