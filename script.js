let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container"); // Corrected selector
let msg = document.querySelector("#msg");

let turnO = true;
let gameActive = true; // Variable to track if the game is active

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive) return; // Prevent clicks if the game is not active

        console.log("box was clicked");
        if (box.innerText === "") { // Check if the box is empty
            if (turnO) {
                box.innerText = "O"; 
                turnO = false;
            } else {
                box.innerText = "X"; 
                turnO = true;
            }
            checkWinner();
        }
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`; // Corrected spelling
    msgcontainer.classList.remove("hide");
    gameActive = false; // Set gameActive to false to prevent further clicks
}

const checkWinner = () => {
    for (let pattern of winpatterns) { // Added 'let' to declare pattern
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

// Reset functionality
resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear the text in each box
    });
    turnO = true; // Reset turn to player O
    gameActive = true; // Reset gameActive to true
    msgcontainer.classList.add("hide"); // Hide the message container
});
