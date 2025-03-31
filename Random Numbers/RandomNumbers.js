const min = 1;
const max = 100;

const myRoll = document.getElementById("myButton");
const MyH1 = document.getElementById("myH1");
const MyH2 = document.getElementById("myH2");
const MyH3 = document.getElementById("myH3");

myRoll.onclick = function () {
  let randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("myH1").textContent = randomNumber1;
  let randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("myH2").textContent = randomNumber2;
  let randomNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("myH3").textContent = randomNumber3;
};
