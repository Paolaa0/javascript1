let numberOne = prompt("Digite o primeiro núumero");
let numberTwo = prompt("Digite o segundo número");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert("Soma: " + sum);
alert("Subtração " + sub);
alert("Multiplicação " + multi);
alert("Divisão " + div);
alert("Resto " + rest);

if (sum % 2 === 0) {
  alert("A soma dos números é par.");
} else {
  alert("A soma dos números é ímpar.");
}

if (numberOne === numberTwo) {
  alert("Os números inseridos são iguais.");
} else {
  alert("Os números inseridos são diferentes.");
}
