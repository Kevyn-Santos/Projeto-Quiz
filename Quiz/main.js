/* aqui eu puxo os elementos de index.html e dou a eles nomes, nomes esses que vão ser usados no resto do codigo */
const QuestionNumber = document.querySelector('.question-number');
const QuestionText = document.querySelector('.question-text');
const optionContainer = document.querySelector('.option-container');
const HomeBox = document.querySelector(".Home-box");
const QuizBox= document.querySelector(".Quiz-box");
const ResultBox = document.querySelector(".result-box");
const Timer = document.querySelector(".timer");




/* variaveis que vao ser usadas */
const questionLimit = 7; /* questionLimit = quiz.length se quiser todas as questoes (principal limitador Ln127)*/
let QuestionCounter = 0;
let CurrentQuestion;
let AvaliableQuestions = [];
let AvaliableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let count = 30;



/* Põe as questoes dentro de Avaliable Questions */
function SetAvaliableQuestions(){
    const TotalQuestions = quiz.length;
    for (let i=0; i<TotalQuestions; i++){
        AvaliableQuestions.push(quiz[i]);
    }
}

/* Esta função vai selecionar as perguntas e vai ficar responsavel por colocar todas as informações na tela (numero da questao, texto e opçoes) */
function GetNewQuestion(){
   //QuestionNumber.innerHTML = "Questão " + (QuestionCounter+1) + " / " + questionLimit; /* Esta parte mostra o numero da questao(Questao 1/5. etc) */
  /* const QuestionIndex = Math.floor(Math.random() * AvaliableQuestions.length);
CurrentQuestion = AvaliableQuestions.splice(QuestionIndex, 1)[0];*/

if (QuestionCounter >= questionLimit) {
    // Se atingiu o limite de perguntas, chame a função de encerramento do quiz
    quizOver();
} else {
    QuestionNumber.innerHTML = "Questão " + (QuestionCounter + 1) + " / " + questionLimit;

    // Seleciona uma nova pergunta aleatória
    const QuestionIndex = Math.floor(Math.random() * AvaliableQuestions.length);
    CurrentQuestion = AvaliableQuestions.splice(QuestionIndex, 1)[0];
    QuestionText.innerHTML = CurrentQuestion.question;
}

  const optionLen= CurrentQuestion.options.length;
  for(let i=0; i<optionLen; i++){
    AvaliableOptions.push(i)
  } 
    optionContainer.innerHTML = ''; 
    let animationDelay = 0.2;
  /* este pedaço cria e mostra as opçoes na tela, ele cria uma div, seleciona as opçoes na posição i que estao dentro de currentQuestion e então joga elas num elemento filho chamado option, que é o mesmo que cria a div */
  for(let i=0; i<optionLen; i++){

    /* este pedaço aleatoriza as opçoes, caso isso queira ser tirado basta remover as proximas tres linhas e substituir o optionindex em option.inner e option.id por i  */
    const optionindex = AvaliableOptions[Math.floor(Math.random() * AvaliableOptions.length)];
    index2 = AvaliableOptions.indexOf(optionindex);
    AvaliableOptions.splice(index2,1);

    const option = document.createElement("div");
    option.innerHTML = CurrentQuestion.options[optionindex];
    option.id = optionindex;
    option.style.animationDelay = animationDelay + 's';/* responsavel pela animação, o 's' converte o tempo em segundos*/
    animationDelay = animationDelay + 0.2; /* adiciona mais 0.2 segundos para o animationdelay */
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");/* quando clicado chamara a função getResult */
  }
    
    /* chama a função do timer toda vez que uma questão nova é chamada */
    Timer.classList.remove("over");
    Timer.classList.remove("running");
    TimerCountdown(47);/* define o tempodo timer, como ele demora um pouco pra carregar coloquei um tempo maior, pois assim ele ja aparece com 30 */
    
    QuestionCounter++
    console.log(CurrentQuestion);
    console.log(optionLen);

}
console.log(AvaliableQuestions);

