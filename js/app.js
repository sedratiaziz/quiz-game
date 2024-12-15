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
        answer: 0,
      },
      {
        question: "Which company created the iPhone?",
        options: ["Apple", "Microsoft", "Google"],
        answer: 0,
      },
    ],
    medium: [
      {
        question: "Who is known as the father of computer science?",
        options: ["Alan Turing", "Bill Gates", "Charles Babbage"],
        answer: 0,
      },
      {
        question:
          "What is the main programming language used for Android development?",
        options: ["Java", "Swift", "C#"],
        answer: 0,
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
        answer: 1,
      },
      {
        question: "In computer networks, what does TCP stand for?",
        options: [
          "Transfer Control Protocol",
          "Transmission Control Protocol",
          "Telecommunication Protocol",
        ],
        answer: 1,
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
        answer: 1,
      },
      {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: 0,
      },
    ],
    medium: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome"],
        answer: 1,
      },
      {
        question: "What element has the atomic number 1?",
        options: ["Hydrogen", "Helium", "Carbon"],
        answer: 0,
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
        answer: 1,
      },
      {
        question: "What is the term for the splitting of an atomic nucleus?",
        options: ["Fusion", "Fission", "Radioactivity"],
        answer: 1,
      },
    ],
  },
};

// Example usage:

/*-------------- Constants -------------*/

/*---------- Variables (state) ---------*/
let score;
let message;
let correctChoice;

/*----- Cached Element References  -----*/

const questions = document.querySelectorAll(".question");
const choices = document.querySelectorAll(".btn");
const cardTitles = document.querySelectorAll(".card-title");

/*-------------- Functions -------------*/
const init = () => {
  score = 0;
  message = "";
  correctChoice = 10;
};
init();



for (let i = 0; i < data.geography.easy.length; i++) {
  
  questions.forEach((question, index) => {
    question.textContent = data.geography.easy[index].question;
  });

  cardTitles.forEach((title, index) => {
    title.textContent = data.geography.easy[i].options[index];
  });
}

// console.log(data.geography.easy.length)

// const renderQuestions = () => {

//     if (window.location.href === "http://127.0.0.1:5500/assets/categs/geo/easy/geo_easy.html") {
//       for(let i =0; i< data.geography.easy.length; i++){

//       }
//     }

// };

// const render = ()=>{
//   renderQuestions();
// }
/*----------- Event Listeners ----------*/
// const handlePlayerChoice = () => {
//   render();

// };

// choices.forEach((element) => {
//   element.addEventListener("click", () => {
//     question.textContent = "Message Displayed !";

//     if (element.classList.contains("btn")) {
//       console.log("choice is clicked!");
//     }
//   });
// });

//Show the questions and their options based on the href of the page
