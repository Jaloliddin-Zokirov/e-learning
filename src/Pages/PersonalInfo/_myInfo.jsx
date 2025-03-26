import React from "react";

const _myInfo = React.memo(() => {
  return (
    <ul className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
      <li>
        <p className="mb-1">F.I.SH</p>
        <p className="w-full max-w-full overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg scrollbar-hide">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Viloyat</p>
        <p className="w-full max-w-full overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg scrollbar-hide">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Shahar / Tuman</p>
        <p className="w-full max-w-full overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg scrollbar-hide">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Maktab</p>
        <p className="w-full max-w-full overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg scrollbar-hide">
          AKMAL
        </p>
      </li>
    </ul>
  );
});

export default _myInfo;
