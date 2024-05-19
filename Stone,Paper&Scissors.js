let userscore=0;
let computerscore=0;

let choices=document.querySelectorAll(".choice1");
let msg=document.querySelector("#msg");

let UserChoicepara=document.querySelector("#userscore");
let ComputerChoicePara=document.querySelector("#Computerscore");

// Random Choice Generate By Computer
const generatecomputerchoice = () =>{
    const options=["rock","paper","scissor"];
   const randomIndx= Math.floor(Math.random()*3);
  return options[randomIndx];
}

const drawGame = () =>
{
    // console.log("Draw Game");
    msg.innerText= "Game Was Draw. Play Again";
    msg.style.backgroundColor="#081b31";

}

// 
const showWinner = (userwin,userchoice,computerchoice) => {
    if(userwin)
    {
        userscore++;
        UserChoicepara.innerText=userscore;
        // console.log("You Win");
        msg.innerText= `You Win! Your  ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }
    else
    { computerscore++;
        ComputerChoicePara.innerText=userscore;
        // console.log("You Loose");
        msg.innerText= `You Lost. ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";


    }
}

// Compare UserChoice and compuer choice
// score update
const playGame = (userchoice) =>{
console.log("User Choice=",userchoice);
const computerchoice=generatecomputerchoice();
console.log("Computer Choice=",computerchoice);

if(userchoice==computerchoice)
{
    // Draw Game
drawGame();
}
else
{
    let userwin="true";
    if(userchoice==="rock")
    {
          // paper,scissor
userwin=computerchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
    {
        // rock,scissor
        userwin=computerchoice==="scissor"?false:true;

    }
    else
    {
        // rock,paper
        userwin=computerchoice==="rock"?false:true;

    }
    showWinner(userwin,userchoice,computerchoice);
}

};


choices.forEach((choice1) => {
    console.log(choice1);

    choice1.addEventListener("click",() =>{
      let   userchoice=choice1.getAttribute("id");
// console.log("choice was clicked",userchoice);
playGame(userchoice)
    });
})