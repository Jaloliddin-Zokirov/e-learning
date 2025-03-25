import React from "react";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineZoomOutMap } from "react-icons/md";

const CertificateCard = ({ openModal, openShareModal }) => {
  const imageSrc = "https://picsum.photos/450/350"; // Rasm manbasi

  return (
    <li className="w-full md:max-w-[420px] max-w-[300px] bg-[#f6f3f4] rounded-xl shadow-lg overflow-hidden">
      <div className="relative group">
        <img
          className="rounded-t-xl w-full h-auto"
          src={imageSrc}
          alt="user certificate image"
        />

        {/* Katta ekranda hoverda chiqadigan kattalashtirish tugmasi */}
        <div
          className="absolute inset-0 bg-black/50 cursor-pointer rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center"
          onClick={() => openModal(imageSrc)}
        >
          <MdOutlineZoomOutMap className="text-white text-4xl" />
        </div>

        {/* Kichik ekranda doimiy ko‘rinadigan tugmalar */}
        <div className="absolute top-3 right-3 flex items-center gap-2 md:hidden">
          <button
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition cursor-pointer"
            onClick={() => openModal(imageSrc)}
          >
            <MdOutlineZoomOutMap className="text-lg" />
          </button>
          <button
            className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition cursor-pointer"
            onClick={() => openShareModal(imageSrc)}
          >
            <FiShare2 className="text-lg" />
          </button>
        </div>

        {/* Katta ekranda faqat ulashish tugmasi */}
        <button
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition cursor-pointer hidden md:block"
          onClick={() => openShareModal(imageSrc)}
        >
          <FiShare2 className="text-lg" />
        </button>
      </div>
    </li>
  );
};

export default CertificateCard;
