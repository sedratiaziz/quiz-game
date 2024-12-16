const data = {
  tech: {
    easy: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTransfer Machine Language",
        ],
        answer: "HyperText Markup Language",
      },
      {
        question: "Which company created the iPhone?",
        options: ["Apple", "Microsoft", "Google"],
        answer: "Apple",
      },
    ],
    medium: [
      {
        question: "Who is known as the father of computer science?",
        options: ["Alan Turing", "Bill Gates", "Charles Babbage"],
        answer: "Alan Turing",
      },
      {
        question:
          "What is the main programming language used for Android development?",
        options: ["Java", "Swift", "C#"],
        answer: "Java",
      },
    ],
    hard: [
      {
        question: "What does the 'git' command `rebase` do?",
        options: [
          "Combines commits",
          "Changes base commits",
          "Deletes branches",
        ],
        answer: "Changes base commits",
      },
      {
        question: "In computer networks, what does TCP stand for?",
        options: [
          "Transfer Control Protocol",
          "Transmission Control Protocol",
          "Telecommunication Protocol",
        ],
        answer: "Transmission Control Protocol",
      },
    ],
  },
  geography: {
    easy: [
      {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which continent is the Sahara Desert in?",
        options: ["Asia", "Africa", "Australia"],
        answer: "Africa",
      },
    ],
    medium: [
      {
        question: "Which country has the most natural lakes?",
        options: ["Canada", "Russia", "Brazil"],
        answer: "Canada",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze"],
        answer: "Nile",
      },
    ],
    hard: [
      {
        question: "What is the name of the mountain range in South America?",
        options: ["Rocky Mountains", "Andes", "Himalayas"],
        answer: "Andes",
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Bahrain"],
        answer: "Vatican City",
      },
    ],
  },
  science: {
    easy: [
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2"],
        answer: "H2O",
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars",
      },
    ],
    medium: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome"],
        answer: "Mitochondria",
      },
      {
        question: "What element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen",
      },
    ],
    hard: [
      {
        question: "What is the second law of thermodynamics?",
        options: [
          "Energy cannot be created or destroyed",
          "Entropy of a system always increases",
          "Every action has an equal and opposite reaction",
        ],
        answer: "Entropy of a system always increases",
      },
      {
        question: "What is the term for the splitting of an atomic nucleus?",
        options: ["Fusion", "Fission", "Radioactivity"],
        answer: "Fission",
      },
    ],
  },
};

/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
let score;
let message;
let correctChoice;
let currentCategory; 
let currentDifficulty;
let currentQuestionIndex;


/*----- Cached Element References  -----*/

const questions = document.querySelectorAll(".question");
const choices = document.querySelectorAll(".btn");
const cardTitles = document.querySelectorAll(".card-title");

/*-------------- Functions -------------*/
const init = () => {
  score = 0;
  message = "";
  correctChoice = 10;
  currentQuestionIndex = 0;
};
init();

const renderQuestions = () => {
  
  //Geology Questions
  if (window.location.href.includes("geo_easy")) {

      questions.forEach((question, index) => {
        question.textContent = data.geography.easy[index].question;
  

        const choices = data.geography.easy[index].options;
        cardTitles.forEach((title, choiceIndex) => {
        title.textContent = choices[choiceIndex];
  
      });
    });

    currentCategory = "geography"; 
    currentDifficulty = "easy";


  } else if (window.location.href.includes("geo_mid")) {
    
    questions.forEach((question, index) => {
      question.textContent = data.geography.medium[index].question;


      const choices = data.geography.medium[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
  });

    currentCategory = "geography"; 
    currentDifficulty = "medium";


  } else if (window.location.href.includes("geo_hard")) {
    questions.forEach((question, index) => {
      question.textContent = data.geography.hard[index].question;


      const choices = data.geography.hard[index].options;
      cardTitles.forEach((title, choiceIndex) => {
      title.textContent = choices[choiceIndex];

    });
  });

    currentCategory = "geography"; 
    currentDifficulty = "hard";

  }
};
renderQuestions();


const checkCorrectChoice = (event) => {
  const playerChoice = event.target.closest(".card-body").querySelector(".card-title").textContent; 
  const questionText = document.querySelector(".question").textContent; 
  const correctChoice = data[currentCategory][currentDifficulty].find(q => q.question === questionText).answer;
  
  if (playerChoice === correctChoice && window.location.href.includes("geo_easy")) {
    score += 1;
    alert("Correct! \n\n +1 Point");         

  } else if (playerChoice === correctChoice && window.location.href.includes("geo_mid")) {
    score += 3;
    alert("Correct! \n\n +3 Point");         

  } else if (playerChoice === correctChoice && window.location.href.includes("geo_hard")) {
    score += 5;
    alert("Correct! \n\n +5 Point");         
    
  } else {
    alert("Incorrect :(");         
  }
  
  currentQuestionIndex++;

};


const updateQuestions = ()=>{

    const numOfQuestions = data[currentCategory][currentDifficulty].length;
    if (currentQuestionIndex >= numOfQuestions) {    
      stopQuestions();
      return;
    }


    const currentQuestion = data[currentCategory][currentDifficulty][currentQuestionIndex];
    questions.forEach((question)=>{
      question.textContent = data[currentCategory][currentDifficulty][currentQuestionIndex].question
    })

    cardTitles.forEach((cardTitle, index) => {
      cardTitle.textContent = currentQuestion.options[index];
    });


}

const stopQuestions = ()=>{
  alert('quiz ended!')

  localStorage.setItem('quiz_score', score)
  localStorage.setItem('diff', currentDifficulty)

  window.location.href = `${window.location.origin}/assets/stats.html`  
}

/*----------- Event Listeners ----------*/
const handlePlayerChoice = (event) => {
  checkCorrectChoice(event);
  updateQuestions();
};

choices.forEach((element) => {
  element.addEventListener("click", handlePlayerChoice);
});
