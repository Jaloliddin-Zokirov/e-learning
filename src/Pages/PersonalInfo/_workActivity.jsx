import React from "react";

const _workActivity = () => {
  return (
    <ul className="w-full flex flex-col gap-x-8 gap-y-6">
      <li className="w-full flex items-start justify-between gap-x-8 gap-y-6">
        <div className="w-full">
          <p className="mb-1">Ташкилот номи</p>
          <p className="overflow-y-scroll h-[102px] px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
            "O`ZBEKISTON RESPUBLIKASI PREZIDENTI HUZURIDAGI IJTIMOIY HIMOYA
            MILLIY AGENTLIGINING TOSHKENT VILOYATI BOSHQARMASI" DAVLAT
            MUASSASASI
          </p>
        </div>
        <div className="w-full">
          <p className="mb-1">Лавозими</p>
          <p className="w-full max-w-[278px] overflow-x-scroll whitespace-nowrap border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg px-4 py-2.5">
            Сhirchiq shahar “Inson” ijtimoiy xizmatlar markazi 12-hudud (Shodlik
            MFY) mahallada kompleks ijtimoiy xizmatlar koʻrsatuvchi xodim
          </p>
        </div>
        <div className="w-full">
          <p className="mb-1">Иш даври</p>
          <p className="w-full max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
            04.11.2024 - hozirgacha
          </p>
        </div>
      </li>
    </ul>
  );
};

export default _workActivity;
