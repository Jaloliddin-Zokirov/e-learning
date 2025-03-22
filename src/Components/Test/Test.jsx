import React, { useState } from "react";
import test from "../../Pages/Education/test";
import { FiX } from "react-icons/fi";

const Test = ({ isClose, isResult, isAnswer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Savolga javoblar saqlanadi

  const currentQuestion = test[currentIndex];
  const currentAnswer = answers[currentQuestion.id] || ""; // Hozirgi savolga javob

  const handleChange = (evt) => {
    const value = evt.target.value;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value, // Hozirgi savolga javobni saqlash
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
    <div className="absolute inset-0">
      <div
        className="absolute z-50 inset-0 bg-[#00000092]"
        onClick={() => isClose(false)}
      ></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60] bg-white w-[800px] p-4 rounded-lg">
        <button
          className="ml-auto block mb-4 cursor-pointer"
          onClick={() => isClose(false)}
        >
          <FiX size={24} />
        </button>

        <div key={currentQuestion.id} className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-center uppercase">
            {currentQuestion.question}
          </h2>
          <ul className="flex items-center justify-between flex-wrap space-y-4">
            {Object.entries(currentQuestion.answers).map(([key, value]) => (
              <li className="w-[47%]" key={key}>
                <label
                  className={`block p-2 rounded cursor-pointer ${
                    currentAnswer === key
                      ? "bg-[#2964c2] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <input
                    className="hidden"
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={key}
                    checked={currentAnswer === key} // <-- Checked holatini belgilash
                    onChange={handleChange}
                  />
                  {key.toUpperCase()}: {value}
                </label>
              </li>
            ))}
          </ul>
          <button
            className={`w-full mt-4 px-4 py-2 rounded transition ${
              currentAnswer
                ? "bg-[#2964c2] text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={!currentAnswer} // <-- Javob tanlanmasa, tugma ishlamaydi
          >
            {currentIndex === test.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
