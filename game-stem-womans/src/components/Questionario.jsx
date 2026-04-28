"use client";
import { useState } from "react";

export default function Questionario({ question, onAnswer }) {

  const [selected, setSelected] = useState(null);

  if (!question) return null;

  const handleClick = (op) => {
    setSelected(op);

    setTimeout(() => {
      onAnswer(op);
      setSelected(null);
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">

      <div className="bg-white p-8 rounded-3xl w-[450px] shadow-2xl border-4 border-[#e17714]">

        <h2 className="text-xl font-bold mb-6 text-center text-[#58251a]">
          {question.pergunta}
        </h2>

        <div className="flex flex-col gap-3">

          {question.opcoes.map((op, i) => {
            const isCorrect = op === question.resposta;
            const isSelected = selected === op;

            return (
              <button
                key={i}
                onClick={() => handleClick(op)}
                className={`p-3 rounded-xl font-semibold transition
                ${
                  isSelected
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-[#ffa465] hover:bg-[#e17714] text-white"
                }`}
              >
                {op}
              </button>
            );
          })}

        </div>

      </div>
    </div>
  );
}