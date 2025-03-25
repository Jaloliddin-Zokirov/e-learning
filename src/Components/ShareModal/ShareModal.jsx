import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const ShareModal = ({ imageUrl, onClose }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`,
    telegram: `https://t.me/share/url?url=${imageUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${imageUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${imageUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${imageUrl}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1000); // 2 soniyadan keyin "Nusxalandi!" ni yashirish
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-[#000000b9]" onClick={onClose}></div>
      <div className="relative z-[51] bg-white p-6 rounded-lg w-[320px] md:w-[400px] text-center">
        <h2 className="text-xl font-semibold mb-4">Ulashish</h2>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-3xl"
          >
            <FaFacebook />
          </a>
          <a
            href={shareLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl"
          >
            <FaTelegram />
          </a>
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-3xl"
          >
            <FaWhatsapp />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Nusxalash tugmachasi */}
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            value={imageUrl}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-3 text-blue-500 hover:text-blue-700 text-lg cursor-pointer"
          >
            <FiCopy />
          </button>
        </div>
        {copied && <p className="text-green-500 text-sm mt-2">Nusxalandi!</p>}

        <div className="w-full flex items-center justify-between gap-4">
          <button className="mt-4 cursor-pointer flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-200">
            <AiOutlineDownload className="text-lg" />
            <span>Yuklab olish</span>
          </button>
          <button
            onClick={onClose}
            className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
