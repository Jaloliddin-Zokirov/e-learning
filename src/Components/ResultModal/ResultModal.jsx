import React from "react";
import test from "../../Pages/Education/test";
import { HiOutlineXMark } from "react-icons/hi2";
import { FiX } from "react-icons/fi";

const ResultModal = ({ isClose, isAnswer }) => {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute z-50 inset-0 bg-[#00000092]"
        onClick={() => isClose(false)}
      ></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60] bg-white md:w-full md:max-w-[800px] w-[90%] p-4 rounded-lg max-h-[90vh] overflow-y-auto">
        <button
          className="ml-auto block mb-4 cursor-pointer"
          onClick={() => isClose(false)}
        >
          <FiX size={24} />
        </button>

        <h3 className="text-center text-[1.5rem] font-semibold mb-6">
          Test Natijalari
        </h3>

        <ul className="space-y-6">
          {test?.map((el, index) => {
            const userAnswer = isAnswer[el.id];
            const isCorrect = userAnswer === el.correctAnswer;

            return (
              <li key={el.id} className="p-4 border rounded-lg">
                <h4 className="text-[1.2rem] font-medium mb-2">
                  {index + 1}. {el.question}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {Object.entries(el.answers).map(([key, value]) => (
                    <p
                      key={key}
                      className={`p-2 rounded ${
                        key === el.correctAnswer
                          ? "bg-green-100"
                          : key === userAnswer
                          ? "bg-red-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <span className="font-semibold">
                        {key.toUpperCase()}:
                      </span>{" "}
                      {value}
                    </p>
                  ))}
                </div>

                <p className="text-sm">
                  Sizning javobingiz:{" "}
                  <span
                    className={`font-semibold ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {userAnswer
                      ? `${userAnswer.toUpperCase()} – ${
                          el.answers[userAnswer]
                        }`
                      : "Javob belgilanmagan"}
                  </span>
                </p>

                {!isCorrect && userAnswer && (
                  <p className="text-sm text-green-600">
                    To‘g‘ri javob: {el.correctAnswer.toUpperCase()} –{" "}
                    {el.answers[el.correctAnswer]}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResultModal;
