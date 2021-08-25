
const gestureOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
}

let USERPOINTS = 0;
let COMPUTERPOINTS = 0;

const pickUserInput = (gesture) => {
    let gestures = document.querySelector(".gestures");
    gestures.style.display = "none";

    let results = document.querySelector(".results");
    results.style.display = "flex";

    document.getElementById("userImage").src = gestureOptions[gesture];

    let cpGestures = pickComputerHand();
    referee(gesture, cpGestures)
}

const pickComputerHand = (gesture) => {
    let gestures = ["rock", "paper", "scissors"]
    let cpGestures = gestures[Math.floor(Math.random() * 3)]

    document.getElementById("computerImage").src = gestureOptions[cpGestures];

    return (gesture, cpGestures);
}

const referee = (userGestures, cpGestures) => {
    if (userGestures == "paper" && cpGestures == "scissors") {
        setDecision("YOU LOSE!")
        setComputerPoints(COMPUTERPOINTS + 1)
    } else if (userGestures == "paper" && cpGestures == "rock") {
        setDecision("YOU WIN!")
        setUserPoints(USERPOINTS + 1)
    } else if (userGestures == "paper" && cpGestures == "paper") {
        setDecision("IT'S A DRAW!")
    } else if (userGestures == "scissors" && cpGestures == "scissors") {
        setDecision("IT'S A DRAW!")
    } else if (userGestures == "scissors" && cpGestures == "rock") {
        setDecision("YOU LOSE!")
        setComputerPoints(COMPUTERPOINTS + 1)
    } else if (userGestures == "scissors" && cpGestures == "paper") {
        setDecision("YOU WIN!")
        setUserPoints(USERPOINTS + 1)
    } else if (userGestures == "rock" && cpGestures == "rock") {
        setDecision("IT'S A DRAW!")
    } else if (userGestures == "rock" && cpGestures == "scissors") {
        setDecision("YOU WIN!")
        setUserPoints(USERPOINTS + 1)
    } else if (userGestures == "rock" && cpGestures == "paper") {
        setDecision("YOU LOSE!")
        setComputerPoints(COMPUTERPOINTS + 1)
    }
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setUserPoints = (points) => {
    USERPOINTS = points;
    document.querySelector(".userPoints h1").innerText = points;
}

const setComputerPoints = (points) => {
    COMPUTERPOINTS = points;
    document.querySelector(".computerPoints h1").innerText = points;
}

const restartGame = () => {
    let gestures = document.querySelector(".gestures");
    gestures.style.display = "flex";

    let results = document.querySelector(".results");
    results.style.display = "none";
}