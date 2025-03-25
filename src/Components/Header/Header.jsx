import React, { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = React.memo(({ isOpen }) => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="w-full mx-auto">
      <div className="relative z-30 w-full text-whit mb-8 p-5 rounded-2xl bg-white shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]">
        <div className="flex items-center gap-2.5">
          <div
            className="block xl:hidden cursor-pointer"
            onClick={() => isOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <button
            className="ml-auto cursor-pointer"
            onClick={() => setCheck(!check)}
          >
            <img src="user.svg" width={49} height={49} alt="user icon" />
          </button>
        </div>
        <div
          className={`${
            check ? "block" : "hidden"
          } absolute z-20 right-3 top-17 p-2.5 rounded-md bg-[#e8f1ff] text-black sm:w-2xs w-48 shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]`}
        >
          <div className="flex items-start justify-between">
            <div className="flex sm:flex-row flex-col items-start gap-2 sm:mb-6 mb-3">
              <img src="user.svg" width={49} height={49} alt="user icon" />
              <p className="sm:text-lg text-sm">AMONBOYEV. A</p>
            </div>
            <HiOutlineXMark
              className="cursor-pointer"
              size={25}
              onClick={() => setCheck(false)}
            />
          </div>
          <button
            className="flex items-center gap-2 py-2 px-3 rounded-sm cursor-pointer w-full text-white font-medium bg-[#bd1414]"
            onClick={handleLogout}
          >
            <IoExitOutline className="sm:text-[24px] text-[18px]" />
            <span className="sm:text-lg text-sm">Chiqish</span>
          </button>
        </div>
      </div>
      <button
        className="w-[112px] flex items-center gap-2 mb-2 cursor-pointer font-medium text-xl text-[#2964c2] select-none"
        onClick={handleBack}
      >
        <div className="text-white bg-[#2964c2] w-7 h-7 rounded-full flex flex-col items-center justify-center">
          <IoIosArrowBack />
        </div>
        Orqaga
      </button>
      {check && (
        <div
          className="absolute inset-0 z-10 bg-[#00000092]"
          onClick={() => setCheck(false)}
        ></div>
      )}
    </header>
  );
});

export default Header;
