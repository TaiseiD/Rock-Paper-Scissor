# 🎮 Rock Paper Scissors Game

## 📖 Description
This project is a simple Rock Paper Scissors game built with HTML, CSS, and JavaScript.  
The player selects between Rock, Paper, or Scissors, and the computer randomly picks its own choice.  
The game then determines the winner based on standard rules.

---

## ⚙️ How It Works

```js
const playerChoices = document.querySelectorAll(".choice2");
const opponentImg = document.getElementById("opponent");

const choiceMap = { rock: 0, paper: 1, scissor: 2 };

const imgMap = {
  rock: "../../assets/images/rock.png",
  paper: "../../assets/images/paper.png",
  scissor: "../../assets/images/scissor.png"
};

playerChoices.forEach(choice => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.id; 
    const playerNum = choiceMap[playerChoice];

    const opponentNum = Math.floor(Math.random() * 3);
    const opponentChoice = Object.keys(choiceMap)[opponentNum];
    opponentImg.src = imgMap[opponentChoice];

    if (playerNum === opponentNum) {
      alert("DRAW! You both chose " + opponentChoice);
    } else if ((playerNum - opponentNum + 3) % 3 === 1) {
      alert("YOU WIN! Opponent chose " + opponentChoice);
    } else {
      alert("YOU LOSE! Opponent chose " + opponentChoice);
    }
  });
});
