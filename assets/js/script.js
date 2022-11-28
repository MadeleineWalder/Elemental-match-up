let userChoice;
let compChoice;

/**
 * Waits for Dom content to finish loading before game can run.
 * Adds event listeners to the buttons and has the computer pick 
 * an answer randomly when a button is pressed.
 */
document.addEventListener("DOMContentLoaded", function() {
    result = "";
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            userChoice = (this.getAttribute("data-type"));
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
        });
    }
});


/**
 * Displays the returned result message to the user.
 */
function displayResult(result) {
    console.log(result);
    document.getElementById("result").innerHTML = result;
    checkScore();
}

/**
 * Compares the users choice and the computers choice to see who wins or if it is a draw
 * and the returns an answer. 
 */
function compareChoice() {
    console.log(compChoice);
    console.log(userChoice);
    if (userChoice === compChoice) {
        return "The computer chose the same answer, it's a draw!";
    } else if (userChoice === "ice") {
        if (compChoice === "ground") {
            return "You win!";
        } else if (compChoice === "fire") {
            return "You loose!";
        } else if (compChoice === "grass") {
            return "You win!";
        } else {
            return "You loose!";
        }
    } else if (userChoice === "ground") {
        if (compChoice === "fire") {
            return "You win!";
        } else if (compChoice === "grass") {
            return "You loose!";
        } else if (compChoice === "rock") {
            return "You win!";
        } else {
            return "You loose!";
        }
    } else if (userChoice === "fire") {
        if (compChoice === "grass") {
            return "You win!";
        } else if (compChoice === "rock") {
            return "You loose!";
        } else if (compChoice === "ice") {
            return "You win!";
        } else {
            return "You loose!";
        }
    } else if (userChoice === "grass") {
        if (compChoice === "rock") {
            return "You win!";
        } else if (compChoice === "ice") {
            return "You loose!";
        } else if (compChoice === "ground") {
            return "You win!";
        } else {
            return "You loose!";
        }
    } else if (userChoice === "rock") {
        if (compChoice === "ice") {
            return "You win!";
        } else if (compChoice === "ground") {
            return "You loose!";
        } else if (compChoice === "fire") {
            return "You win!";
        } else {
            return "You loose!";
        }
    }
}

let userScore = 0;
let computerScore = 0;

/**
 * Function to determine if user score or computer score should increase
 * and if so then increase that score by 1.
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