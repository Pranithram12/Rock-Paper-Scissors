let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const drawgame = () =>{
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
}

const showwinner = (userwin,userChoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you Loose! ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (userChoice === compchoice) {
        drawgame();
    } else {
        let userwin = true; // Changed to let
        if (userChoice === "rock") {
            // computer choice can be paper and scissor
            userwin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // computer choice can be rock and scissor
            userwin = compchoice === "scissor" ? false : true;
        } else {
            // computer choice can be rock and paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userChoice,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});