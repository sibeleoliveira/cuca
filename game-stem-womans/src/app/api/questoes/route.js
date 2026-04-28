export async function GET() {
  const questions = {
    facil: [
      {
        pergunta: "Jaqueline Goes de Jesus liderou o sequenciamento do genoma do Coronavírus no Brasil em tempo recorde usando ferramentas de computação. Como se chama a área que une biologia e algoritmos de dados?",
        opcoes: ["Biotecnologia", "Bioinformática", "Ciência de Dados", "Processamento de imagem"],
        resposta: "Bioinformática",
        usada: false
      },
      {
        pergunta: "Quem é reconhecida como a primeira programadora da história por criar um algoritmo para a Máquina Analítica?",
        opcoes: ["Grace Hopper", "Ada Lovelace", "Marie Curie", "Margaret Hamilton"],
        resposta: "Ada Lovelace",
        usada: false
      },
      {
        pergunta: "Qual atriz de Hollywood patenteou a tecnologia de salto de frequência que é a base do Wi-Fi moderno?",
        opcoes: ["Audrey Hepburn", "Ingrid Bergman", "Marilyn Monroe", "Hedy Lamarr"],
        resposta: "Hedy Lamarr",
        usada: false
      },
      {
        pergunta: "Quem é conhecida como a 'Vovó do COBOL' por seu trabalho em linguagens de programação e compiladores?",
        opcoes: ["Grace Hopper", "Joan Clarke", "Barbara Liskov", "Carol Shaw"],
        resposta: "Grace Hopper",
        usada: false
      },
      {
        pergunta: "Como era chamado o grupo de mulheres que faziam cálculos complexos à mão na NASA antes dos computadores digitais?",
        opcoes: ["As calculadoras", "As computadores humanos", "As mestras das órbitas", "As engenheiras de papel"],
        resposta: "As computadores humanos",
        usada: false
      },
      {
        pergunta: "Quem cunhou o termo 'bug' na programação ao encontrar uma mariposa num computador?",
        opcoes: ["Maria das Graças Volpe Nunes", "Sandra Ávila", "Grace Hopper", "Katherine Johnson"],
        resposta: "Grace Hopper",
        usada: false
      },
      {
        pergunta: "Qual o nome do evento da SBC voltado especificamente para discutir o papel das mulheres na tecnologia, realizado dentro do CSBC?",
        opcoes: ["Campus Party", "Simpósio Ada Lovelace", "Hackaton das Minas", "Women in Information Technology"],
        resposta: "Women in Information Technology",
        usada: false
      },
      {
        pergunta: "Como se chama o programa da SBC criado para incentivar meninas a seguirem carreira em computação?",
        opcoes: ["Tech Girls", "Code Queens", "Meninas Digitais", "Dcomp Mulheres"],
        resposta: "Meninas Digitais",
        usada: false
      },
      {
        pergunta: "A sigla STEM significa Ciência, Tecnologia, Engenharia e ______.",
        opcoes: ["Computação", "Matemática", "Metafísica", "Física"],
        resposta: "Matemática",
        usada: false
      },
      {
        pergunta: "O Programa Meninas Digitais da SBC possui diversos projetos parceiros com o intuito de despertar o interesse de meninas para seguirem carreira em Tecnologia da Informação e Comunicação. Na UFS, o projeto parceiro “Code Queens” é coordenado pela professora:",
        opcoes: ["Edilayne Salgueiro", "Kenia Kodel", "Mai-Ly Faro", "Beatriz Trinchão"],
        resposta: "Mai-Ly Faro",
        usada: false
      }
    ],
    medio: [
      {
        pergunta: "Quem é a cientista considerada 'mãe dos videogames' por criar o primeiro jogo de videogame comercial jogado em TV?",
        opcoes: ["Grace Hopper", "Frances Allen", "Margaret Hamilton", "Carol Shaw"],
        resposta: "Carol Shaw",
        usada: false
      },
      {
        pergunta: "O 'Princípio da Substituição', fundamental para a programação orientada a objetos, leva o nome de qual cientista?",
        opcoes: ["Barbara Liskov", "Tatiana Sampaio", "Fei-Fei Li", "Larry Page"],
        resposta: "Barbara Liskov",
        usada: false
      },
      {
        pergunta: "Quem foi a matemática egípcia que liderou o projeto de software do computador ENIAC, o primeiro computador eletrônico de uso geral?",
        opcoes: ["Frances Allen", "Jean Jennings Bartik", "Vera Rubin", "Lise Meitner"],
        resposta: "Jean Jennings Bartik",
        usada: false
      },
      {
        pergunta: "Qual engenheira de software liderou a equipe que desenvolveu o código de voo para o pouso da Apollo 11 na Lua?",
        opcoes: ["Dorothy Vaughan", "Radia Perlman", "Mary Jackson", "Margaret Hamilton"],
        resposta: "Margaret Hamilton",
        usada: false
      },
      {
        pergunta: "Quem foi a primeira mulher a ganhar a Medalha Turing, o Nobel da Computação?",
        opcoes: ["Jean Sammet", "Karen Sparck Jones", "Frances Allen", "Anita Borg"],
        resposta: "Frances Allen",
        usada: false
      },
      {
        pergunta: "Qual engenheira da NASA, negra, foi pioneira nos cálculos que permitiram o primeiro voo orbital americano?",
        opcoes: ["Shafi Goldwasser", "Nina da Hora", "Dorothy Vaughan", "Marie Curie"],
        resposta: "Dorothy Vaughan",
        usada: false
      },
      {
        pergunta: "Qual engenheira de computação inventou o protocolo Spanning Tree, essencial para o funcionamento da internet?",
        opcoes: ["Radia Perlman", "Adele Goldberg", "Patricia Selinger", "Joan Clarke"],
        resposta: "Radia Perlman",
        usada: false
      },
      {
        pergunta: "Qual cientista da computação brasileira é uma voz ativa na luta contra o racismo algorítmico e pela ética na IA?",
        opcoes: ["Sandra Ávila", "Beatriz Nascimento", "Nina da Hora", "Sonia Guimarães"],
        resposta: "Nina da Hora",
        usada: false
      },
      {
        pergunta: "Quem foi a primeira mulher negra a tornar-se doutora em Física no Brasil e lecionar no renomado Instituto Tecnológico de Aeronáutica (ITA)?",
        opcoes: ["Beatriz Trinchão", "Lélia Gonzalez", "Sônia Guimarães", "Elza Furtado"],
        resposta: "Sônia Guimarães",
        usada: false
      },
      {
        pergunta: "Que matemática norte-americana teve o seu trabalho como fundamental para a criação da tecnologia de navegação por satélite que hoje conhecemos como GPS?",
        opcoes: ["Gladys West", "Margaret Hamilton", "Jennifer Aniston", "Hedy Lamarr"],
        resposta: "Gladys West",
        usada: false
      }
    ],
    dificil: [
      {
        pergunta: "Quem foi a matemática britânica que criou o conceito de 'sub-rotina' e ajudou a decifrar códigos nazistas em Bletchley Park?",
        opcoes: ["Joan Clarke", "Jean Sammet", "Ada Lovelace", "Grace Hopper"],
        resposta: "Joan Clarke",
        usada: false
      },
      {
        pergunta: "Qual pesquisadora brasileira é conhecida por suas contribuições em Criptografia e Teoria dos Números?",
        opcoes: ["Routo Terada", "Lauana Prado", "Marta Mattoso", "Sônia Guimarães"],
        resposta: "Routo Terada",
        usada: false
      },
      {
        pergunta: "Quem foi a primeira mulher a ser eleita presidente da Sociedade Brasileira de Computação (SBC)?",
        opcoes: ["Marta Mattoso", "Cláudia Bauzer Medeiros", "Lisiane Lemos", "Beatriz Trinchão"],
        resposta: "Cláudia Bauzer Medeiros",
        usada: false
      },
      {
        pergunta: "Quem inventou o sistema computadorizado de comutação telefônica, que evitava sobrecargas no sistema de chamadas?",
        opcoes: ["Hedy Lamarr", "Radia Perlman", "Erna Schneider Hoover", "Elsie Shutt"],
        resposta: "Erna Schneider Hoover",
        usada: false
      },
      {
        pergunta: "Qual cientista da computação ganhou o Prêmio Turing em 2012 por contribuições à criptografia e à teoria da complexidade?",
        opcoes: ["Shafi Goldwasser", "Gladys West", "Alan Turing", "Cynthia Dwork"],
        resposta: "Shafi Goldwasser",
        usada: false
      },
      {
        pergunta: "Qual cientista da computação brasileira é conhecida por suas contribuições em inteligência artificial?",
        opcoes: ["Sandra Avila", "Tatiana Sampaio", "Maria das Graças Volpe Nunes", "Jaqueline Goes"],
        resposta: "Maria das Graças Volpe Nunes",
        usada: false
      },
      {
        pergunta: "O que faz uma pesquisadora na área de genômica?",
        opcoes: ["Estuda o comportamento humano", "Analisa genes e DNA", "Constrói máquinas", "Desenvolve softwares"],
        resposta: "Analisa genes e DNA",
        usada: false
      },
      {
        pergunta: "Na área da Ciência da Computação, a pesquisadora brasileira Liane Margarida Rockenbach Tarouco é uma verdadeira desbravadora. Suas pesquisas ajudaram a desenvolver a área de Gerência de ____________ no país.",
        opcoes: ["Redes de Computadores", "Criptomoedas", "Robôs espaciais", "Jogos de tabuleiro"],
        resposta: "Redes de Computadores",
        usada: false
      },
      {
        pergunta: "A cientista da computação Soraia Raupp Musse tem destaque mundial por seu trabalho brilhante. Ela é a terceira pesquisadora mais citada do mundo em qual inovadora área da tecnologia?",
        opcoes: ["Simulação de Multidões", "Realidade Virtual para diagnósticos médicos", "Criptografia de dados bancários", "Tradução automática de línguas nativas"],
        resposta: "Simulação de Multidões",
        usada: false
      },
      {
        pergunta: "Qual é o nome da premiada cientista e química brasileira que desenvolveu pesquisas de sustentabilidade, como a criação de pele artificial para transplantes a partir de resíduos de couro?",
        opcoes: ["Ester Sabino", "Jaqueline Goes de Jesus", "Joana D'Arc Félix", "Tatiana Sampaio"],
        resposta: "Joana D'Arc Félix",
        usada: false
      }
    ]
  };
  return Response.json(questions);
}