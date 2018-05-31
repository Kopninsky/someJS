function funfun(smth) {
  console.log(smth)
};

// funfun('hello from function declaration');

let sum = (a, b) => {
  console.log(a + b);
};

// sum(600, 66);

let sum1 = (a, b) => {
  let res = a + b;

  return res;
}
// console.log(sum1(10, 3));


let resSum1 = sum1(700, 77);

// console.log(resSum1);

let expFun = (text) => alert(text);

// expFun('hello from function expression');

let cFn = () => {
  let q = confirm('do you wanna know js secrets?');
  if (q) {
    alert('lets do it now!')
  } else {
    alert('so sad =(')
  }
};

// cFn();

let pFn = () => {
  let p = prompt('what do you want?')
  if (p === 'qwerty') {
    alert('password is correct')
  } else {
    alert('try "qwerty"')
  }
};

// pFn();

let robot = () => {
  let p = prompt('hello\n im the robot\n whats your name?');
  let p2 = prompt(`hello ${p}, how old are you?`);
    if (p2 < 18) {
      alert(`${p2}\n so young...`)
    } else if (p2 > 18) {
      alert(`really?\n ${p2}\n me too...`)
    }
}

// robot();

let foolFn = (arg) => {
  let a = 0;
  for(let i = 0; i < arg; i++){
    a++
    let b = a + 1,
        c = a + b,
        d = b + c,
        e = c + d;
    console.log(`${a} | ${b} | ${c} | ${d} | ${e}`);
  }
}

// foolFn(20);
