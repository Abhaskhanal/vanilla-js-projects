const container=document.querySelector(".container");
const heading=document.querySelector(".main-heading");



const typeWriter = document.getElementById('typewriter-text');
const text = 'Click the change button to change colors';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
