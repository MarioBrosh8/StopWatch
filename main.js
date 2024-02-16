const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let currSec = 0;
let currMin = 0;
let currHr = 0;

let interval;

function updateScreen() {
    let sec = currSec.toString().padStart(2, "0");
    let min = currMin.toString().padStart(2, "0");
    let hr = currHr.toString().padStart(2, "0");

    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hr;
}

function incrementTime() {
    currSec++;
    if (currSec >= 60) {
        currSec = 0;
        currMin++;
        if (currMin >= 60) {
            currMin = 0;
            currHr++;
            if (currHr >= 99) {
                alert("All time consumed")
                resetWatch();
            }
        }
    }
    updateScreen()
}


function startWatch() {
    if (!interval) {
        interval = setInterval(incrementTime, 1000)
    }
}

function stopWatch() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function resetWatch() {
    stopWatch();
    currHr = 0;
    currMin = 0;
    currSec = 0;
    updateScreen();
}

start.addEventListener("click", startWatch);

stop.addEventListener("click", stopWatch);

reset.addEventListener("click", resetWatch);