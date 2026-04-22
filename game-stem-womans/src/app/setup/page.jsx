"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Setup() {
  const router = useRouter();
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState([
    { name: "", color: "#ff0000" },
    { name: "", color: "#00ff00" },
    { name: "", color: "#0000ff" },
    { name: "", color: "#ffff00" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...players];
    updated[index][field] = value;
    setPlayers(updated);
  };

  const startGame = () => {
    const selected = players.slice(0, numPlayers);
    localStorage.setItem("players", JSON.stringify(selected));
    router.push("/game");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Configurar Jogadores</h1>

      <select
        value={numPlayers}
        onChange={(e) => setNumPlayers(Number(e.target.value))}
        className="mb-6"
      >
        {[2, 3, 4].map((n) => (
          <option key={n} value={n}>
            {n} jogadores
          </option>
        ))}
      </select>

      {players.slice(0, numPlayers).map((p, i) => (
        <div key={i} className="mb-4 flex gap-4">
          <input
            placeholder={`Jogador ${i + 1}`}
            value={p.name}
            onChange={(e) => handleChange(i, "name", e.target.value)}
            className="border p-2"
          />

          <input
            type="color"
            value={p.color}
            onChange={(e) => handleChange(i, "color", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={startGame}
        className="bg-green-500 text-white px-6 py-3 rounded"
      >
        Iniciar
      </button>
    </div>
  );
}