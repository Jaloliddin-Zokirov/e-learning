import React, { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { PiStudent } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, isClose }) => {
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      <div
        className={`${
          isOpen ? "left-0" : "-left-full"
        } absolute z-10 xl:relative xl:left-0 flex flex-col justify-between py-9 px-6 w-full max-w-[348px] h-full bg-[#2964c2] transition-all duration-400 ease-in-out`}
      >
        <div className="relative">
          <div className="flex items-center ">
            <div className="w-full flex items-center gap-4">
              <Link className="w-[55] h-[51] block" to={"/"}>
                <img
                  src="https://e-learning.istc.uz/assets/logo-CP4jwA-y.svg"
                  width={55}
                  height={51}
                  alt="site logo"
                />
              </Link>
              <p className="text-[0.6875rem] font-bold text-white w-[183px]">
                ИЖТИМОИЙ ҲИМОЯ ТИЗИМИ ХОДИМЛАРИНИНГ МАЛАКАСИНИ ОШИРИШ МАРКАЗИ
              </p>
            </div>
            <button
              className="absolute right-[-5px] cursor-pointer w-[36px] h-[36px] flex flex-col items-center justify-center rounded-lg bg-[#3475db] text-white border border-[#e8f1ff]"
              onClick={() => {
                isClose(false);
                setOnModal(!onModal);
              }}
            >
              <svg
                data-v-d425c321=""
                xmlns="http://www.w3.org/2000/svg"
                class="icon-tabler icon-tabler-chevron-left"
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
                <path d="M15 6l-6 6l6 6"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-3 mt-6">
            <Link
              to={"/"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <IoHomeOutline size={26} /> Home
            </Link>
            <Link
              to={"/personal-info"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <RiUserSettingsLine size={26} /> Personal Info
            </Link>
            <Link
              to={"/education-wrapper"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <PiStudent size={26} /> Education
            </Link>
            <Link
              to={"/results"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <LiaAwardSolid size={26} /> Results
            </Link>
            <Link
              to={"/certificate-programs"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <GrCertificate size={26} /> Certificate Programs
            </Link>
            <Link
              to={"/docs-programs"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <SlDocs size={26} /> Docs Programs
            </Link>
          </nav>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-white">www.istc.uz</p>
          <div className="w-full h-[1px] mt-1 mb-2 bg-[linear-gradient(90deg,_#fff0,_#00ff58_51%,_#fff0)]"></div>
          <p className="text-white">2025</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
