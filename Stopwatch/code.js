let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");


start.addEventListener("click", function () {
    var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
start.style.display="none";
    function startMsecs() {
        milliseconds++;
        if (milliseconds > 100) {
            milliseconds = 0;
        }
        milliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds;
        milliseconds =
            milliseconds >= 10 && milliseconds < 100 ?
            "0" + milliseconds :
            milliseconds;
    
        document.querySelector(".msecs").textContent = milliseconds;
    }
    
    function startSecs() {
        seconds++;
        if (seconds > 60) {
            seconds = 0;
        }
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.querySelector(".secs").textContent = seconds;
    }
    
    function startMins() {
        minutes++;
        if (minutes > 60) {
            minutes = 0;
        }
        minutes = minutes < 10 ? "0" + minutes : minutes;
        document.querySelector(".mins").textContent = minutes;
    }
    
    function startHrs() {
        hours++;
        if (hours > 60) {
            hours = 0;
        }
        hours = hours < 10 ? "0" + hours : hours;
        document.querySelector(".hrs").textContent = hours;
    }
    
     setMsecs = setInterval(startMsecs, 10);
     setSecs = setInterval(startSecs, 1000);
     setMins = setInterval(startMins, 60 * 1000);
     setHours = setInterval(startHrs, 60 * 1000 * 60);

});

function clearIntervals(){
    clearInterval(setMsecs);
    clearInterval(setSecs);
    clearInterval(setMins);
    clearInterval(setHours);

}
stop.addEventListener("click", function(){
    clearIntervals();
    start.style.display="inline-block";
})

reset.addEventListener('click', function () {
    clearIntervals();
    start.style.display="inline-block";
    document.querySelector(".msecs").textContent = "000"
    document.querySelector(".secs").textContent = "00"
    document.querySelector(".mins").textContent = "00"
    document.querySelector(".hrs").textContent ="00" 

})
