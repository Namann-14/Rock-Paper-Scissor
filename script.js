const choices = document.querySelectorAll(".choice");
let userWin;
let heading = document.querySelector("#winMsg");
let computerScore = 0;
let personScore = 0;
let playBtn = document.querySelector("#playButton");
let userChoice = "";
let options = document.querySelectorAll("img");

function updateScore(userWin) {
  if (userWin) {
    personScore++;
    document.querySelector("#playerScore").innerText = personScore;
  } else {
    computerScore++;
    document.querySelector("#computerScore").innerText = computerScore;
  }
}

const genChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const showWinner = (userWin, computerChoice, userChoice) => {
  if (userWin) {
    heading.firstElementChild.innerText = `Congratulations, you won! The computer chose ${computerChoice}.`;
  } else {
    heading.firstElementChild.innerText = `Unfortunately, you lost. The computer chose ${computerChoice}.`;
  }
};

const showDraw = () => {
  heading.firstElementChild.innerText = "The game is a draw.";
};

const playGame = (userChoice) => {
  const computerChoice = genChoice();
  if (userChoice === computerChoice) {
    showDraw();
  } else {
    userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else {
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin, computerChoice, userChoice);
    updateScore(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");

    choices.forEach((element) => {
      if (element.getAttribute("id") === userChoice) {
        element.firstElementChild.style.border = "2px solid black";
      } else {
        element.firstElementChild.style.border = "";
      }
    });
  });
});

playBtn.addEventListener("click", () => {
  if (userChoice) {
    playGame(userChoice);
  } else {
    heading.firstElementChild.innerText =
      "Please select an option before playing.";
  }
});
