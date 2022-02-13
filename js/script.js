'use strict'

let elHeading = document.querySelector('.heading');
let elForm = document.querySelector('.form');
let elFormSelect = document.querySelector('.form__select');
let elFormBtn = document.querySelector('.form__btn');
// Result IMG and BOX:
let elResultBox = document.querySelector('.result__box');
let elResultMY = document.querySelector('.resultMyIMG');
let elResultKOMP = document.querySelector('.resultKompIMG');
let elResultHeading = document.querySelector('.result__heading');

elForm.addEventListener('submit', function(evt) {
    elHeading.textContent = "Getluck!!!";
    evt.preventDefault();

    let formSelect = elFormSelect.value;
    let render = Math.floor(Math.random() * 3);

    // RANDOM IMG
    if (render === 0) {
        elResultKOMP.setAttribute('src', 'img/paper.png'); // 0
    } else if (render === 1) {
        elResultKOMP.setAttribute('src', 'img/rock.png'); // 1
    } else if (render === 2) {
        elResultKOMP.setAttribute('src', 'img/scissors.png'); // 2
    }

    elResultKOMP.classList.remove('none');
    elResultKOMP.classList.add('flex');

    // MY IMG
    if (formSelect === "0") {
        elResultMY.setAttribute('src', 'img/rock.png'); // 0
    } else if (formSelect === "1") {
        elResultMY.setAttribute('src', 'img/paper.png'); // 1
    } else if (formSelect === "2") {
        elResultMY.setAttribute('src', 'img/scissors.png'); // 2
    }
    
    elResultMY.classList.remove('none');
    elResultMY.classList.add('flex');

    let result = 0   // 0: equal; 1: win; -1: lose

    if (render === 0 && formSelect === '0') { // Paper VS Rock
        result = -1
    } else if (render === 0 && formSelect === '2') { //  Paper VS Scissors'
        result = 1
    }  else if (render === 1 && formSelect === '1') { // Rock VS Paper
        result = 1
    } else if (render === 1 && formSelect === '2') { // Rock VS Scissors
        result = -1
    } else  if (formSelect === '0' && render === 2) { // Scissors VS Rock
        result = 1
    } else if (formSelect === '2' && render === 0) { // Scissors VS Paper
        result = 1   
    } else if (formSelect === '1' && render === 2) { // Paper VS Scissors
        result = -1   
    }

    if (result === 0) elResultHeading.textContent = "Equal";
    else if (result === 1) elResultHeading.textContent = "You Win!!!";
    else if (result === -1) elResultHeading.textContent = "You Lose";


})