var a = 100;
let b = 10;
let c = '12';
let d = 0;
const PI = 3.14;

let toStr = (a) => {
  console.log(String(a));
}

// toStr(12345);

let toNum = (a) => {
  console.log(Number(a));
}

// toNum('4567');

let toBool = (a) => {
  console.log(Boolean(a));
}

// toBool(12);

let showLength = (a) => {
  console.log(a.length);
}

// showLength('Hello my friend');

let fixMe = (a, b) => {
  console.log(a.toFixed(b));
}

// fixMe(12.345, 2);

let finite = (a) => {
  console.log(isFinite(a));
}

// finite('qwe');

let width = '23px';
let widthNum = parseInt(width);
// console.log(widthNum);

let dotted = '1.2.3.4.5.';
let dottedNum = parseFloat(dotted);
// console.log(dottedNum);

let pe = 3.14;
let pePe = () => {
  console.log(Math.floor(pe));
  console.log(Math.ceil(pe));
  console.log(Math.round(pe));
}

// pePe();

const myName = 'Alex';
const myLastMane = 'Yashin';
// console.log(`by ${myName} ${myLastMane}`);