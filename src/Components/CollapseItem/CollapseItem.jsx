import React from "react";
import { Collapse } from "antd";

const CollapseItem = ({ title, children }) => {
  return (
    <Collapse
      size="large"
      className="my-collapse"
      expandIcon={({ isActive }) =>
        isActive ? (
          <img src="arrowClose.svg" width={40} height={40} alt="close arrow icon" />
        ) : (
          <img src="arrowOpen.svg" width={40} height={40} alt="open arrow icon" />
        )
      }
      items={[
        {
          key: title,
          label: title,
          children: children,
        },
      ]}
    />
  );
};

export default CollapseItem;