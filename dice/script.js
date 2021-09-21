//Random Number Generator
let max = 6;
let min = 1;

let randomNumber = () => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/******************************************
 *               Roll Dices                *
 *******************************************/

const dices = document.getElementsByClassName("dice"); //Get all dice elements
const btn = document.getElementById("btn");

//Click on Roll dice Button
btn.onclick = () => {
  //looping through dice elements
  Array.from(dices).forEach((elemento) => {
    let randomNumberResult = randomNumber();
    elemento.lastElementChild.setAttribute(
      "src",
      `/Dice/images/dice${randomNumberResult}.png`
    );
    elemento.lastElementChild.setAttribute("id", randomNumberResult);
  });
  setWinner();
};

/******************************************
 *                  Winner                *
 *******************************************/

let setWinner = () => {
  let arrayTemp = [];
  Array.from(dices).forEach((elemento) => {
    arrayTemp.push(elemento.lastElementChild.getAttribute("id"));
    console.log(arrayTemp);
  });

  let winner = Math.max(...arrayTemp);
  let imageElement = document.getElementById(winner);
  let paragraphElement = imageElement.previousElementSibling.innerHTML;
  document.getElementById("result").innerHTML = paragraphElement + " wins!!";
};
