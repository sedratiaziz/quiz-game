/*-------------- Constants -------------*/

const categs = [
  {
    categ: "hard",
    points: 5,
  },
  {
    categ: "medium",
    points: 3,
  },
  {
    categ: "easy",
    points: 1,
  },
];

/*---------- Variables (state) ---------*/
let score;
let message;
let correctChoice;

/*----- Cached Element References  -----*/
const question = document.querySelector(".questionGeoEasy");
const choices = document.querySelectorAll(".btn");
/*-------------- Functions -------------*/
const init = () => {
  score = 0;
  message = "";
  correctChoice = 10;
};
init();

/*----------- Event Listeners ----------*/
const handlePlayerChoice = () => {
  render();
};

choices.forEach((element) => {
  element.addEventListener("click", () => {
    question.textContent = "Message Displayed !";

    if (element.classList.contains("btn")) {
      console.log("choice is clicked!");
    }
  });
});
