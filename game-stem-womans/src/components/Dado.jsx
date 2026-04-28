"use client";
import { useState } from "react";

export default function Dado({ onRoll, disabled }) {
  const [value, setValue] = useState(1);
  const [rolling, setRolling] = useState(false);

  const patterns = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  const roll = () => {
    if(rolling)return
    setRolling(true);

    let count = 0;
    const interval = setInterval(() => {
      const v = Math.floor(Math.random() * 6) + 1;
      setValue(v);
      count++;

      if (count > 8) {
        clearInterval(interval);
        setRolling(false);
        onRoll(v);
      }
    }, 100);
  };

  return (
    <div
      onClick={() => !disabled && roll()}
      className={`w-20 h-20 bg-white rounded-xl border-2 grid grid-cols-3 gap-1 p-2 shadow-lg
      ${rolling ? "animate-spin" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`bg-black rounded-full ${
            patterns[value].includes(i) ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}