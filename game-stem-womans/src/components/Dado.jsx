"use client";
import { useState } from "react";

export default function Dado({ onRoll }) {
  const [value, setValue] = useState(1);

  const roll = () => {
    let count = 0;
    const interval = setInterval(() => {
      const v = Math.floor(Math.random() * 6) + 1;
      setValue(v);
      count++;

      if (count > 10) {
        clearInterval(interval);
        onRoll(v);
      }
    }, 100);
  };

  const map = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  return (
    <div onClick={roll}
      className="w-20 h-20 bg-white border-2 border-black grid grid-cols-3 gap-1 p-1 cursor-pointer">
      {[...Array(9)].map((_, i) => (
        <div key={i}
          className={`rounded-full bg-black ${map[value].includes(i) ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}