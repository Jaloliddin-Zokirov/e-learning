import React, { useState } from "react";
import test from "../../Pages/Education/test";
import { FiX } from "react-icons/fi";

const Test = ({ isClose, isResult, isAnswer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = test[currentIndex];
  const currentAnswer = answers[currentQuestion.id] || "";

  const handleChange = (evt) => {
    const value = evt.target.value;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentIndex < test.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      isClose(false);
      isResult(true);
      isAnswer(answers);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 z-10 bg-[#000000b1]"></div>
      <div className="relative z-20 bg-white md:w-full md:max-w-[800px] w-[90%] p-6 rounded-xl shadow-2xl transform transition-all">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={() => isClose(false)}
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-900 uppercase mb-5">
          {currentQuestion.question}
        </h2>

        <ul className="flex flex-wrap gap-4 justify-center">
          {Object.entries(currentQuestion.answers).map(([key, value]) => (
            <li className="w-full md:w-[48%]" key={key}>
              <label
                className={`block p-3 text-lg font-medium text-center rounded-lg transition-all cursor-pointer ${
                  currentAnswer === key
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={key}
                  checked={currentAnswer === key}
                  onChange={handleChange}
                />
                {key.toUpperCase()}: {value}
              </label>
            </li>
          ))}
        </ul>

        <button
          className={`w-full mt-6 py-3 text-lg font-semibold rounded-lg transition-all cursor-pointer ${
            currentAnswer
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!currentAnswer}
        >
          {currentIndex === test.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Test;
