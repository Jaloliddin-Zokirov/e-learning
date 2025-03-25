import React from "react";
import { Collapse } from "antd";
import LessonFileCard from "../LessonFileCard/LessonFileCard";

const LessonItem = ({
  lessons,
  setViewModal,
  viewType,
  setViewType,
  setOpen,
}) => {
  return (
    <Collapse
      key={lessons.id}
      size="large"
      className="my-collapse"
      expandIcon={({ isActive }) => (
        <img
          src={isActive ? "arrowClose.svg" : "arrowOpen.svg"}
          width={40}
          height={40}
          alt={isActive ? "close arrow icon" : "open arrow icon"}
        />
      )}
      items={[
        {
          key: lessons.id,
          label: lessons?.title,
          children: (
            <>
              <video className="w-9/12 h-60 mx-auto mb-6 rounded-xl bg-amber-600">
                {lessons?.content?.video
                  ? lessons?.content?.video
                  : "Darslik hali joylanmadi"}
              </video>
              <div className="w-full flex items-center justify-around gap-5 mb-6">
                <div className="w-2/5">
                  {lessons?.content?.pdf ? (
                    <LessonFileCard
                      fileType="pdf"
                      fileUrl={lessons.content.pdf}
                      downloadUrl={lessons.content.downloadPDF}
                      setViewModal={setViewModal}
                      isOpen={viewType === lessons.id}
                      setViewType={setViewType}
                      id={lessons.id}
                    />
                  ) : (
                    "Darslik hali joylanmadi"
                  )}
                </div>

                <div className="w-2/5">
                  {lessons?.content?.ppt ? (
                    <LessonFileCard
                      fileType="ppt"
                      fileUrl={lessons.content.ppt}
                      downloadUrl={lessons.content.downloadPPT}
                      setViewModal={setViewModal}
                      isOpen={viewType === lessons.id + 1}
                      setViewType={setViewType}
                      id={lessons.id + 1}
                    />
                  ) : (
                    "Darslik hali joylanmadi"
                  )}
                </div>
              </div>
              <button
                className="block w-full rounded-xl text-white uppercase font-semibold text-[18px] p-2 bg-blue-500 hover:bg-blue-400 cursor-pointer"
                onClick={() => setOpen(true)}
              >
                test
              </button>
            </>
          ),
        },
      ]}
    />
  );
};

export default LessonItem;
