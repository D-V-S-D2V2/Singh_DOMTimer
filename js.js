let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let reset = document.getElementById("reset");
let text = document.getElementById("timer");
let for1 = document.getElementById("TimerForm");
let for3 = document.getElementById("TimerForm1");
let for2 = document.getElementById("TimerForm2");

window.count = 0;
for1.addEventListener("click", function(event) {

    event.preventDefault();
    
    window.timer1 = setInterval(() => {
        console.log("Start3 Time");
        console.log(window.count); 
        text.innerHTML = window.count;
        window.count = window.count + 1;
        //window.count = Number(window.count.toFixed(1))
    }, 1000 );
});

for2.addEventListener("click", function() {
    window.count = 0;
    text.innerHTML = window.count;
    clearInterval(window.timer1);
});


for3.addEventListener("click", function() {

    clearInterval(window.timer1);
});