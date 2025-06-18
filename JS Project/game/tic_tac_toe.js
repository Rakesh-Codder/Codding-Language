let boxes=document.querySelectorAll(".box");
let restbtn=document.querySelectorAll("reset");
let turn = true;
let winparttens = [
    [0,1,3],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box was clicked");
      if(turn === true){
        box.innerText="0";
        turn = false;
      }
      else{
        box.innerText ="X";
        turn =true;
      }
      box.disabled =true;

      checkwinner();

    });
    });


    const checkwinner =()=>{
for(let parten of winparttens){
   
let value1=boxes[parten[0]].innerText;
let value2=boxes[parten[1]].innerText;
let value3=boxes[parten[2]].innerText;
if(value1 !="" && value2 !=""&& value3 !=""){
    if(value1 === value2 && value2 === value3){
        console.log("winner");
        disableboxes();

    }
}
}

    };
    
const disableboxes= ()=>
{
  for(let box of boxes){
    box.disabled = true;
  }
}
