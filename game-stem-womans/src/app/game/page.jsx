"use client";
import { useEffect, useState } from "react";
import Board from "@/components/Board";
import Dado from "@/components/Dado";
import Questionario from "@/components/Questionario";
import WinModal from "@/components/WinModal";

export default function Game() {

  const boardData = [
    { casa: "Início", area: "inicio" },
    { casa: 1, nivel: "facil" },
    { casa: 2, nivel: "facil" },
    { casa: 3, nivel: "facil" },
    { casa: 4, nivel: "facil" },
    { casa: 5, nivel: "facil" },
    { casa: 6, nivel: "facil" },
    { casa: 7, nivel: "medio" },
    { casa: 8, nivel: "medio" },
    { casa: 9, nivel: "medio" },
    { casa: 10, nivel: "medio" },
    { casa: 11, nivel: "medio" },
    { casa: 12, nivel: "medio" },
    { casa: 13, nivel: "dificil" },
    { casa: 14, nivel: "dificil" },
    { casa: 15, nivel: "dificil" },
    { casa: 16, nivel: "dificil" },
    { casa: 17, nivel: "dificil" },
    { casa: 18, nivel: "dificil" },
    { casa: "Fim", area: "final" }
  ];



  const [players, setPlayers] = useState([]);
  const [turn, setTurn] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions, setQuestions] = useState({});
  const [pendingRoll, setPendingRoll] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [winner, setWinner] = useState(null);
  const lastIndex = boardData.length - 1;


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("players")) || [];
    setPlayers(saved.map(p => ({ ...p, pos: 0 })));
    fetch("/api/questoes")
      .then(res => res.json())
      .then(data => {
        console.log("QUESTIONS:", data);
        setQuestions(data);
      });
  }, []);


  const handleRoll = async (value) => {
    if (isRolling) return;

    setIsRolling(true);
    const updated = [...players];

    for (let i = 0; i < value; i++) {
      await new Promise(r => setTimeout(r, 300));
      updated[turn].pos++;
      
      if (updated[turn].pos >= lastIndex) {
        updated[turn].pos = lastIndex;
        setPlayers([...updated]);

        handleWin(updated[turn]);
        return;
      }

      setPlayers([...updated]);
    }

    const cell = boardData[updated[turn].pos];

    if (!cell.nivel || !questions || !questions[cell.nivel]) {
      nextTurn();
      setIsRolling(false);
      return;
    }


    let list = questions[cell.nivel];
    console.log(list)

    if (!list.length) {
      nextTurn();
      return;
    }

    let disponiveis = list.filter(q => !q.usada);

    if (disponiveis.length === 0) {
      list.forEach(q => q.usada = false);
      disponiveis = list;
    }

    const randomIndex = Math.floor(Math.random() * disponiveis.length);
    let q = disponiveis[randomIndex];

    q.usada = true;

    setPendingRoll(value);
    setCurrentQuestion(q);
  };
  const handleAnswer = (answer) => {
    if (!currentQuestion) return;
    if (answer !== currentQuestion.resposta) {
      goBack(pendingRoll);
    }
    setCurrentQuestion(null);
    nextTurn();
    setIsRolling(false)
  };
  const goBack = async (roll) => {
    const updated = [...players];

    for (let i = 0; i < roll; i++) {
      await new Promise(r => setTimeout(r, 300));
      updated[turn].pos--;
      setPlayers([...updated]);
    }
  };
  const nextTurn = () => {
    setTurn(prev => (prev + 1) % players.length);
  };

  if (!players.length) return null;

  const handleWin = (player) => {
    setWinner(player);
    setIsRolling(false);
  };
  return (
    <div className="min-h-screen bg-[#f5f1ed] relative">

      {/* HEADER */}
      <div className="absolute top-2 left-0 w-full h-20 flex justify-baseline gap-5 flex-row px-8 py-4">

        <img src="/logo-dm-3.svg" className="h-30 self-center" />

        <div className="bg-white self-center px-4 py-2 rounded-xl shadow">
          Vez de: <b>{players[turn].name}</b>
        </div>

      </div>

      {/* DADO */}
      <div className="absolute top-20 right-6 bg-[#e9911c] p-3 rounded-2xl shadow-lg border border-white z-10">
        <Dado onRoll={handleRoll} disabled={isRolling || currentQuestion || winner} />
      </div>

      <Board players={players} boardData={boardData} />

      <Questionario
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
      <WinModal
        winner={winner}
        onRestart={() => window.location.reload()}
      />
    </div>
  );
}