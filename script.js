'use strict';

const score0=document.querySelector("#score--0");
const score1=document.querySelector("#score--1");
const diceimage=document.querySelector(".dice");
const rolldice=document.querySelector(".btn--roll");
const hold=document.querySelector(".btn--hold");
const newgame = document.querySelector(".btn--new");
let scores=[0,0];
let currentScore=0;
let activeplayer=0;
score0.textContent=0;
score1.textContent=0;
let playing=true;

diceimage.classList.add("hidden");

const switchplayer=function(){
    if(activeplayer===0){
        document.querySelector("#current--"+activeplayer).textContent=0;
        currentScore=0;
        activeplayer=1;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
      } 
      else{
          document.querySelector("#current--"+activeplayer).textContent=0; 
          currentScore=0;
          activeplayer=0;
          document.querySelector(".player--1").classList.remove("player--active");
          document.querySelector(".player--0").classList.add("player--active"); 
      }
}




rolldice.addEventListener("click", function(){
    if(playing){
    const randomnumber=Math.trunc(Math.random()*6+1);
diceimage.setAttribute("src","dice-"+randomnumber+".png");
diceimage.classList.remove("hidden");
currentScore=currentScore+randomnumber;

if(randomnumber!==1){
    document.querySelector("#current--"+activeplayer).textContent=currentScore;
}
else{
    switchplayer();
}
}});

hold.addEventListener("click",function(){
    if(playing){
    scores[activeplayer]=scores[activeplayer]+currentScore;
    document.querySelector("#score--"+activeplayer).textContent=scores[activeplayer];
    

    if(scores[activeplayer]>=50){
        playing=false;
        document.querySelector(".player--"+activeplayer).classList.remove("player--active");
        document.querySelector(".player--"+activeplayer).classList.add("player--winner");
        diceimage.classList.add("hidden");
      }
    else{
        switchplayer();
    }
}});

newgame.addEventListener("click",function(){
    score0.textContent=0;
    score1.textContent=0;  
    scores=[0,0];
    currentScore=0;
     activeplayer=0;  
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
   document.querySelector("#current--0").textContent=0;
   document.querySelector("#current--1").textContent=0;
   document.querySelector(".player--0").classList.add("player--active");
   playing=true;

})




