"use strict";
const body = document.querySelector("body");
const clickMeBtn = document.querySelector(".btn");
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

clickMeBtn.addEventListener("click", function () {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  body.style.backgroundColor = hexCol;
});
