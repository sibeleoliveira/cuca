"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Setup() {
  const router = useRouter();

  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState([
    { name: "", color: "#e17714" },
    { name: "", color: "#b96a33" },
    { name: "", color: "#c84d24" },
    { name: "", color: "#58251a" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...players];
    updated[index][field] = value;
    setPlayers(updated);
  };


  const selectedPlayers = players.slice(0, numPlayers);
  const allValid = selectedPlayers.every(
    (p) => p.name.trim() !== ""
  );
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">


      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          opacity: 0.8,
        }}
      />

      {/* GRADIENTE POR CIMA */}
      <div className="absolute inset-0 bg-linear-to-br from-[#ffa465] to-[#c84d24] opacity-90" />

      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center">

        <form className="bg-white p-8 rounded-3xl shadow-xl w-[400px]" onSubmit={(e) => {
          e.preventDefault();
          if (!allValid) return;
          localStorage.setItem("players", JSON.stringify(selectedPlayers));
          router.push("/game");
        }}>

          <h1 className="text-xl font-bold mb-4 text-center text-[#58251a]">
            Configurar Jogadores
          </h1>

          <select
            value={numPlayers}
            onChange={(e) => setNumPlayers(Number(e.target.value))}
            className="mb-6 w-full p-2 border-2 border-[#e9911c] rounded-lg"
          >
            {[2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} jogadores
              </option>
            ))}
          </select>

          {players.slice(0, numPlayers).map((p, i) => (
            <div key={i} className="mb-4 flex gap-4" required>

              <input
                placeholder={`Jogador ${i + 1}`}
                value={p.name}
                onChange={(e) => handleChange(i, "name", e.target.value)}
                className="border-2 border-[#e9911c] p-2 rounded-lg w-full"
                required
              />

              <input
                type="color"
                value={p.color}
                onChange={(e) => handleChange(i, "color", e.target.value)}
                required
              />

            </div>
          ))}

          <button
            type="submit"
            className={`w-full bg-[#e17714] text-white px-6 py-3 rounded-xl mt-4 font-bold transition ${!allValid ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#c84d24]"}`}>
            Iniciar
          </button>

        </form>

      </div>
    </div>
  );
}