let text = document.getElementById("timer");
let startBtn = document.getElementById("startTimer");
let stopBtn = document.getElementById("stopTimer");
let resetBtn = document.getElementById("resetTimer");
window.count = 0;

startBtn.addEventListener("click", function(event) {
    event.preventDefault();
    start();
});
function start() {
    console.log(window.count); 
    text.innerHTML = window.count;
    window.count = window.count + 1;
    window.timer1 = setInterval(() => {
        console.log("Start3 Time");
        console.log(window.count); 
        text.innerHTML = window.count;
        window.count = window.count + 1;
    }, 1000 );
}

resetBtn.addEventListener("click", reset);
function reset() {
    window.count = 0;
    text.innerHTML = window.count;
    clearInterval(window.timer1);
}

stopBtn.addEventListener("click", stop);
function stop() {
    clearInterval(window.timer1);
}