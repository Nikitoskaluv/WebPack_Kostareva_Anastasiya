import '../styles/styles.scss';
import '../pic/orange.jpg';
import '../pic/red.jpg';
import '../pic/yellow.jpg';
import '../audio/birds.mp3';
import '../audio/music.mp3';
import '../audio/river.mp3';
import '../video/1.mp4';
import '../video/2.mp4';
import '../pic/4.gif';


let container = document.querySelector(".container");
let items = [
    {
        title: "Красный",
        path: "../pic/red.jpg",
        type: "image",
    },

    {
        title: "Желтый",
        path: "../pic/yellow.jpg",
        type: "image",
    },
    {
        title: "Оранжевый",
        path: "../pic/orange.jpg",
        type: "image",
    },
    {
        title: "Пение птиц",
        path: "../audio/birds.mp3",
        type: "audio",
    },
    {
        title: "Музыка",
        path: "../audio/music.mp3",
        type: "audio",
    },
    {
        title: "Река",
        path: "../audio/river.mp3",
        type: "audio",
    },
    {
        title: "Blue",
        path: "../video/2.mp4",
        type: "video",
    },
    {
        title: "Gears",
        path: "../video/1.mp4",
        type: "video",
    },
    {
        title: "Sunset",
        path: "../pic/4.gif",
        type: "image",
    },

];


function insertCard(cardType) {
    container.insertAdjacentHTML('afterbegin', cardType);
}

for (let i = 0; i < items.length; i++) {
    if (items[i].type === "image") {
        let card = `<div class="card_cont ">
        <img src=${items[i].path}>
        <div><h3>${items[i].title}</h3></div>
        </div>`
        insertCard(card);
    } else if (items[i].type === "audio") {
        let card = `<div class="card_cont audio_cont">
        <audio src=${items[i].path} controls></audio>
        <div><h3>${items[i].title}</h3></div>
        </div>`
        insertCard(card);
    } else {
        let card = `<div class="card_cont ">
        <video src=${items[i].path} controls width="100%" height="270px" >
        </video>
        <div><h3>${items[i].title}</h3></div>
        </div>`
        insertCard(card);
    }
}