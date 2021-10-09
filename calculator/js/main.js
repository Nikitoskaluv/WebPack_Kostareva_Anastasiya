import { printDatesDiff, resultTag } from './output.js';
import { printOutput } from './printOutput.js';
import getDatesDiff from './getDateDiff.js';
import { switchFunc } from './switcher.js';
import { startTimer, pauseTimer, resumeTimer, refreshTimer } from './timer.js';
import '../node_modules/howler/dist/howler.js';
import '../img/calendar.png';
import '../img/stopwatch.png';
import '../sounds/bell.mp3';
import '../css/styles.scss';


const form = document.getElementById("calcDate");
const calc = document.querySelector('.calc');
const timer = document.querySelector('.timer');



switchFunc(calc, timer);

form.onsubmit = (event) => {
    event.preventDefault();
    const { firstDate, secondDate } = form.elements;

    if (!firstDate.value || !secondDate.value) {
        printOutput("Заполните все поля", resultTag);
        return;
    }

    const dateDiff = getDatesDiff({ from: firstDate.value, to: secondDate.value });
    printDatesDiff(dateDiff);
};


const startButton = document.getElementById("startBtn");
startButton.onclick = function () {
    const minutes = document.getElementById("inputTimer").value;
    startTimer(minutes);
};
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.onclick = function () {
    pauseTimer();
    return;
};
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.onclick = function () {
    resumeTimer();
    return;
};
const refreshBtn = document.getElementById("refreshBtn");
refreshBtn.onclick = function () {
    refreshTimer();
    return;
};