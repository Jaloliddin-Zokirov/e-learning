import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFiletypePdf, BsFiletypePpt } from "react-icons/bs";
import { useEffect, useRef } from "react";

const LessonFileCard = ({
  fileType,
  fileUrl,
  downloadUrl,
  setViewModal,
  isOpen,
  setViewType,
  id,
}) => {
  const dropdownRef = useRef(null);

  const fileIcons = {
    pdf: <BsFiletypePdf className="text-[28px] font-semibold" />,
    ppt: <BsFiletypePpt className="text-[28px] font-semibold" />,
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setViewType(false); // tashqariga bosilganda yopish
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="relative flex items-center justify-between gap-4 border pl-8 pr-4 py-2.5 w-full rounded-xl select-none cursor-pointer"
      onClick={() => {
        setViewModal(fileUrl);
        setViewType(false);
      }}
    >
      <div className="flex items-center gap-4">
        {fileIcons[fileType]}
        {fileType.toUpperCase()}
      </div>

      <BsThreeDotsVertical
        className="text-[20px] cursor-pointer"
        onClick={(event) => {
          event.stopPropagation();
          setViewType(isOpen ? false : id);
        }}
      />

      {isOpen && (
        <div
          className="absolute top-[-30%] right-[-92px] z-10 flex flex-col"
          ref={dropdownRef}
        >
          <button
            className="w-[100px] border-b-[1px] border-white pb-1 cursor-pointer bg-blue-500 hover:bg-blue-400 p-3 text-white rounded-t-xl"
            onClick={() => {
              setViewModal(fileUrl);
              setViewType(false);
            }}
          >
            Ko'rish
          </button>
          <button
            className="w-[100px] pt-1 cursor-pointer bg-blue-500 hover:bg-blue-400 p-3 text-white rounded-b-xl"
            onClick={() => setViewType(false)}
          >
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              Yuklash
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonFileCard;
