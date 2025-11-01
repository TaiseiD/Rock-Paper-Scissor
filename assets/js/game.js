const player = document.querySelectorAll(".choice2");
const opponent = document.getElementById("opponent");

const choices = { rock: 0, paper: 1, scissor: 2 };

const images = {
  rock: "../../assets/images/rock.png",
  paper: "../../assets/images/paper.png",
  scissor: "../../assets/images/scissors.png"
};

player.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.id; 
    const playerPick = choices[playerChoice];

    const opponentPick = Math.floor(Math.random() * 3);
    const opponentChoice = Object.keys(choices)[opponentPick];
    opponent.src = images[opponentChoice];

    if (playerPick === opponentPick) {
      alert("DRAW! You both chose " + opponentChoice);
    } else if ((playerPick - opponentPick + 3) % 3 === 1) {
      alert("YOU WIN! Opponent chose " + opponentChoice);
    } else {
      alert("YOU LOSE! Opponent chose " + opponentChoice);
    }
  });
});