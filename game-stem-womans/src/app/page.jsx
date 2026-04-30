"use client";
import { useRouter } from "next/navigation";
//import { Poppins } from "next/font/google";
import localFont from "next/font/local";


const lostInSouth = localFont({
  src: "../../public/Bouncy-Black-PERSONAL_USE_ONLY.otf",
  display: "swap",
});



// const poppinsFont = Poppins({
//   subsets: ["latin"],
//   weight: ["700", "800"]
// });

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-[#1a0d08] text-white">
      <img
        src="/logo-dm-3.svg"
        alt="Logo DCOMP Mulheres Topo"
        className="absolute top-0 left-30 transform -translate-x-1/2 w-45 h-45 drop-shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-20 object-contain"
      />

      {/* FUNDO */}
      <div className="h-full absolute inset-0 bg-gradient-to-br  from-[#f2e1cd] to-[#f8a972]" />

      <div className="absolute top-6 left-6 text-xl text-white/50">★</div>
      <div className="absolute top-10 left-1/4 text-2xl text-[#ffa465]">★</div>
      <div className="absolute top-16 left-1/2 text-xl text-white/60">★</div>
      <div className="absolute top-20 left-3/4 text-3xl text-[#ffa465]/70">★</div>

      <div className="absolute top-32 left-10 text-xl text-[#ffa465]/60">★</div>
      <div className="absolute top-36 left-1/3 text-2xl text-white/60">★</div>
      <div className="absolute top-40 left-2/3 text-xl text-[#ffa465]/60">★</div>
      <div className="absolute top-44 right-10 text-2xl text-white/70">★</div>

      <div className="absolute top-1/2 left-6 text-xl text-[#ffa465]/70">★</div>
      <div className="absolute top-1/2 left-1/4 text-2xl text-white/60">★</div>
      <div className="absolute top-1/2 left-1/2 text-xl text-[#ffa465]/60">★</div>
      <div className="absolute top-1/2 right-1/4 text-2xl text-white/70">★</div>
      <div className="absolute top-1/2 right-6 text-xl text-[#ffa465]/60">★</div>

      <div className="absolute bottom-44 left-10 text-xl text-white/60">★</div>
      <div className="absolute bottom-40 left-1/3 text-2xl text-[#ffa465]">★</div>
      <div className="absolute bottom-36 left-2/3 text-xl text-white/60">★</div>
      <div className="absolute bottom-32 right-10 text-2xl text-[#ffa465]/70">★</div>

      <div className="absolute bottom-24 left-6 text-xl text-[#ffa465]/60">★</div>
      <div className="absolute bottom-20 left-1/4 text-2xl text-white/60">★</div>
      <div className="absolute bottom-16 left-1/2 text-xl text-[#ffa465]/60">★</div>
      <div className="absolute bottom-20 right-1/4 text-2xl text-white/60">★</div>
      <div className="absolute bottom-16 right-6 text-xl text-[#ffa465]/60">★</div>

      <div className="absolute top-[15%] left-[15%] text-xl text-white/50">★</div>
      <div className="absolute top-[18%] left-[65%] text-2xl text-[#ffa465]/60">★</div>
      <div className="absolute top-[22%] left-[85%] text-xl text-white/50">★</div>

      <div className="absolute top-[65%] left-[20%] text-xl text-[#ffa465]/60">★</div>
      <div className="absolute top-[70%] left-[50%] text-2xl text-white/60">★</div>
      <div className="absolute top-[75%] left-[80%] text-xl text-[#ffa465]/60">★</div>

      <div className="absolute top-[35%] left-[10%] text-xl text-white/50">★</div>
      <div className="absolute top-[38%] left-[40%] text-2xl text-[#ffa465]/60">★</div>
      <div className="absolute top-[42%] left-[75%] text-xl text-white/50">★</div>

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center top-0 gap-50 mt-15">
        <div className={`${lostInSouth.className} text-7xl text-[#58251a] py-4 px-2 leading-relaxed [-webkit-text-stroke:2px_#b96a33] tracking-wider`}>
          QUEBRA CUCA
        </div>
        {/* BOTÃO INTEGRADO */}
        <button
          onClick={() => router.push("/setup")}
          className="group relative px-14 py-5 text-xl font-bold"
        >

          {/* glow */}
          <div className="absolute inset-0 bg-[#ffa465]/30 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition" />

          {/* fundo */}
          <div className="absolute inset-0 bg-[#58251a] rounded-2xl shadow-2xl  group-hover:scale-110 transition" />

          {/* borda */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#ffa465] group-hover:scale-110 transition" />

          {/* texto */}
          <span className="relative z-10 flex items-center gap-3">
            Jogar
            <span className="text-[#ffa465] text-lg group-hover:translate-x-1 transition">
              ★
            </span>
          </span>

        </button>

      </div>

      {/* LINHA FINAL */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffa465] to-transparent opacity-60" />

    </div>
  );
}