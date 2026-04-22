"use client";
import { useRef, useEffect, useState } from "react";

export default function Board({ players, boardData }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  // base usada para desenhar (seu mapa original)
  const BASE_WIDTH = 1800;
  const BASE_HEIGHT = 600;

  const positions = [
    { x: 80, y: 340 },
    { x: 180, y: 290 },
    { x: 280, y: 240 },
    { x: 380, y: 190 },
    { x: 480, y: 140 },

    { x: 580, y: 190 },
    { x: 680, y: 240 },
    { x: 780, y: 290 },
    { x: 880, y: 340 },

    { x: 980, y: 290 },
    { x: 1080, y: 240 },
    { x: 1180, y: 190 },
    { x: 1280, y: 140 },

    { x: 1380, y: 190 },
    { x: 1480, y: 240 },
    { x: 1580, y: 290 },
    { x: 1680, y: 340 }
  ];

  // recalcula escala quando tela muda
  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      setScale({
        x: width / BASE_WIDTH,
        y: height / BASE_HEIGHT
      });
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div
        ref={containerRef}
        className="relative w-[95vw] h-[80vh] overflow-hidden"
      >

        {/* CASAS */}
        {boardData.map((cell, i) => {
          const p = positions[i];

          return (
            <div
              key={i}
              className="absolute w-20 h-20 rounded-full flex flex-col items-center justify-center text-xs font-bold text-white shadow-inner"
              style={{
                left: p.x * scale.x,
                top: p.y * scale.y,
                transform: "translate(-50%, -50%)",
                background:
                  cell.area === "inicio" ? "#2ecc71" :
                  cell.area === "final" ? "#e74c3c" :
                  cell.nivel === "facil" ? "#3498db" :
                  cell.nivel === "medio" ? "#f1c40f" :
                  "#9b59b6"
              }}
            >
              <div>{cell.casa}</div>
              {cell.nivel && <small>{cell.nivel}</small>}
            </div>
          );
        })}

        {/* PEÕES */}
        {players.map((player, i) => {
          const p = positions[player.pos];

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: p.x * scale.x,
                top: p.y * scale.y,
                transform: "translate(-50%, -100%)",
                transition: "all 0.3s"
              }}
            >
              {/* Peão estilo */}
              <div className="w-3 h-3 rounded-full mx-auto -mb-1" style={{ background: player.color }} />
              <div className="w-4 h-5 rounded-full mx-auto -mb-1" style={{ background: player.color }} />
              <div className="w-6 h-2 rounded-full" style={{ background: player.color }} />
            </div>
          );
        })}

      </div>
    </div>
  );
}