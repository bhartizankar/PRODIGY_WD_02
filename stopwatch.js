const playButton = document.getElementsByClassName("play")[0];
const pauseButton = document.getElementsByClassName("pause")[0];
const restButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const ms = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("min")[0];
const hr = document.getElementsByClassName("hour")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearButton = document.getElementsByClassName("lap-clear")[0];
const lapsList = document.getElementsByClassName("laps")[0];

let isPlay = false;
let sec, msec, min, hour;
let secCounter = 0;
let msCounter = 0;
let minCounter = 0;
let hrCounter = 0;
let item = 0;

toggleButton = () => {
    lapButton.classList.remove("hidden");
    pauseButton.classList.remove("hidden");
    restButton.classList.remove("hidden");
    laps.classList.remove("hidden");
}

const play = () =>{
    if (!isPlay) {
        
        sec = setInterval(() => {
            if(secCounter===59){
                secCounter=0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);
        
        msec = setInterval(() => {
            if(msCounter===100){
                msCounter=0;
            }
            ms.innerHTML = `&nbsp;${++msCounter}`;
        }, 10);

        min = setInterval(() => {
            if(minCounter===59){
                minCounter=0;
            }
            minute.innerHTML = `&nbsp;${++minCounter} :`;
        }, 60*1000);

        hour = setInterval(() => {
            if(hrCounter===59){
                hrCounter=0;
            }
            hr.innerHTML = `${++hrCounter} :`;
        }, 60*60*1000);

        isPlay=true;
    }
    toggleButton();
}
    const pause = () =>{
        
        clearInterval(sec);
        clearInterval(msec);
        clearInterval(min);
        clearInterval(hour);
        isPlay=false;
    
}


const reset = () =>{

    pause();

    secCounter = 0;
    msCounter = 0;
    minCounter = 0;
    hrCounter = 0;

    second.innerHTML='&nbsp;0 : ';
    ms.innerHTML='&nbsp;0';
    minute.innerHTML='&nbsp;0 : ';
    hr.innerHTML='0 : ';

    lapsList.innerHTML=``;
    item = 0;

    lapButton.classList.add("hidden");
    pauseButton.classList.add("hidden");
    restButton.classList.add("hidden");
}

const lap = () =>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","num");
    timeStamp.setAttribute("class","time-stamp");

    number.innerHTML= `#${++item}`
    timeStamp.innerHTML = `${hrCounter} : ${minCounter} : ${secCounter} : ${msCounter}`;
    
    li.append(number,timeStamp);
    laps.append(li);
}

const lapClear = () => {
    lapsList.innerHTML=``;
    item = 0;
}


pauseButton.addEventListener("click",pause);
playButton.addEventListener("click",play);
restButton.addEventListener("click",reset);
lapButton.addEventListener("click",lap);
clearButton.addEventListener("click",lapClear);