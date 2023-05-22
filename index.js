let first = document.querySelector("#input_first");
let second = document.querySelector("#input_sec");

document.querySelector(".button").addEventListener("click", makeSquared);

function makeSquared() {
  debugger;
  let firstNumber = Number(first.value);
  document.querySelector("#input_sec").value = firstNumber ** 2;
}
