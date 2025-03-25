import React from "react";

const ViewModal = ({ isClose, isView }) => {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 z-[40] bg-[#00000092]"
        onClick={() => isClose(false)}
      ></div>
      <div className="absolute z-[41] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-full md:max-w-[800px] w-[90%] rounded-xl">
        <embed
          className="rounded-xl"
          src={isView}
          width="100%"
          height="600px"
        ></embed>
      </div>
    </div>
  );
};

export default ViewModal;
