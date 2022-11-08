
let buttons = {
    b1 : document.getElementById("b1"),
    b2 : document.getElementById("b2"),
    b3 : document.getElementById("b3"),
    b4 : document.getElementById("b4"),
    b5 : document.getElementById("b5"),
    b6 : document.getElementById("b6"),
    b7 : document.getElementById("b7"),
    b8 : document.getElementById("b8"),
    b9 : document.getElementById("b9")
}
let currentPlayer = 2;

let pl_1 = document.getElementById("player1");
pl_1.innerText = 0;
let pl_2 = document.getElementById("player2");
pl_2.innerText = 0;
let p1c = 0;
let p2c = 0;



const scoring = () => {
    if (currentPlayer === 2){
        p2c++;
        pl_2.innerText = p2c
        console.log("a");
    }else if(currentPlayer === 1){
        p1c++
        pl_1.innerText = p1c
        console.log("b");
    }
}
const checkProgrss = () => {
    if((buttons.b1.innerText)&&(buttons.b1.innerText === buttons.b2.innerText) && (buttons.b2.innerText === buttons.b3.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b4.innerText)&&(buttons.b4.innerText === buttons.b5.innerText) && (buttons.b5.innerText === buttons.b6.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b7.innerText)&&(buttons.b7.innerText === buttons.b8.innerText) && (buttons.b8.innerText === buttons.b9.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b1.innerText)&&(buttons.b1.innerText === buttons.b4.innerText) && (buttons.b4.innerText === buttons.b7.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b2.innerText)&&(buttons.b2.innerText === buttons.b5.innerText) && (buttons.b5.innerText === buttons.b8.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b3.innerText)&&(buttons.b3.innerText === buttons.b6.innerText) && (buttons.b6.innerText === buttons.b9.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b1.innerText)&&(buttons.b1.innerText === buttons.b5.innerText) && (buttons.b5.innerText === buttons.b9.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
    if((buttons.b3.innerText)&&(buttons.b3.innerText === buttons.b5.innerText) && (buttons.b5.innerText === buttons.b7.innerText)){
        console.log(`player ${currentPlayer} is win`);
        return scoring(),reset();
    }
}

const play = (btn) => {

    const button = buttons[btn];

    if(currentPlayer === 2){

        button.innerText = "x";
        currentPlayer = 1;

    }else{

        button.innerText = "o";
        currentPlayer = 2;
    }
    button.disabled = true;
    checkProgrss();
}
const reset = () => {
    
    for(const key in buttons){
        
        const button = buttons[key];
        button.disabled = false;
        button.innerText= "";
        
    }
}