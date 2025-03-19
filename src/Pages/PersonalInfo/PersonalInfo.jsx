import React, { useState } from "react";
import _myInfo from "./_myInfo";
import _workActivity from "./_workActivity";
import _forApplication from "./_forApplication";

const PersonalInfo = () => {
  const [change, setChange] = useState("myInfo");
  return (
    <section>
      <div>
        <h2 className="font-medium text-[#2964c2] mt-4 mb-3 text-4xl">
          Шахсий маълумотларим
        </h2>
      </div>
      <div className="border border-[#2964c2] rounded-2xl py-8 px-6 bg-white">
        <div className="flex flex-col items-center">
          <img
            className="mb-3 rounded-full shadow-[0_2px_4px_#2964c21a,-1px_6px_6px_#2964c217,-3px_14px_9px_#2964c20d,-5px_25px_10px_#2964c203,-8px_39px_11px_#2964c200]"
            src="person.png"
            width={122}
            height={122}
            alt="person icon"
          />
          <h3 className="mb-6 font-medium text-[#2964c2] text-xl">
            AKMAL SHERALIYEVICH AMONBOYEV
          </h3>
        </div>
        <div className="flex items-center rounded-lg p-3 justify-between bg-[#e8f1ff]">
          <ul className="flex items-center gap-5">
            <li>
              <button
                className={`${
                  change === "myInfo"
                    ? "bg-[#2964c2] text-white"
                    : "text-[#2964c2] bg-[transparent]"
                } inline-block py-3 px-4 rounded-sm cursor-pointer`}
                onClick={() => setChange("myInfo")}
              >
                Шахсий маълумотларим
              </button>
            </li>
            <li>
              <button
                className={`${
                  change === "work"
                    ? "bg-[#2964c2] text-white"
                    : "text-[#2964c2] bg-[transparent]"
                } inline-block py-3 px-4 text-[#2964c2] rounded-sm cursor-pointer`}
                onClick={() => setChange("work")}
              >
                Меҳнат фаолияти
              </button>
            </li>
            <li>
              <button
                className={`${
                  change === "application"
                    ? "bg-[#2964c2] text-white"
                    : "text-[#2964c2] bg-[transparent]"
                } inline-block py-3 px-4 text-[#2964c2] rounded-sm cursor-pointer`}
                onClick={() => setChange("application")}
              >
                Мурожаат учун
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full h-[1px] bg-[#2964c2] my-6"></div>

        {change === "myInfo" ? (
          <_myInfo />
        ) : change === "work" ? (
          <_workActivity />
        ) : (
          <_forApplication />
        )}

        <p className="text-[#2964c2] font-medium text-center text-xl mt-6">
          *Малумотларингиз давлат базасидан олинган бўлиб уларни таҳрирлаш
          имкони йўқ
        </p>
      </div>
    </section>
  );
};

export default PersonalInfo;
