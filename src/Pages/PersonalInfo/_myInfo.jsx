import React from "react";

const _myInfo = React.memo(() => {
  return (
    <ul className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6">
      <li>
        <p className="mb-1">Ism</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg scrollbar-hide">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Familiya</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Otasining ismi</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Tug'ilgan yili</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Pasport seriyasi</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Hudud</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Tuman (shahar)</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
      <li>
        <p className="mb-1">Yashash manzili</p>
        <p className="w-full max-w-full sm:max-w-[278px] overflow-x-scroll whitespace-nowrap px-4 py-2.5 border border-[#bccbe8] bg-[#e8f1ff] rounded-lg text-[#596173] font-medium text-lg">
          AKMAL
        </p>
      </li>
    </ul>
  );
});

export default _myInfo;
