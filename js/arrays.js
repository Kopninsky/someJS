const arr = ['dan', 'ivan', 'petr', 'john', 'bill'];
// console.log('array length is ' + arr.length);
for (let i = 0; i < arr.length; i++) {
    let elemNum = i + 1;
    // console.log(`index of element : ${i} | number of element : ${elemNum} | element :  ${arr[i]}`);
};

const simp = []
let simpFn = (arg) => {
    for (let i = 0; i <= arg; i++) {
        if (i % 2 !== 0)
            simp.push(i);
    }
    console.log(simp);
}

// simpFn(46);

const users = []
let userMaker = (usersNumber) => {
    console.log(users);

    for (let i = 0; i < usersNumber; i++) {
        users.push({
            id: i + 1,
            name: undefined,
            lastName: undefined
        })
    }

    // for(let i = 0; i < users.length; i++){
    //     console.log(users[i].id)
    // }

    console.log(users);
}

// userMaker(12);

let boys = 'John, Bill, Max, Pit, Tom';
let boysArr = boys.split(', ');
let girls = 'Ann, Mary, Jess, Lisa, Gerthruda';
let girlsArr = girls.split(', ');
let party =boysArr.concat(girlsArr);
let goWrong = party.join('');
let toWrong = goWrong.toLowerCase();

for(let i = 0; i<toWrong.length; i++){
    // console.log(reallyWrong[i]);
}

// console.log(toWrong);
