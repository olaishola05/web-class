const now = new Date();
// document.write("Time: ", now.toLocaleTimeString());

const pie = Math.PI;

let neg = -10.5;

let abs = Math.abs(neg);
console.log(abs);

function randomInteger(n) {
    return Math.floor(Math.random() * n);
}

const rand = randomInteger(30);
// console.log(rand);

const sqr = Math.sqrt(16);
let round = Math.ceil(5.6);

let num = [1, 3, 2, 5];

const max = Math.max(...num);
const min = Math.min(...num);

console.log(max, min);
