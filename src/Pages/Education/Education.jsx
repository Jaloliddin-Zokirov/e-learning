import React, { useState } from "react";
import { Collapse } from "antd";
import "./Education.scss";
import data from "./data";
import Test from "../../Components/Test/Test";
import ResultModal from "../../Components/ResultModal/ResultModal";

const Education = React.memo(() => {
  const [open, setOpen] = useState(true)
  const [result, setResult] = useState(false)
  const [answer, setAnswer] = useState([])
  const renderExpandIcon = ({ isActive }) => (
    <img
      src={isActive ? "arrowClose.svg" : "arrowOpen.svg"}
      width={40}
      height={40}
      alt={isActive ? "close arrow icon" : "open arrow icon"}
    />
  );

  return (
    <section className="mt-8">
      {data?.map((course) => (
        <Collapse
          key={course.id}
          size="large"
          className="my-collapse"
          expandIcon={renderExpandIcon}
          items={[
            {
              key: course.id,
              label: course?.title,
              children: (
                <>
                  {course.module.map((module) => {
                    return (
                      <Collapse
                        key={module.id}
                        size="large"
                        className="my-collapse"
                        expandIcon={renderExpandIcon}
                        items={[
                          {
                            key: module.id,
                            label: module?.title,
                            children: (
                              <>
                                {module?.lessons.map((lessons) => {
                                  return (
                                    <Collapse
                                      key={lessons.id}
                                      size="large"
                                      className="my-collapse"
                                      expandIcon={renderExpandIcon}
                                      items={[
                                        {
                                          key: lessons.id,
                                          label: lessons?.title,
                                          children: (
                                            <>
                                              <video className="w-96 h-60 bg-amber-600">
                                                {lessons?.content?.video
                                                  ? lessons?.content?.video
                                                  : "Darslik hali joylanmadi"}
                                              </video>
                                              <div className="flex items-center gap-5">
                                                <p>
                                                  {lessons?.content?.pdf
                                                    ? lessons?.content?.pdf
                                                    : "Darslik hali joylanmadi"}
                                                </p>
                                                <p>
                                                  {lessons?.content?.ppt
                                                    ? lessons?.content?.ppt
                                                    : "Darslik hali joylanmadi"}
                                                </p>
                                              </div>
                                              <button className="p-2 bg-blue-500 cursor-pointer" onClick={() => setOpen(true)}>test</button>
                                            </>
                                          ),
                                        },
                                      ]}
                                    />
                                  );
                                })}
                              </>
                            ),
                          },
                        ]}
                      />
                    );
                  })}
                </>
              ),
            },
          ]}
        />
      ))}

      {open && <Test isClose={setOpen} isResult={setResult} isAnswer={setAnswer} />}
      {result && <ResultModal isClose={setResult} isAnswer={answer} />}
    </section>
  );
});

export default Education;
