alert("Please kindly do not play Draw games:)")

let choice=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".rstgame");
let newbtn=document.querySelector(".newbtn");
let msgCont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg")
let playerO=true;//plau O ki turn hai
let count=0;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


//adding click event
choice.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("choice is made")
        if(playerO){
            box.innerText="X"
            playerO=false;
        }
        else{
            box.innerText="O"
            playerO=true;
        }
        box.disabled=true;
        checkwinner();
    })
   
})

const checkwinner=()=>{
    for(let pattern of winPattern){
    //     console.log(pattern[0],pattern[1],pattern[2])
    //     console.log(choice[pattern[0]],choice[pattern[1]],choice[pattern[2]])
  let pos1=choice[pattern[0]].innerText;    //values in choices storing of boxes
  let pos2=choice[pattern[1]].innerText;    
  let pos3=choice[pattern[2]].innerText;   
  
  if(pos1!="" && pos2!="" && pos3!=""){// tino posotuons full hone chaiye winner ke lie
if(pos1==pos2 && pos2==pos3){
    console.log("winner!",pos1)
    showwinner(pos1);
   }
}
}}
const drawGame=()=>{
   msg.innerText="drawgame!"
   msgCont.classList.remove("hide")//remocig hide wala class
   disablechoice();
    }
const showwinner=(winner)=>{
    msg.innerText='Congratulations, winner is '+winner+ "!"
    msgCont.classList.remove("hide")//remocig hide wala class
    disablechoice();
  
}
//not letting any more choice make
const disablechoice=()=>{
    for(let box of choice){
        box.disabled=true; //box ko click nhi kar skte
    }
}
const rstgame=()=>{
    playerO=true;
    enablebox();
    msgCont.classList.add("hide")
}
const enablebox=()=>{
    for(let box of choice){
        box.disabled=false; //box ab click kar skte hai:)
        box.innerText="";
    }
   
}
newbtn.addEventListener("click",rstgame);

