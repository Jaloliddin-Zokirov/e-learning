import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ isOpen }) => {
  const [check, setCheck] = useState(false);

  const handleBack = () => {
    window.history.back();
  }
  return (
    <header className="w-full mx-auto">
      <div className="relative z-30 w-full text-whit mb-8 p-5 rounded-2xl bg-white shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]">
        <div className="flex items-center gap-2.5">
          <div
            className="block xl:hidden cursor-pointer"
            onClick={() => isOpen(true)}
          >
            <svg
              data-v-859f4ff9=""
              xmlns="http://www.w3.org/2000/svg"
              class="icon-tabler icon-tabler-menu-2"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </div>
          <button
            className="ml-auto cursor-pointer"
            onClick={() => setCheck(!check)}
          >
            <FaRegUser size={39} />
          </button>
        </div>
        <div
          className={`${
            check ? "block" : "hidden"
          } absolute z-20 right-3 top-17 p-2.5 rounded-md bg-[#e8f1ff] text-black sm:w-2xs w-48 shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]`}
        >
          <div className="flex items-start justify-between">
            <div className="flex sm:flex-row flex-col items-start gap-2 sm:mb-6 mb-3">
              <FaRegUser className="sm:text-[39px] text-[24px]" />
              <p className="sm:text-lg text-sm">AMONBOYEV. A</p>
            </div>
            <HiOutlineXMark
              className="cursor-pointer"
              size={25}
              onClick={() => setCheck(false)}
            />
          </div>
          <button className="flex items-center gap-2 py-2 px-3 rounded-sm cursor-pointer w-full text-white font-medium bg-[#bd1414]">
            <IoExitOutline className="sm:text-[24px] text-[18px]" />
            <span className="sm:text-lg text-sm">Чиқиш</span>
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
        Орқага
      </button>
      {check && <div className="absolute inset-0 z-10 bg-[#00000092]" onClick={() => setCheck(false)}></div>}
    </header>
  );
};

export default Header;
