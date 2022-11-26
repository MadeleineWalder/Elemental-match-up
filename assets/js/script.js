// Wait for DOM to finish loading before game can start
// Add event listeners to the buttons

let userChoice;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            userChoice = (this.getAttribute("data-type"))
            let compChoice = Math.floor(Math.random() * 5);
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
            compare(compChoice);
        })
    }
})

/**
 * Takes the users choice and the computers choice and
 * compares them to see who wins or if it is a draw.
 * Updates the score to +1 for a winner.
 */
function compare(compChoice) {
    if (userChoice === compChoice) {
        return "The computer chose the same answer, it's a draw!";
    } else if (userChoice === "ice") {
        if (compChoice === "ground") {
            return "Ice freezes Ground, you win!";
            // Add something to increase the correct score by 1 for every possible right answer?
        } else if (compChoice === "fire") {
            return "Ice is melted by Fire, you loose!";
        } else if (compChoice === "grass") {
            return "Ice freezes Grass, you win!";
        } else {
            return "Ice is smashed by Rock, you loose!";
        }
    } else if (userChoice === "ground") {
        if (compChoice === "fire") {
            return "Ground engulfs Fire, you win!";
        } else if (compChoice === "grass") {
            return "Ground is grow on by Grass, you loose!";
        } else if (compChoice === "rock") {
            return "Ground engulfs Rock, you win!";
        } else {
            return "Ground is frozen by Ice, you loose!";
        }
    } else if (userChoice === "fire") {
        if (compChoice === "grass") {
            return "Fire burns Grass, you win!";
        } else if (compChoice === "rock") {
            return "Fire is covered by Rock, you loose!";
        } else if (compChoice === "ice") {
            return "Fire melts Ice, you win!";
        } else {
            return "Fire is engulfed by Ground, you loose!";
        }
    } else if (userChoice === "grass") {
        if (compChoice === "rock") {
            return "Grass grows over Rock, you win!";
        } else if (compChoice === "ice") {
            return "Grass is frozen by Ice, you loose!";
        } else if (compChoice === "ground") {
            return "Grass grows over Ground, you win!";
        } else {
            return "Grass is burned by Fire, you loose!";
        }
    } else if (userChoice === "rock") {
        if (compChoice === "ice") {
            return "Rock smashes Ice, you win!";
        } else if (compChoice === "ground") {
            return "Rock is engulfed by Ground, you loose!";
        } else if (compChoice === "fire") {
            return "Rock covers Fire, you win!";
        } else {
            return "Rock is grown on by Grass, you loose!";
        }
    }
}

