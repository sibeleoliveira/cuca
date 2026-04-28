"use client";
import { useRef, useEffect, useState } from "react";

export default function Board({ players, boardData }) {

  const containerRef = useRef(null);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const BASE_WIDTH = 1800;
  const BASE_HEIGHT = 600;
  const positions = [
    { x: 80, y: 430 },
    { x: 80, y: 340 },

    { x: 180, y: 290 },
    { x: 280, y: 240 },
    { x: 380, y: 190 },
    { x: 480, y: 140 },
    { x: 580, y: 190 },

    { x: 680, y: 240 },
    { x: 780, y: 290 },
    { x: 825, y: 380 },
    { x: 935, y: 380 },
    { x: 980, y: 290 },
    { x: 1080, y: 240 },

    { x: 1180, y: 190 },
    { x: 1280, y: 140 },
    { x: 1380, y: 190 },
    { x: 1480, y: 240 },
    { x: 1580, y: 290 },

    { x: 1680, y: 340 },
    { x: 1680, y: 430 }
  ];
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
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#faf0e4] to-[#f8a972]">
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


      <div
        ref={containerRef}
        className="relative w-[95vw] h-[80vh]"
      >

        {/* CASAS */}
        {boardData.map((cell, i) => {
          const p = positions[i];

          return (
            <div
              key={i}
              className="absolute w-20 h-20 rounded-full flex flex-col items-center justify-center text-xs font-bold text-white shadow-lg border-2 border-white"
              style={{
                left: p.x * scale.x,
                top: p.y * scale.y,
                transform: "translate(-50%, -50%)",
                background:
                  cell.area === "inicio" ? "#ffa465" :
                    cell.area === "final" ? "#58251a" :
                      cell.nivel === "facil" ? "#e9911c" :
                        cell.nivel === "medio" ? "#e17714" :
                          "#c84d24"
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
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border border-white" style={{ background: player.color }} />
                <div className="w-5 h-6 rounded-full -mt-1 border border-white" style={{ background: player.color }} />
                <div className="w-7 h-2 rounded-full -mt-1 border border-white" style={{ background: player.color }} />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}