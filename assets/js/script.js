//Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    //Get the button elements and add event listeners to them
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

    //Creates two random numbers between 1 & 25 (inclusive)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

//Check answers and change scores
function checkAnswer() {

}

function calculateCorrectScore() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

//Display questions
function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}