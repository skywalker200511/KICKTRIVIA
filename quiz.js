let score = 0;
let index = 0;
let correct_answer = 0;
const allQuestions = [
  {
    question: "Who won the FIFA World Cup in 2018?",
    options: ["Germany", "France", "Brazil", "Argentina"],
    answer: "France"
  },
  {
    question: "Which player has won the most Ballon d'Or awards?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Zinedine Zidane", "Ronaldinho"],
    answer: "Lionel Messi"
  },
  {
    question: "Which country has won the most World Cups?",
    options: ["Brazil", "Germany", "Italy", "Argentina"],
    answer: "Brazil"
  },
  {
    question: "Which club has won the most UEFA Champions League titles?",
    options: ["AC Milan", "Barcelona", "Real Madrid", "Liverpool"],
    answer: "Real Madrid"
  },
  {
    question: "Who scored the 'Hand of God' goal?",
    options: ["Diego Maradona", "Pele", "Zidane", "Messi"],
    answer: "Diego Maradona"
  },
  {
    question: "Which team won Euro 2016?",
    options: ["France", "Portugal", "Germany", "Spain"],
    answer: "Portugal"
  },
  {
    question: "Which English club is known as the Red Devils?",
    options: ["Arsenal", "Liverpool", "Manchester City", "Manchester United"],
    answer: "Manchester United"
  },
  {
    question: "Who is the all-time top scorer in the Premier League?",
    options: ["Alan Shearer", "Harry Kane", "Wayne Rooney", "Thierry Henry"],
    answer: "Alan Shearer"
  },
  {
    question: "Which country hosted the 2014 FIFA World Cup?",
    options: ["Brazil", "Germany", "South Africa", "Russia"],
    answer: "Brazil"
  },
  {
    question: "What is the nickname of the Italian national team?",
    options: ["Azzurri", "Les Bleus", "La Roja", "Die Mannschaft"],
    answer: "Azzurri"
  },
  {
    question: "Who won the Golden Boot at the 2018 World Cup?",
    options: ["Mbappé", "Kane", "Ronaldo", "Griezmann"],
    answer: "Kane"
  },
  {
    question: "Which club plays at Anfield?",
    options: ["Liverpool", "Chelsea", "Everton", "Arsenal"],
    answer: "Liverpool"
  },
  {
    question: "What is Lionel Messi’s nationality?",
    options: ["Brazilian", "Spanish", "Argentinian", "Portuguese"],
    answer: "Argentinian"
  },
  {
    question: "Which year did Cristiano Ronaldo win his first Ballon d'Or?",
    options: ["2006", "2008", "2010", "2012"],
    answer: "2008"
  },
  {
    question: "Who is known as the 'Egyptian King'?",
    options: ["Mahrez", "Salah", "Ziyech", "Elneny"],
    answer: "Salah"
  },
  {
    question: "Which team has the nickname 'The Gunners'?",
    options: ["Arsenal", "Chelsea", "Tottenham", "Leeds"],
    answer: "Arsenal"
  },
  {
    question: "Which country won the first FIFA World Cup in 1930?",
    options: ["Brazil", "Uruguay", "Argentina", "Italy"],
    answer: "Uruguay"
  },
  {
    question: "Who is the current manager of Manchester City (as of 2024)?",
    options: ["Pep Guardiola", "Jurgen Klopp", "Ancelotti", "Arteta"],
    answer: "Pep Guardiola"
  },
  {
    question: "Which club does Erling Haaland play for (as of 2024)?",
    options: ["Manchester United", "Manchester City", "Bayern Munich", "PSG"],
    answer: "Manchester City"
  },
  {
    question: "Who won the UEFA Champions League in 2023?",
    options: ["Manchester City", "Real Madrid", "Inter Milan", "Liverpool"],
    answer: "Manchester City"
  },
  {
    question: "What country is Luka Modric from?",
    options: ["Croatia", "Serbia", "Slovenia", "Bosnia"],
    answer: "Croatia"
  },
  {
    question: "Which country hosted the 2022 FIFA World Cup?",
    options: ["Qatar", "Russia", "USA", "Japan"],
    answer: "Qatar"
  },
  {
    question: "Which team wears blue and is based in London?",
    options: ["Chelsea", "Manchester City", "Arsenal", "Tottenham"],
    answer: "Chelsea"
  },
  {
    question: "Who is the all-time top scorer in World Cup history?",
    options: ["Miroslav Klose", "Gerd Muller", "Messi", "Pele"],
    answer: "Miroslav Klose"
  },
  {
    question: "What number does Messi usually wear?",
    options: ["10", "7", "11", "8"],
    answer: "10"
  },
  {
    question: "Which team won the 2006 FIFA World Cup?",
    options: ["Italy", "France", "Germany", "Brazil"],
    answer: "Italy"
  },
  {
    question: "Who was the captain of Spain during their 2010 World Cup win?",
    options: ["Sergio Ramos", "Iniesta", "Xavi", "Iker Casillas"],
    answer: "Iker Casillas"
  },
  {
    question: "Which African country reached the World Cup semi-final in 2022?",
    options: ["Nigeria", "Morocco", "Senegal", "Ghana"],
    answer: "Morocco"
  },
  {
    question: "Which club is nicknamed 'The Blues'?",
    options: ["Chelsea", "Manchester City", "Everton", "Leicester City"],
    answer: "Chelsea"
  },
  {
    question: "Which football legend was known as 'O Fenômeno'?",
    options: ["Ronaldinho", "Ronaldo Nazário", "Romário", "Kaka"],
    answer: "Ronaldo Nazário"
  },
  {
    question: "Which country has appeared in three World Cup finals but never won?",
    options: ["Netherlands", "Hungary", "Czechoslovakia", "Sweden"],
    answer: "Netherlands"
  },
  {
    question: "Who is the only goalkeeper to have won the Ballon d'Or?",
    options: ["Gianluigi Buffon", "Manuel Neuer", "Lev Yashin", "Iker Casillas"],
    answer: "Lev Yashin"
  },
  {
    question: "Which club has won the most UEFA Europa League titles?",
    options: ["Liverpool", "Inter Milan", "Sevilla", "Juventus"],
    answer: "Sevilla"
  },
  {
    question: "Who scored the fastest goal in Premier League history?",
    options: ["Shane Long", "Alan Shearer", "Christian Eriksen", "Dwight Yorke"],
    answer: "Shane Long"
  },
  {
    question: "Which African country was the first to reach a World Cup quarter-final?",
    options: ["Cameroon", "Senegal", "Ghana", "Nigeria"],
    answer: "Cameroon"
  },
  {
    question: "Who was the youngest player to play in a World Cup?",
    options: ["Pelé", "Norman Whiteside", "Kylian Mbappé", "Samuel Eto'o"],
    answer: "Norman Whiteside"
  },
  {
    question: "Which club has the most Champions League semi-final appearances?",
    options: ["Bayern Munich", "Real Madrid", "Barcelona", "AC Milan"],
    answer: "Real Madrid"
  },
  {
    question: "Who scored the 'Hand of God' goal?",
    options: ["Maradona", "Messi", "Zidane", "Ronaldinho"],
    answer: "Maradona"
  },
  {
    question: "Which nation won the European Championship in 1992 despite not qualifying originally?",
    options: ["Denmark", "Sweden", "Czech Republic", "Greece"],
    answer: "Denmark"
  },
  {
    question: "Which player has won the most UEFA Champions League titles?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Francisco Gento", "Xavi"],
    answer: "Francisco Gento"
  },
  {
    question: "Which English club was the first to win the European Cup?",
    options: ["Liverpool", "Manchester United", "Nottingham Forest", "Chelsea"],
    answer: "Manchester United"
  },
  {
    question: "Who was the top scorer in the 2014 FIFA World Cup?",
    options: ["James Rodríguez", "Neymar", "Thomas Müller", "Lionel Messi"],
    answer: "James Rodríguez"
  },
  {
    question: "Which country hosted the first ever FIFA World Cup?",
    options: ["Brazil", "Italy", "Uruguay", "France"],
    answer: "Uruguay"
  },
  {
    question: "Who has the most red cards in football history?",
    options: ["Sergio Ramos", "Gerardo Bedoya", "Vinnie Jones", "Roy Keane"],
    answer: "Gerardo Bedoya"
  },
  {
    question: "Which club has the most La Liga titles?",
    options: ["Barcelona", "Real Madrid", "Atletico Madrid", "Valencia"],
    answer: "Real Madrid"
  },
  {
    question: "Who scored the most goals in a single World Cup tournament?",
    options: ["Just Fontaine", "Ronaldo", "Gerd Müller", "Klose"],
    answer: "Just Fontaine"
  },
  {
    question: "Which country has the most Copa América titles?",
    options: ["Argentina", "Uruguay", "Brazil", "Chile"],
    answer: "Uruguay"
  },
  {
    question: "Who is the all-time top scorer in Serie A?",
    options: ["Silvio Piola", "Francesco Totti", "Gunnar Nordahl", "Roberto Baggio"],
    answer: "Silvio Piola"
  },
  {
    question: "Which club has never been relegated from the Premier League since its inception?",
    options: ["Arsenal", "Liverpool", "Manchester United", "Chelsea"],
    answer: "Arsenal"
  },
  {
    question: "Who was the first footballer to win the Ballon d'Or five times?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
    answer: "Lionel Messi"
  }
];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let questions = [...allQuestions];  
shuffle(questions);                
questions = questions.slice(0, 10);


function loadQuestion()
{
    const current = questions[index];
    document.getElementById("question").innerText = current.question;
    current.options.forEach((opt,i)=>{
        document.getElementById(`option${i}`).innerText = opt;
    });
    correctAnswer = current.answer;
}

    function checkAnswer(selectedIndex) {
  const selectedButton = document.getElementById(`option${selectedIndex}`);
  const selectedText = selectedButton.innerText;

  
  if (selectedText === correctAnswer) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");

    
    for (let i = 0; i < 4; i++) {
      if (document.getElementById(`option${i}`).innerText === correctAnswer) {
        document.getElementById(`option${i}`).classList.add("correct");
        break;
      }
    }
  }

  
  for (let i = 0; i < 4; i++) {
    document.getElementById(`option${i}`).disabled = true;
  }

 
  setTimeout(() => {
    
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`option${i}`);
      btn.classList.remove("correct", "wrong");
      btn.disabled = false;
    }

    index++;

    if (index < questions.length) {
      loadQuestion();
    } else {
      localStorage.setItem("score", score);
      window.location.href = "result.html";
      localStorage.setItem("totalQuestions", questions.length);
    }
  }, 1000);
}
window.onload = loadQuestion;