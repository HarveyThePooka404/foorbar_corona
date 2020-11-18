"use strict";

window.onload = function () {
    Counting();
    gettingData();
}

const timer = 5000;
function gettingData() {

    fetch('https://kea-alt-del.dk/kata-distortion/')
        .then(response => response.json())
        .then(data => queueSize = data.inQueue);

    console.log(queueSize);

    setTimeout(gettingData, timer);

}

const miracle = [];
let queueSize = 1;

function Counting() {


    if (miracle.length > 39) {

        miracle.length = 39;
        miracle.unshift(queueSize);
    }
    else {
        miracle.unshift(queueSize);
    }

    for (let i = 0; i < 40; i++) {
        const bar_number = document.querySelector(`#bar_${i}`);
        bar_number.style.height = `${miracle[i]}vh`;
    }

    creatingPeople();
    setTimeout(Counting, timer);
}

function creatingPeople() {

    const wrapper_people = document.querySelector(".wrapper-people");
    const span = document.querySelector("span");
    wrapper_people.innerHTML = "";

    if (queueSize < 10) {

        span.innerText = "Yes!";
        const func = () => {
            const newImg = document.createElement("img");
            newImg.setAttribute("src", "people.png");
            wrapper_people.appendChild(newImg);
        };

        const times = queueSize;

        Array.from({ length: times }, () => func());
    }

    else {

        span.innerText = "No!";
        const times = queueSize - 10;

        const func = () => {
            const newImg = document.createElement("img");
            newImg.setAttribute("src", "people.png");
            wrapper_people.appendChild(newImg);
        };

        Array.from({ length: 10 }, () => func());

        const funcRed = () => {
            const newImg = document.createElement("img");
            newImg.setAttribute("src", "people-red.png");
            wrapper_people.appendChild(newImg);
        };

        Array.from({ length: times }, () => funcRed());

    }
}