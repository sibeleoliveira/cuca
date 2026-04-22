"use client";
import { useEffect, useState } from "react";
import Board from "@/components/Board";
import Dado from "@/components/Dado";
import Questionario from "@/components/Questionario";

export default function Game() {

  const boardData = [
    { casa: "Início", area: "inicio" },
    { casa: 1, nivel: "facil" },
    { casa: 2, nivel: "facil" },
    { casa: 3, nivel: "facil" },
    { casa: 4, nivel: "facil" },
    { casa: 5, nivel: "facil" },
    { casa: 6, nivel: "medio" },
    { casa: 7, nivel: "medio" },
    { casa: 8, nivel: "medio" },
    { casa: 9, nivel: "medio" },
    { casa: 10, nivel: "medio" },
    { casa: 11, nivel: "dificil" },
    { casa: 12, nivel: "dificil" },
    { casa: 13, nivel: "dificil" },
    { casa: 14, nivel: "dificil" },
    { casa: 15, nivel: "dificil" },
    { casa: "Fim", area: "final" }
  ];



  const [players, setPlayers] = useState([]);
  const [turn, setTurn] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions, setQuestions] = useState({});
  const [pendingRoll, setPendingRoll] = useState(0);

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
    const updated = [...players];

    for (let i = 0; i < value; i++) {
      await new Promise(r => setTimeout(r, 300));
      updated[turn].pos++;
      setPlayers([...updated]);
    }

    const cell = boardData[updated[turn].pos];

    // 🔥 proteção total
    if (!cell.nivel || !questions || !questions[cell.nivel]) {
      nextTurn();
      return;
    }

    const list = questions[cell.nivel];

    if (!list.length) {
      nextTurn();
      return;
    }

    const q = list[Math.floor(Math.random() * list.length)];

    setPendingRoll(value);
    setCurrentQuestion(q);
  };
  const handleAnswer = (answer) => {
    if (!currentQuestion) return;
    if (answer === currentQuestion.resposta) {
      alert("Acertou!");
    } else {
      alert("Errou!");
      goBack(pendingRoll);
    }

    setCurrentQuestion(null);
    nextTurn();
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

  return (
    <div>
      <div className="absolute top-4 left-4 bg-white p-3 rounded shadow">
        Vez de: <b>{players[turn].name}</b>
      </div>
      <div className="absolute top-4 right-4">
        <Dado onRoll={handleRoll} />
      </div>
      <Board players={players} boardData={boardData} />
      <Questionario
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    </div>
  );
}