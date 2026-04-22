"use client";

export default function Questionario({ question, onAnswer }) {
  if (!question) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">

        <h2 className="text-lg font-bold mb-4">
          {question.pergunta}
        </h2>

        <div className="flex flex-col gap-2">
          {question.opcoes.map((op, i) => (
            <button
              key={i}
              onClick={() => onAnswer(op)}
              className="bg-gray-100 hover:bg-blue-500 hover:text-white p-2 rounded transition"
            >
              {op}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}