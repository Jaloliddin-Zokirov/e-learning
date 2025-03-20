import React, { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, isClose }) => {
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      <div
        className={`${isOpen ? "left-0" : "-left-full"} ${
          onModal ? "max-w-[90px] px-5" : "max-w-[348px] px-6"
        } absolute z-40 xl:relative xl:left-0 flex flex-col justify-between py-9 w-full h-full bg-[#2964c2] transition-all duration-400 ease-in-out`}
      >
        {onModal && (
          <span
            className="absolute top-9 -right-7 px-2 py-5 rounded-r-[24px] bg-[#2964c2] text-white cursor-pointer"
            onClick={() => setOnModal(false)}
          >
            <MdKeyboardDoubleArrowRight size={28} />
          </span>
        )}
        <div className={`${onModal && "mt-4"} relative`}>
          <div className="flex items-center ">
            <div className="w-full flex items-center gap-4">
              <Link
                className="w-[55] h-[51] block"
                onClick={() => isClose(false)}
                to={"/"}
              >
                <img
                  src="https://e-learning.istc.uz/assets/logo-CP4jwA-y.svg"
                  width={55}
                  height={51}
                  alt="site logo"
                />
              </Link>
              {!onModal && (
                <p className="text-[0.6875rem] font-bold text-white w-[183px]">
                  ИЖТИМОИЙ ҲИМОЯ ТИЗИМИ ХОДИМЛАРИНИНГ МАЛАКАСИНИ ОШИРИШ МАРКАЗИ
                </p>
              )}
            </div>
            {!onModal && (
              <button
                className="absolute right-[-5px] cursor-pointer w-[36px] h-[36px] flex flex-col items-center justify-center rounded-lg bg-[#3475db] text-white border border-[#e8f1ff]"
                onClick={() => {
                  isOpen ? isClose(false) : setOnModal(!onModal);
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
            )}
          </div>
          <nav className={`${onModal ? "mt-10" : "mt-6"} flex flex-col gap-3`}>
            <Link
              onClick={() => isClose(false)}
              to={"/"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <IoHomeOutline size={26} /> {!onModal && "Home"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/personal-info"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <RiUserSettingsLine size={26} /> {!onModal && "Personal Info"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/education-wrapper"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <PiStudent size={26} /> {!onModal && "Education"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/results"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <LiaAwardSolid size={26} /> {!onModal && "Results"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/certificate-programs"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <GrCertificate size={26} /> {!onModal && "Certificate Programs"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/docs-programs"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <SlDocs size={26} /> {!onModal && "Docs Programs"}
            </Link>
          </nav>
        </div>
        <div className="w-full flex flex-col items-center">
          {!onModal && <p className="text-white">www.istc.uz</p>}
          <div className="w-full h-[1px] mt-1 mb-2 bg-[linear-gradient(90deg,_#fff0,_#00ff58_51%,_#fff0)]"></div>
          {!onModal && <p className="text-white">2025</p>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
