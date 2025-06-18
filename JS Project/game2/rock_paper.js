let userScore =0;
let computerScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll(".msg-container");
console.log(msg);
const draw=()=>
{
console.log("Game was draw");
};
const shoewWinner =(userWin) =>{
    if(userWin ){
        console.log("You win");
     

    }
else{
        console.log("You loss");
         
    }
}

const genCompChoice = () =>
{
    const randIdx = Math.floor(Math.random()*3);
 const option = ["rock","paper","scissors"];
 
   console.log(randIdx);
   return option[randIdx];

};
 const playGame =(userchoice) =>
 {
    console.log("user choice = ",userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);
  if(userScore === compChoice){
draw();
  }
else{
    let userWin =true;
    if(userchoice === "rock"){
        userWin = compChoice ==="papper"?false:true;
    }
    else if(userchoice ==="papper"){
        userWin= compChoice ==="scissors"?false:true;
    }
    else{
        userWin = compChoice ==="rock"?false:true;
    }
shoewWinner(userWin);
}

 };


choices.forEach((choice) =>{
         console.log(choice);

    choice.addEventListener("click",() =>
    { 
        const userchoice =choice.getAttribute("id");
        playGame(userchoice);
    });
});



