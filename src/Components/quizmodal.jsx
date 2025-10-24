const questions = [
  {
    question: "How many languages do I speak?",
    options: ["2 languages", "3 languages", "4 languages", "5 languages"],
    answer: "4 languages",
  },
  {
    question: "Where are my parents from?",
    options: ["Brazil", "Portugal", "Cape Verde Islands", "Spain"],
    answer: "Cape Verde Islands",
  },
  {
    question: "What city have I visited 20+ times?",
    options: ["London", "Paris", "New York City", "Stockholm"],
    answer: "New York City",
  },
  {
    question: "How many siblings do I have?",
    options: ["1 brother", "2 sisters", "3 sisters", "No siblings"],
    answer: "3 sisters",
  },
  {
    question: "What is my strongest trait?",
    options: [
      "I am always on time",
      "I don't give up on solving problems no matter how complex they are",
      "I am a fast learner",
      "I am very organized",
    ],
    answer: [
      "I am always on time",
      "I don't give up on solving problems no matter how complex they are",
      "I am a fast learner",
      "I am very organized",
    ],
  },
];

import { useState } from "react";

export default function Quizmodal({ onClose }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  // Calculate score
  const score = selected.filter((ans, idx) =>
    Array.isArray(questions[idx].answer)
      ? questions[idx].answer.includes(ans)
      : ans === questions[idx].answer
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-[#38bdf8] rounded-xl shadow-lg p-6 w-full max-w-md mx-4 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close quiz"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
          Fun facts about me !
        </h2>
        {!showResult ? (
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {questions[current].question}
            </div>
            <div className="grid gap-3">
              {questions[current].options.map((option, idx) => (
                <button
                  key={option}
                  className={`w-full py-2 px-4 rounded-lg border transition-colors duration-200
                    ${
                      selected[current] === option
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-100"
                    }
                  `}
                  onClick={() => {
                    const updated = [...selected];
                    updated[current] = option;
                    setSelected(updated);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500 text-center">
              Question {current + 1} / {questions.length}
            </div>
            <div className="flex justify-between mt-6">
              {current > 0 && (
                <button
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300"
                  onClick={() => setCurrent(current - 1)}
                >
                  Previous
                </button>
              )}
              {current < questions.length - 1 ? (
                <button
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    selected[current]
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={() => selected[current] && setCurrent(current + 1)}
                  disabled={!selected[current]}
                >
                  Next
                </button>
              ) : (
                <button
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    selected[current]
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={() => selected[current] && setShowResult(true)}
                  disabled={!selected[current]}
                >
                  See Result
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center mt-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Your Score: {score} / {questions.length}
            </h3>
            <div className="mb-4 text-gray-700">
              <p>
                I speak Swedish, English, Portuguese, and Creole. My parents are
                from the beautiful Cape Verde Islands.
                <br />
                I’ve visited New York City more than 20 times, and I have 3
                sisters.
                <br />
                My strongest traits are: always on time, never give up on
                solving problems, fast learner, and very organized.
                <br />I love challenges and always strive to find solutions!
              </p>
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
