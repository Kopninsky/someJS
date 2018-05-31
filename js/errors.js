let tryCath = (div1, div2) => {
  let div = (a, b) => {
    try {
      if (b < 0) {
        throw new Error(' greater than 0 ')
      } else if (b == 0) {
        throw new Error(' cant do this ')
      } else if (b == undefined) {
        throw new Error(' no b ')
      } else if (!isFinite(b)) {
        throw new Error(' b is not a number ')
      }

      return a / b;
    } catch (e) {
      console.log(e.message);
    }
  }

  var result = div(div1, div2);

  if (result != undefined) {
    console.log(result);
  }
}

// tryCath(10, 2);

let callStack = () => {
  let fn1 = () => {
    console.log('b4 fn2');
    fn2();
    console.log('aftr fn2');
  }
  let fn2 = () => {
    console.log('b4 fn3');
    fn3();
    console.log('aftr fn3');
  }
  let fn3 = () => {
    console.log('inside fn3');
    throw new Error('error!')
  }

  try {
    console.log('b4 fn1');
    fn1();
    console.log('aftr fn1');
  } catch (e) {
    console.log(e.message);
  }
}

// callStack();