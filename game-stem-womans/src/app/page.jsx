"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <button
        onClick={() => router.push("/setup")}
        className="bg-blue-500 text-white px-8 py-4 text-xl rounded-lg"
      >
        Jogar 🎮
      </button>
    </div>
  );
}