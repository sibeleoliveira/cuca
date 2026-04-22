export async function GET() {
  const questions = {
    facil: [
      {
        pergunta: "2 + 2 = ?",
        opcoes: ["2", "3", "4", "5"],
        resposta: "4"
      },
    ],
    medio: [
      {
        pergunta: "5 x 3 = ?",
        opcoes: ["10", "15", "20", "25"],
        resposta: "15"
      }
    ],
    dificil: [
      {
        pergunta: "√81 = ?",
        opcoes: ["7", "8", "9", "10"],
        resposta: "9"
      }
    ]
  };

  return Response.json(questions);
}