/* registra que voce clicou em uma opção */
function getResult(Element){
    /* esse bloco verifica se a questao esta correta comparando o que foi clicado com o valor de id, esse é a resposta da questão, que é um valoir do array answers em questions.js */
    const id = parseInt(Element.id);/* element é so um nome pra atribuir um valor a id, parseInt lê o numero inteiro do elemento */
    if(id === CurrentQuestion.answer){
        Element.classList.add("Correct");
        correctAnswers++;
    }/* Ambos criam uma classe nas questoes corretas e incorretas indicando que elas são corretas ou incorretas. com isso é possivel estilizar a classe pra essas condiçoes */
    else{
       Element.classList.add("Incorrect");
    }
    /* um adendo, essa função modifica em options */
    attempt++;
    clearInterval(Interval);/* quando getResult for chamado o tempo parara*/
    unclickableOptions();
}

function unclickableOptions(){/* esta função faz com que todas as questoes sejam inclicaveis uma vez que alguma ja foi selecionada */

    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
        optionContainer.children[i].classList.add("already-aswered");
    }
}


function quizOver(){/* essa função esconde o quiz e mostra a tabela de resultados*/

    QuizBox.classList.add("hide");
    ResultBox.classList.remove("hide");
    quizResult();
}

function quizResult(){ /* aqui é o processamento para mostrar os resultados na tabela de resultados */

    ResultBox.querySelector(".total-question").innerHTML = questionLimit;/* total de questoes = tamanho do quiz */
    ResultBox.querySelector(".total-correct").innerHTML = correctAnswers; /* questoes corretas = correctanswers */
    ResultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers; /* deve ser possivel substituir isso por incorrectAnswers */
    const percentage = (correctAnswers/questionLimit)*100; /* calculo da porcentagem de acertos */
    ResultBox.querySelector(".total-percentage").innerHTML = percentage.toFixed() +"%";/* porcentagem de acertos "formatada " para porcentagem */
    ResultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit; /* pontuação total questoes corretas pelo tamanho do quiz */
    ResultBox.querySelector(".total-attempt").innerHTML = attempt;
}

function resetQuiz(){
    QuestionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    AvaliableQuestions = [];
}



function backStart(){
    ResultBox.classList.add("hide");
    HomeBox.classList.remove("hide");
    resetQuiz();
}

function next(){/* chama as funçoes para finalizar o quiz ou mostrar nova questão */

    if(QuestionCounter === questionLimit){/* aqui é o principal limitador, pois o quiz acaba assim que o contador de questoes se torna igual ao limite */
       quizOver();
    }
    else{
        GetNewQuestion();
    }
}

    function TimerCountdown(count){/* esse pedaço do codigo controla o timer, ele conta em milisegundos, portanto pega o horario atual mais o contador e multiplica por mil milisegundos. */
        currentTime = new Date().getTime() + count * 1000;
        Interval = setInterval(UpdateTimer, 1000);/* Setinterval é usado para calcular um espaço de tempo, pra issi chama a função UpdateTimer a cada 1000 milisegundos*/

        function UpdateTimer(){

            distance =  currentTime - new Date().getTime();/* calcula a diferença entre o tempo de agora e o tempo de currentTime */

            secs = Math.floor( distance / 1000);/* calcula os segundos usando a diferenca do agora para o currentTime */

            Timer.innerHTML = secs;/* Aqui mostra em timer o valor de segundos */

            if(secs <=0){/* se os segundos forem menores ou iguaus a zer, a função unclickableOptions é chamada, o contador é parado, e é mostrado o texto "o tempo acabou" */
                clearInterval(Interval);
                unclickableOptions();
                Timer.innerHTML = "Acabou!";
                Timer.classList.add("over");
            }else if(secs>=0 && secs<=10){
                Timer.classList.add("running");
            }

        }

    }

function startQuiz(){/* este pedaço carrega as funçoes especificadas para iniciar o quiz*/ /* o maior plot twist dos animes */
    HomeBox.classList.add("hide");
    QuizBox.classList.remove("hide");
    SetAvaliableQuestions();
    GetNewQuestion();
}

window.onload = function(){
    HomeBox.querySelector(".total-question").innerHTML = questionLimit;
}
/* existe a possibilidade de marcas as questoes certas em verde, as erradas em vermelho, e de mostrar a certa quando a errada for selecionada. caso se queira adicinar essas coisas ver o fim do video 3 */
/* uma opção interessante é, ao inves de mostrar as respostas corretas apenas indicar num indicador de respostas no fundo da pagina. essa opçaõ pode ser melho visto que pode passar desapercebida. */
/* talvez adicionar a quantidade de tentativas pra ver quantas pessoas tentaram o quiz */
/* declarar incorrectAnswers ao inves de attempt para totalWrong */
