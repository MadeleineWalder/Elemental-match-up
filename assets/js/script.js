/* Variables */
let userChoice;
let compChoice;
let userScore = 0;
let computerScore = 0;

/**
 * Adds event listener to buttons
 */
function initializeGame() {
    result = "";
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", initializeIcon);
    }
}

/**
 * Assigns value to userChoice based on button clicked
 * Random picks and assigns a value to compChoice
 */
function initializeIcon(event) {
    userChoice = (event.target.getAttribute("data-type"));
    document.getElementById("user-choice").innerText = userChoice;
    compChoice = Math.floor(Math.random() * 5);
        switch (compChoice) {
            case 0: compChoice = "ice";
            break;
            case 1: compChoice = "ground";
            break;
            case 2: compChoice = "fire";
            break;
            case 3: compChoice = "grass";
            break;
            case 4: compChoice = "rock";
            break;
        }
    document.getElementById("comp-choice").innerText = compChoice;
    let resultString = compareChoice();
    displayResult(resultString);
}

/**
 * Checks for a draw
 * Returns the appropriate result string
 */
function compareChoice() {
    if (userChoice === compChoice) {
        return "The computer chose the same answer, it's a draw!";
    } else if (isUserWinner(userChoice, compChoice)) {
        return "You win!";
    } else {
        return "You loose!";
    }
}

/**
 * Checks if user meets the win conditions
 */   
function isUserWinner(userChoice, computerChoice) {
    let winOptions = USER_WIN_CONDITIONS[userChoice];
    return winOptions.includes(computerChoice);
}

/**
 * Displays the result string to the user
 */
function displayResult(result) {
    document.getElementById("result").innerHTML = result;
    checkScore();
}

/**
 * Determines if the user score or computer score should increase
 * and if so increases that score by 1
 */
function checkScore() {
    if (document.getElementById("result").innerHTML === "You win!") {
        userScore ++;
        document.getElementById("user-score").textContent = userScore;
    } else if (document.getElementById("result").innerHTML === "You loose!") {
        computerScore ++;
        document.getElementById("computer-score").textContent = computerScore;
    }
}

/* Sets the user win conditions */
let USER_WIN_CONDITIONS = {
    'ice' : ['ground', 'grass'],
    "ground": ["fire", "rock"], // Why did he write second one in "" and the first in '' ? Hopefully there's no difference.
    "fire": ["grass", "ice"],
    "grass": ["ground", "rock"],
    "rock": ["ice", "fire"]
};

/* Starts game when page content is loaded */
document.addEventListener("DOMContentLoaded", initializeGame);