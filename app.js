let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let new_Game_btn = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;
let count_click = 0;

const win_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [1,4,7],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    disableBoxes();
    enableBoxes();
    msg_container.classList.add("hide");
    boxes.innerHTML = "";
    count_click=0;
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clicked!");
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
            box.style.color="black";
        }else{
            box.innerText ="X";
            turnO = true;
        }
        // count_click++;
        box.disabled = true;
        checkWinner();// call liya h checkWinner function ko---> 
    });
    
});

let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerHTML= "";
        
    }
};

let enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        boxes.innerHTML= "";
    }
};


let show_winner = (winner) => {
        msg.innerText = `Congratulation ! winner is ${winner}`;
        msg_container.classList.remove("hide");
        disableBoxes();
};

let checkWinner = () => {
    count_click++;
    for(let pattern of win_pattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner", pos1Val);
                show_winner(pos1Val);
            }else if(count_click==9){
                console.log("draw");
                msg.innerText = "Game is draw";
                msg_container.classList.remove("hide");
                
            }
        }
    }
  
    
};

new_Game_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);