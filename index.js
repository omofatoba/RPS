let ops=document.querySelectorAll(".op");

ops.forEach(op=>{
    op.addEventListener("click",()=>{
        let playerid=op.id
       comp(playerid)
    })
})

function comp(playerid) {
    let rand=Math.floor(Math.random()*3);
    let compid=ops[rand].id;
  

   if (compid === playerid) {
   change("It's A Tie")
   }else if(playerid=="Rock" && compid=="paper"){
    change("player Won")
   }else  if(playerid=="paper" && compid=="Rock"){
    change("Computer Won")
   } 
   else  if(playerid=="scissor" && compid=="Rock"){
    change("Computer Won")
   } 
   else  if(playerid=="Rock" && compid=="scissor"){
    change("Player Won")
   } 
   else  if(playerid=="scissor" && compid=="paper"){
    change("Player Won")
   } 
   else  if(playerid=="paper" && compid=="scissor"){
    change("Player Won")
   } 





}

function change(text) {
   let message= document.querySelector(".message");
   message.style.display="block"
   return message.innerHTML=text

}