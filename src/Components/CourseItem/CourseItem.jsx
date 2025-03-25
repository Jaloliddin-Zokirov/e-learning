import React from "react";
import { Collapse } from "antd";
import ModuleItem from "../ModuleItem/ModuleItem";

const CourseItem = ({
  course,
  setViewModal,
  viewType,
  setViewType,
  setOpen,
}) => {
  return (
    <Collapse
      key={course.id}
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
          key: course.id,
          label: course?.title,
          children: course?.module.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
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

export default CourseItem;
