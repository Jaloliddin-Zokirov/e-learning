import React, { useState } from "react";
import "./Education.scss";
import data from "./data";
import Test from "../../Components/Test/Test";
import ResultModal from "../../Components/ResultModal/ResultModal";
import ViewModal from "../../Components/ViewModal/ViewModal";
import CourseItem from "../../Components/CourseItem/CourseItem";

const Education = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewType, setViewType] = useState(false);
  const [answer, setAnswer] = useState([]);

  return (
    <section className="mt-8">
      {data?.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          setViewModal={setViewModal}
          viewType={viewType}
          setViewType={setViewType}
          setOpen={setOpen}
        />
      ))}

      {open && (
        <Test isClose={setOpen} isResult={setResult} isAnswer={setAnswer} />
      )}
      {result && <ResultModal isClose={setResult} isAnswer={answer} />}
      {viewModal && <ViewModal isClose={setViewModal} isView={viewModal} />}
    </section>
  );
});

export default Education;
