let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")


let turn0 = true;

const winPattern = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetBtn = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was pressed")
        if (turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner is: ",pos1Val );
                showWinner(pos1Val);
            }
        }
    }
}

newBtn.addEventListener("click", resetBtn);
reset.addEventListener("click", resetBtn);