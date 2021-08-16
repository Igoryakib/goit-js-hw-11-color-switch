import colorArrays from "./colorsArrays.js";

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('.body');
let intervalId;
let activeBtn = false;

const onClickBtnStart = () => {
    if(activeBtn) {
        return;
    }
    intervalId = setInterval(()=> {
        bodyRef.style.backgroundColor = colorArrays[randomIntegerFromInterval(1, 6)];
    }, 1000)
    activeBtn = true;
};

const onClickBtnStop = () => {
    clearInterval(intervalId);
    activeBtn = false;
};

export {onClickBtnStart, onClickBtnStop, randomIntegerFromInterval}