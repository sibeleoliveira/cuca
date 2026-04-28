"use client";
import { useRouter } from "next/navigation";

export default function WinModal({ winner, onRestart }) {
  const router = useRouter();

  if (!winner) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* CARD */}
      <div className="relative bg-gradient-to-br from-[#ffa465] to-[#c84d24] p-[3px] rounded-3xl shadow-2xl">

        <div className="bg-[#1a0d08] text-white p-10 rounded-3xl text-center w-[420px] relative overflow-hidden">

          {/* ⭐ estrelas decorativas */}
          <div className="absolute top-4 left-6 text-[#ffa465] text-xl">★</div>
          <div className="absolute top-6 right-6 text-white/60 text-lg">★</div>
          <div className="absolute bottom-6 left-8 text-white/40 text-lg">★</div>
          <div className="absolute bottom-4 right-10 text-[#ffa465]/70 text-xl">★</div>

          {/* glow */}
          <div className="absolute inset-0 bg-[#ffa465]/10 blur-2xl" />

          {/* conteúdo */}
          <div className="relative z-10">

            <h1 className="text-3xl font-extrabold mb-4 tracking-wide">
              🏆 Vitória!
            </h1>

            <p className="text-lg mb-6">
              <span
                className="font-bold text-2xl"
                style={{ color: winner.color }}
              >
                {winner.name}
              </span>{" "}
              venceu o jogo!
            </p>

            {/* BOTÕES */}
            <div className="flex gap-4 justify-center">

              {/* jogar novamente */}
              <button
                onClick={onRestart}
                className="px-6 py-3 rounded-xl font-bold bg-[#e17714] hover:bg-[#c84d24] transition shadow-lg"
              >
                Jogar novamente
              </button>

              {/* sair */}
              <button
                onClick={() => router.push("/")}
                className="px-6 py-3 rounded-xl font-bold border-2 border-[#ffa465] hover:bg-[#ffa465]/20 transition"
              >
                Sair
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}