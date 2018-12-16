const clockTitle = document.querySelector(".js-clock"),
clock = clockTitle.querySelector("h1");

function printTime(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init(){
    printTime();
    setInterval(printTime,1000);
}

init();