import { printOutput } from './printOutput.js';


let secondsRemaining;
let interval;

let timeDisplay = document.getElementById("timerArea");
let messageArea = document.getElementById("message");



let errorHide = () => printOutput("", messageArea);

function resumeTimer() {

    countdown();
    interval = setInterval(countdown, 1000);
    document.getElementById("resumeBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "block";
    return;
}
function pauseTimer() {

    clearInterval(interval);
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("resumeBtn").style.display = "block";
    return;
}

function countdown() {

    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining - (min * 60);

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    let message = min + ":" + sec;
    printOutput(message, timeDisplay);

    if (secondsRemaining === 0) {
        printOutput("<strong>Время вышло!</strong>", messageArea);
        clearInterval(interval);
        let sound = new Howl({
            src: ['sounds/bell.mp3']
        });
        sound.play();
        refreshTimer();
    }
    secondsRemaining--;
}

const startTimer = function (time) {
    if (isNaN(time) || time == "" || time === undefined) {
        printOutput("Вы ввели не число", messageArea);
        return;
    }
    secondsRemaining = time * 60;
    document.getElementById("inputTimer").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("refreshBtn").style.display = "block";
    printOutput("", messageArea);
    interval = setInterval(() => countdown(secondsRemaining), 1000);
};

function refreshTimer() {
    clearInterval(interval);
    document.getElementById("inputTimer").value = "";
    printOutput("00:00", timeDisplay);
    printOutput("", messageArea);
    document.getElementById("refreshBtn").style.display = "none";
    document.getElementById("inputTimer").style.display = "block";
    document.getElementById("startBtn").style.display = "block";
    return;
}

export { startTimer, pauseTimer, resumeTimer, refreshTimer };






