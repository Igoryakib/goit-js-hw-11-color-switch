import * as functions from './functions.js';

const startBtnRef = document.querySelector('button[data-action = "start"]');
const stopBtnRef = document.querySelector('button[data-action = "stop"]');

startBtnRef.addEventListener('click', functions.onClickBtnStart);
stopBtnRef.addEventListener('click', functions.onClickBtnStop);