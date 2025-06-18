// console.log("welocome to javascript bro");
// let id=document.getElementById("heading_id");
// console.dir(id);
// console.log(id);
// let myclass=document.getElementsByClassName("heading_class");
// console.dir(myclass);
// console.log(myclass);

// let tag=document.getElementsByTagName("p")
// console.dir(tag);
// console.log(tag);

// //properties

// console.log(id.tagName);


// let element=document.querySelector("h2");
// console.log(element.innerText+" from apna collage student");




///////////////


// let para=document.querySelector("p");
//  console.log(para);
//  //getattribute 
// let para2= para.getAttribute("class");
// console.log(para2);
// //setattribute
// let para3= para.setAttributeAttribute("class","newclass");
// console.log(para2);
//



//INSERT ELEMENT

// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);

// let div=document.querySelector("div");
// div.append(newbtn);




//home work


// let newbtn=document.createElement("button");
// newbtn.innerText="click me bro";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// document.querySelector("body").prepend(newbtn);



let btnmode = document.querySelector("#mode");
console.log(btnmode);

let currmode="light";
btnmode.addEventListener("click",() =>
{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundcolor="black";
     } else{
            currmode="light";
            document.querySelector("body").style.backgroundcolor="blue";
        }
        console.log(currmode);
    }
)