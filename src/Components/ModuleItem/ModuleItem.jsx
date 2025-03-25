import React from "react";
import { Collapse } from "antd";
import LessonItem from "../LessonItem/LessonItem";

const ModuleItem = ({
  module,
  setViewModal,
  viewType,
  setViewType,
  setOpen,
}) => {
  return (
    <Collapse
      key={module.id}
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
          key: module.id,
          label: module?.title,
          children: module?.lessons.map((lessons) => (
            <LessonItem
              key={lessons.id}
              lessons={lessons}
              setViewModal={setViewModal}
              viewType={viewType}
              setViewType={setViewType}
              setOpen={setOpen}
            />
          )),
        },
      ]}
    />
  );
};

export default ModuleItem;
