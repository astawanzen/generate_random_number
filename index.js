//generate random number as if we roll 3 dices credit bro code https://youtu.be/8dWL3wF_OMw
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xlabel").innerHTML = x;
  document.getElementById("ylabel").innerHTML = y;
  document.getElementById("zlabel").innerHTML = z;
};
