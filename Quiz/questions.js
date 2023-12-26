

const quiz = [
  /* lógica */
    {
        question:'Se você tem 3 maçãs e come 2 delas, quantas maçãs restam?',
        options:['0 maçãs','1 maçã', '2 maçãs', '3 maçãs'],
        answer:1
    },
    {
        question:'Em um avião havia quatro Romanos e um inglês. Qual o nome da Aeromoça?',
        options:['Claúdia','Maria', 'Luiza', 'Ivone'],
        answer:3
    },
    {
        question:'Em uma feira ha 5 barracas numeradas pelos vendedores. A primeira vende bananas; a segunda vende coco; a terceira esta sendo montada; a quarta vende especiarias; e a quinta vende flores. Nenhuma barraca pode vender a mesma coisa que as outras. <br> portanto, seguindo essa lógica, a unica coisa que a terceira barraca pode vender é: ',
        options:['bananas','legumes', 'hortaliças', 'doces'],
        answer:3
    },
    {
        question:'Um jogo tradicional é a Paciência utiliza 52 cartas. Inicialmente são formadas sete colunas com as cartas. A primeira coluna tem uma carta, a segunda tem duas cartas, a terceira tem três cartas,  e assim sucessivamente até a sétima coluna, esta tem sete cartas, e o que sobra forma o monte, que são as cartas não utilizadas nas colunas.<br> Quantas cartas formam o monte?',
        options:['21','26', '24', '31'],
        answer:2
    },
    {
        question:'Assinale a alternativa que completa a seguinte série: 9, 16, 25, 36...?',
        options:['48','56', '77', '47'],
        answer:0
    },
    {
        question:'Todo cachorro é um animal, logo:',
        options:['Todo rabo de animal é um rabo de cachorro.', 'Nenhum cachorro é um animal.', 'Nem todo cachorro é um animal.', 'Toda pata de cachorro é uma pata de um animal'],
        answer:3
    },
    {
        question:'Um fazendeiro tem 17 ovelhas em um campo. Todas morreram, exceto 9. Quantas ovelhas restam?',
        options:['8','1','17','9'],
        answer:1
    },
    {
        question:'Se você tem apenas uma partida de fósforo e está em um quarto escuro com uma lâmpada a óleo, um fogão a gás e uma vela, qual você acenderia primeiro?',
        options:['A lâmpada a óleo.','O fogão a gás.','A vela.','Nenhuma das opções.'],
        answer:3
    },
    {
        question:'Em uma competição de natação, há 8 participantes e 3 provas. Quantos pódios diferentes serão necessários para premiar os três primeiros colocados de cada uma das provas?',
        options:['3 pódios','9 pódios','24 pódios','12 pódios'],
        answer:1
    },
    {
        question:'Alguns meses têm 30 dias, outros 31. Quantos têm 28 dias?',
        options:['Somente fevereiro tem 28 dias','só ha 28 dias de janeiro á julho','só ha 28 dias de outubro á dezembro','todos os meses tem 28 dias'],
        answer:3
    },
    {
        question:'Se 7 livros custam $63, quanto custará 10 livros??',
        options:['R$80','R$90','R$100','R$110'],
        answer:1
    },
    {
        question:'Se um carro percorre 60 quilômetros por hora, em quantas horas ele percorrerá 300 quilômetros?',
        options:['3 horas','4 horas','5 horas','6 horas'],
        answer:2
    },
    {
        question:'Um avião voa a uma velocidade média de 800 km/h. Se ele viajar por 4 horas, qual será a distância total percorrida?',
        options:['2000 Km','3200 Km','4000 Km','6400 Km'],
        answer:1
    },
    {
        question:'Um pai tem 10 reais para dividir entre suas duas filhas. Que horas são?',
        options:['13:55','09:30','14:50','19:03'],
        answer:0
    },
    {
        question:'Uma sala tem quatro cantos, em cada canto tem um gato, e cada gato vê três gatos. Quantos gatos tem na sala?',
        options:['1 gato','3 gatos','4 gatos','5 gatos'],
        answer:2
    },
    {
        question:'Sabendo que é verdadeira a afirmação “Todos os alunos de Fulano foram aprovados no concurso”, então é necessariamente verdade:',
        options:['Se Roberto não é aluno de Fulano, então ele foi aprovado no concurso','Se Carlos não foi aprovado no concurso, então ele não é aluno de Fulano.','Fulano foi aprovado no concurso.','Fulano não foi aprovado no concurso.'],
        answer:1
    },
    {
        question:'Se tenho quatro cachorros vendo três, ganho mais seis, com quantos fiquei?',
        options:['7 cachorros','8 cachorros','9 cachorros','10 cachorros'],
        answer:3
    },
    {
        question:'O GATO é 12, a FORMIGA é 21, e a ARANHA é 18. Então quanto é o CACHORRO?',
        options:['24','17','10','8'],
        answer:0
    },
    {
        question:'Num carro estavam um avô, dois pais, dois filhos, e um neto. Quantas pessoas tinham no carro?',
        options:['6','5','4','3'],
        answer:3
    },
    {
        question:'Se dois é 10, e quatro é 68, então seis é?',
        options:['36','6','216','222'],
        answer:3
    },


    {
        question: "Qual é o console de videogame lançado pela Sony em 1994 que revolucionou a indústria dos jogos eletrônicos?",
        options: ["Play Station","Super Nitendo","Game Stick","Xbox"],
        answer:0
           
      },
    {
        question: "Qual é o jogo de aventura e exploração lançado em 2011, desenvolvido pela Mojang, no qual os jogadores constroi estruturas com blocos em um mundo tridimensional?",
        options: ["Roblox","Minecraft","Block Craft 3D","Mini Word: Bloco Art"],
        answer:1
           
      },
    {
        question: "Qual é o jogo de tiro em primeira pessoa lançado em 1993, desenvolvido pela id?",
        options: ["Doom","Call of Duty","Battlefield","Counter-Strike"],
        answer:0
           
      },
    {
        question: "Qual é a franquia de jogos de RPG desenvolvida pela Square Enix?",
        options: ["Assassin's Creed","Halo","Final Fantasy","The Legend of Zelda"],
        answer:2
           
      },
    {
        question: "Qual é a empresa responsável pelo desenvolvimento do jogo 'Fortnite'? ",
        options: ["Electronic Arts","Ubisoft","Activision Blizzard","Epic Games"],
        answer:3
           
      },
    {
        question: "Qual é o nome completo do famoso cantor e compositor conhecido como Prince?",
        options: ["Prince Rogers Nelson","Prince James Nelson","Nelson Roger Prince","Anthony Prince Brown"],
        answer:0
           
      },
    {
        question: "Em qual país foi criado o Spotify? ",
        options: ["Suécia","Canadá","Estados Unidos","China"],
        answer:0
           
      },
    {
        question: "Qual é o álbum mais vendido de todos os tempos?",
        options: ["De volta ao Planeta (Jota Quest)","Thriller (Michael Jackson)","Caneta Azul (Manoel Gomes)","News Of The World (Queen)"],
        answer:1
           
      },
    {
        question: "Qual é o nome do cantor brasileiro conhecido como 'O Rei'?",
        options: ["Roberto Carlos ","Caetano Veloso","Chico Buarque","Dinho Ouro Preto"],
        answer:0
           
      },
    {
        question: "Qual é o nome do instrumento musical de cordas mais popular no Japão?",
        options: ["Violão","Xilofone","Shamisen","Banjo"],
        answer:2  
      },
    {
        question: "Qual é o nome do instrumento musical de cordas mais popular no Japão?",
        options: ["Violão","Xilofone","Shamisen","Banjo"],
        answer:2  
      },
    {
        question: "Qual país recebeu a premiação do melhor jogador na Copa do Mundo de 2018? ",
        options: ["Bélgica ","Alemanha","Croácia ","França "],
        answer:2  
      },
    {
        question: "Qual é a defesa mais simples em vôlei? ",
        options: ["Bloqueio","Cut shot","Libero","Flick"],
        answer:0  
      },
    {
        question: "Qual país que sediou os Jogos Olímpicos de Verão de 2020?",
        options: ["Rússia","Japão","Coréia","China"],
        answer:1  
      },
      {
          question: "Qual o esporte praticado por Rayssa Leal?",
          options: ["Natação","Ginástica olímpica","Futebol","Skate"],
          answer:3 
        },
      {
          question: "Quantas Bolas de Ouro tem a jogadora de futebol Marta?",
          options: ["Três","Um","Quatro","Seis"],
          answer:3 
        },
      {
          question: "Qual o esporte praticado por Rayssa Leal?",
          options: ["Natação","Ginástica olímpica","Futebol","Skate"],
          answer:3 
        },
      {
          question: "Qual o nome da atriz que interpretou a personagem Hermione Granger na série de filmes de Harry Potter?",
          options: ["Evanna Lynch","Bonnie Wright","Emma Watson","Natalia Dyer"],
          answer:2 
        },
      {
          question: "Qual é o nome do cineasta, produtor e roteirista conhecido por filmes como: TUBARÃO, JURASSIC PARK e E.T. - O EXTRATERRESTRE?",
          options: ["Steven Spielberg","Stanley Kubrick","Tim Burton","George Lucas"],
          answer:0 
        },
      {
          question: "Qual é o filme de ficção científica dirigido por Christopher Nolan, lançado em 2010, que se passa em um mundo onde a realidade pode ser manipulada através dos sonhos?",
          options: ["Besouro Azul","Passageiros ","A Origem","Batman - O Cavaleiro das Trevas Ressurge"],
          answer:2 
        },
      {
          question: "Em que ano o Titanic afundou no Oceano Atlântico em 15 de abril, em sua viagem inaugural de Southampton?",
          options: ["1909","1912","1915","1921"],
          answer:1
        },
      {
          question: "Qual é o nome da maior empresa de tecnologia da Coréia do Sul?",
          options: ["LG","Samsung","Hyundai","SK Hynix"],
          answer:1
        },
      {
          question: "Qual é a capital de Portugal?",
          options: ["Porto","Coimbra","Lisboa","Braga"],
          answer:2
        },
      {
          question: "Quantas respirações o corpo humano toma diariamente?",
          options: [" 5,000 diariamente","10,000 diariamente","20,000 diariamente ","15,000 diariamente"],
          answer:2 
        },
      {
          question: "Qual é o símbolo químico da prata?",
          options: ["Ag","Pt","Au","Cu"],
          answer:0
        },
      {
          question: "Qual é o menor pássaro do mundo?",
          options: ["Colibri-abelha","Pardal-comum","Beija-flor-tesoura","Andorinha-das-chaminés"],
          answer:0
        },
      {
          question: "Qual é a vida útil de uma libélula?",
          options: ["12 horas","24 horas","48 horas","72 horas"],
          answer:1
        },
      {
          question: "Qual é o nome do inventor do telefone?",
          options: ["Thomas Edison","Alexander Graham Bell","Isaac Newton","Nikola Tesla"],
          answer:1
        },
      {
          question: "Quantos dias tem um ano bissexto?",
          options: ["365 dias","367 dias","366 dias","368 dias"],
          answer:2
        },
      {
          question: "Qual é a cor da caixa-preta do avião?",
          options: ["Laranja","Vermelha","Amarela","Preta"],
          answer:0
        },
      {
          question: "De quem é a famosa frase “Penso, logo existo”?",
          options: ["Platão","Galileu Galilei","Descartes","Sócrates"],
          answer:2
        },
      {
          question: "De onde é a invenção do chuveiro elétrico?",
          options: ["França","Inglaterra","Brasil","Austrália"],
          answer:2
        },
      {
          question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
          options: ["113","109","108","118"],
          answer:3
        },
      {
          question: "Qual o número mínimo de jogadores em cada time numa partida de futebol?",
          options: ["8","7","10","9"],
          answer:1
        },
      {
          question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
          options: ["8 minutos","1 dia","12 segundos","12 minutos"],
          answer:0
        },
      {
          question: "Qual a montanha mais alta do Brasil?",
          options: ["Pico da Neblina","Pico Paraná","Monte Roraima","Pico da Bandeira"],
          answer:0
        },
      {
          question: "Quem é o autor de “O Pequeno Príncipe”?",
          options: ["Maquiavel","Antoine de Saint-Exupéry","Montesquieu","Thomas Hobbes"],
          answer:1
        },
      {
          question: "Qual destes países é transcontinental?",
          options: ["Rússia","Filipinas","Groenlândia","Tanzânia"],
          answer:0
        },
      {
          question: "Quais os principais heterônimos de Fernando Pessoa?",
          options: ["Bento Teixeira, Ricardo Reis e Augusto de Campos"," Bento Teixeira, Ricardo Reis e Haroldo de Campos","Alberto Caeiro, Ricardo Reis e Álvaro de Campos","Ariano Suassuna, Raul Bopp e Quincas Borba"],
          answer:2
        },
      {
          question: "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",
          options: ["Neil Armstrong, em 1969.","Charles Duke, em 1971","Charles Conrad, em 1969","Yuri Gagarin, em 1961"],
          answer:0
        },
        /* entretenimento */
      
    ]