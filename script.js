const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);

        // Update the UI
        playerChoiceDisplay.textContent = `Your Choice: ${capitalize(playerChoice)}`;
        computerChoiceDisplay.textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
        winnerDisplay.textContent = `Winner: ${winner}`;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a Tie!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    }
    return "Computer Wins!";
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
