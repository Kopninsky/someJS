const me = {
  name: 'Alex',
  lastName: 'Yashin',
  old: 26,
  profession: 'coder',
  homeTown: 'Moscow'
};

let intr = () => {
  console.log(`Hello!\nMy name is ${me.name} ${me.lastName}.\nI am ${me.old} years old ${me.profession} from ${me.town}.`);
};

// intr();

let someFn = () => {
  let user = {};
  console.log(user);
  user.name = prompt('hello, whats your name?');
  user.old = Number(prompt('how old are you?'));
  let p = prompt('are you happy?\nAnswer "yes" or "no"');
  if (p === 'yes') {
    user.happy = true;
  } else if (p === 'no') {
    user.happy = false;
  };
  (function () {
    for (let p in user) {
      console.log(p + ' : ' + user[p]);
    }
  })();
};

// someFn();

let tryAnonFn = () => {

  (function () {
    if ('work' in me) {
      if (me.work) {
        console.log('good');
      } else {
        console.log('uh...');
      }
    } else {
      me.work = false;
    }
  })();

  (function () {
    let c = 0;
    for (let p in me) {
      c++
    }
    console.log(c);
  })();

};

// tryAnonFn();

let userFn = () => {
  let user = {};
  for (p in me) {
    user[p] = undefined;
    user[p] = prompt(`what is your ${p}?`);
  };
  console.log(user);
};

// userFn();