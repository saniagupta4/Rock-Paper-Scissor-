let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const getcompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomindx=Math.floor(Math.random() * 3);
    return options[randomindx];
}

const showwin =(userwin,userchoice,compchoice)=>
{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
       
        msg.innerText=`WON Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compscore++;
        compscorepara.innerText=compscore;
         msg.innerText=`LOSE Your ${compchoice} Beats ${userchoice}`;
          msg.style.backgroundColor="red";
    }
}



const playgame=(userchoice)=>
{
    console.log("userchoice =", userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice =", compchoice);
    if(userchoice===compchoice){
        console.log("game was draw");
        msg.innerText=`DRAW PLAY AGAIN`;
         msg.style.backgroundColor="black";
    }else{
        let userwin=true;
        if(userchoice=== "rock"){
            //paper,scissor
            userwin= compchoice ==="paper" ? false:true;
        }else if(userchoice=== "paper"){
            //rock,scissor
            userwin= compchoice ==="scissor" ? false:true;
        }else{
            userwin= compchoice==="rock"? false:true;
        }
        showwin(userwin,userchoice,compchoice);
    }
    




}
 

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>
{
    const userchoice=choice.getAttribute("id");
    
    playgame(userchoice);
})
})

