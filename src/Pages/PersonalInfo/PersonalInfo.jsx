import React from "react";
import _myInfo from "./_myInfo";

const PersonalInfo = React.memo(() => {
  return (
    <section>
      <div>
        <h2 className="font-medium text-[#2964c2] mt-4 mb-3 text-4xl">
          Shaxsiy ma’lumotlarim
        </h2>
      </div>
      <div className="border border-[#2964c2] rounded-2xl py-8 px-6 bg-white">
        <div className="flex flex-col items-center">
          <img
            className="mb-3 rounded-full shadow-[0_2px_4px_#2964c21a,-1px_6px_6px_#2964c217,-3px_14px_9px_#2964c20d,-5px_25px_10px_#2964c203,-8px_39px_11px_#2964c200]"
            src="user.svg"
            width={122}
            height={122}
            alt="person icon"
          />
          <h3 className="mb-6 text-center font-medium text-[#2964c2] text-xl">
            AKMAL SHERALIYEVICH AMONBOYEV
          </h3>
        </div>
        <div className="w-full h-[1px] bg-[#2964c2] mb-6"></div>
        <_myInfo />
        <p className="text-[#2964c2] font-medium text-center text-xl mt-6">
          *Malumotlaringiz davlat bazasidan olingan bo‘lib ularni tahrirlash
          imkoni yo‘q
        </p>
      </div>
    </section>
  );
});

export default PersonalInfo;
