console.log("hello brother");

const endDate = " 9 july 2025 12:00 AM";
document.getElementById("end-date").innerText =endDate;
const inputs = document.querySelectorAll("input");


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    const differ =(end-now)/1000;
    console.log(differ);
    //days convert
    inputs[0].value=(Math.floor(differ/3600/24));

    //convet hours
     inputs[1].value=(Math.floor(differ/3600)%24);
     //min
     inputs[2].value=(Math.floor(differ/60)%60);
     //sec
      inputs[3].value=(Math.floor(differ)%60);
}
setInterval(
    ()=>{
        clock();
    }
)
clock();