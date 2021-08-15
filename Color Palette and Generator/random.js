const letters=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]

const btn=document.getElementById("btn");
const box=document.querySelector(".main");
let text=document.querySelector("#text");


btn.addEventListener('click',()=>{
    let hash="#";
    for(let i=0;i<6;i++){
        hash+=letters[randomNumber()];
    }
    text.textContent=hash;
    box.style.backgroundColor=hash;


})


window.addEventListener('load',()=>{
    let hash="#";
    for(let i=0;i<6;i++){
        hash+=letters[randomNumber()];
    }
    text.textContent=hash;
    box.style.backgroundColor=hash;
})


var randomNumber=()=>{
    return Math.floor(Math.random()*16);
}