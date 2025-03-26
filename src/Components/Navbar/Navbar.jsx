import React, { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { MdCastForEducation, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { RiUserSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = React.memo(({ isOpen, isClose }) => {
  const [onModal, setOnModal] = useState(false);

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "right-[100%]"
        } absolute top-0 bottom-0 left-0 z-[35] transition-all duration-400 ease-in-out bg-[#00000092]`}
        onClick={() => isClose(false)}
      ></div>
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
                className="w-[85] h-[85] block"
                onClick={() => isClose(false)}
                to={"/"}
              >
                <img src="PSYEDU.svg" width={85} height={85} alt="site logo" />
              </Link>
              <p
                className={`text-[0.6875rem] font-bold text-white w-[160px] ${
                  onModal ? "hidden" : ""
                }`}
              >
                Maktab psixologlarining tajribasini oshirish platformasi
              </p>
            </div>
            {!onModal && (
              <button
                className="absolute right-[-5px] cursor-pointer w-[36px] h-[36px] flex flex-col items-center justify-center rounded-lg bg-[#3475db] text-white border border-[#e8f1ff]"
                onClick={() => {
                  isOpen ? isClose(false) : setOnModal(!onModal);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="m15 6-6 6 6 6" />
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
              <IoHomeOutline size={26} /> {!onModal && "Uy"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/personal-info"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <RiUserSettingsLine size={26} /> {!onModal && "Shaxsiy ma'lumotlar"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/education-wrapper"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <PiStudent size={26} /> {!onModal && "Ta'lim"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/results"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <LiaAwardSolid size={26} /> {!onModal && "Natijalar"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/certificate-programs"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <GrCertificate size={26} /> {!onModal && "Sertifikatlar"}
            </Link>
            <Link
              onClick={() => isClose(false)}
              to={"/tests"}
              className="flex items-center gap-3 py-2.5 px-3 text-white font-medium border border-[transparent] bg-[#3475db] rounded-lg w-full text-[18px]"
            >
              <MdCastForEducation size={26} /> {!onModal && "Testlar"}
            </Link>
          </nav>
        </div>
        <div className="w-full flex flex-col items-center">
          {!onModal && <p className="text-white">PSYEDU</p>}
          <div className="w-full h-[1px] mt-1 mb-2 bg-[linear-gradient(90deg,_#fff0,_#00ff58_51%,_#fff0)]"></div>
          {!onModal && <p className="text-white">2025</p>}
        </div>
      </div>
    </>
  );
});

export default Navbar;
