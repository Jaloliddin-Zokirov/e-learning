import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ isOpen }) => {
  return (
    <header className="w-full mx-auto">
      <div className="w-full text-whit mb-8 p-5 rounded-2xl bg-white shadow-[0px_2px_4px_rgba(41,100,194,0.1),-1px_6px_6px_rgba(41,100,194,0.09),-3px_14px_9px_rgba(41,100,194,0.05),-5px_25px_10px_rgba(41,100,194,0.01),-8px_39px_11px_rgba(41,100,194,0)]">
        <div className="flex items-center gap-2.5">
          <div className='block xl:hidden cursor-pointer' onClick={() => isOpen(true)}>
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
          <div className="w-[40px] h-[40px] ml-auto flex flex-col items-center justify-center text-white bg-[#2964c2] border rounded-[50%]">
            <IoSettingsOutline size={24} />
          </div>
          <FaRegUser size={39} />
        </div>
      </div>
      <Link
        className="w-[112px] flex items-center gap-2 mb-2 cursor-pointer font-medium text-xl text-[#2964c2]"
        to={"/"}
      >
        <div className="text-white bg-[#2964c2] w-7 h-7 rounded-full flex flex-col items-center justify-center">
          <IoIosArrowBack />
        </div>
        Орқага
      </Link>
    </header>
  );
};

export default Header;
