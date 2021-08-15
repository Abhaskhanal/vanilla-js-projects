const hex1 = ["#d50000", "#b71c1c", "#d32f2f", "#ef5350", "#c51162", "#ff4081", "#e91e63", "#ec407a", "#aa00ff", "#e040fb", "#7b1fa2", "#ab47bc", "#4527a0", "#6200ea", "#9575cd", "#651fff"];

const hex2 = ["#304ffe", "#536dfe", "#3949ab", "#3f51b5", "#2962ff", "#2979ff", "#1e88e5", "#42a5f5", "#00e5ff", "#00acc1", "#00b8d4", "#80deea", "#00bfa5", "#1de9b6", "#4db6ac", "#00796b"];

const hex3 = ["#00c853", "#43a047", "#00e676", "#81c784", "#ffd600", "#ffee58", "#fff9c4", "#fdd835", "#ff6d00", "#f57c00", "#ffa726", "#fb8c00", "#4e342e", "#8d6e63", "#3e2723", "#795548"];

const hex4 = ["#616161", "#424242", "#9e9e9e", "#bdbdbd", "#37474f", "#546e7a", "#607d8b", "#90a4ae", "#dce775", "#c0ca33", "#9e9d24", "#f4ff81", "#ffecb3", "#ffc400", "#ffa000", "#ffd740"];

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");

var reloadRandomNumber = anyRandomNumber();

window.addEventListener('load', function () {
    var reloadRandomNumber = anyRandomNumber();
    box1.style.backgroundColor = hex1[reloadRandomNumber];
    box2.style.backgroundColor = hex2[reloadRandomNumber];
    box3.style.backgroundColor = hex3[reloadRandomNumber];
    box4.style.backgroundColor = hex4[reloadRandomNumber];

    text1.textContent = hex1[reloadRandomNumber];
    text2.textContent = hex2[reloadRandomNumber];
    text3.textContent = hex3[reloadRandomNumber];
    text4.textContent = hex4[reloadRandomNumber];
})


const button = document.getElementById("btn");
button.addEventListener("click", () => {

    var randomNumber = anyRandomNumber();

    box1.style.backgroundColor = hex1[randomNumber];
    box2.style.backgroundColor = hex2[randomNumber];
    box3.style.backgroundColor = hex3[randomNumber];
    box4.style.backgroundColor = hex4[randomNumber];

    text1.textContent = hex1[randomNumber];
    text2.textContent = hex2[randomNumber];
    text3.textContent = hex3[randomNumber];
    text4.textContent = hex4[randomNumber];


});

function anyRandomNumber() {
    return Math.floor(Math.random() * 16);
}