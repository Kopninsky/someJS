let practice = () => {

  let objects = () => {
    let obj = {
      prop: 'value'
    };

    let obj2 = obj;

    console.log(obj);
    console.log(obj2);

    obj.prop = 'new value';

    console.log(obj);
    console.log(obj2);

    let delFn = () => {
      let obj = {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3'
      };
      console.log(obj);

      delete obj.prop3;

      console.log(obj);
    }

    delFn();

    let mapFn = () => {
      let user1 = {
        name: 'Name1'
      };

      let user2 = {
        name: 'Name2'
      };

      let users = new Map();

      users.set(user1, 1);
      users.set(user2, 2);

      console.log(users.get(user1));
      console.log(users.get(user2));

    }

    mapFn();

  };

  // objects();

  let arrays = () => {

    let arr = [1, 2, 3, 4, 5];

    let test1 = () => {
      let arr2 = arr;

      console.log(arr);
      console.log(arr2);

      arr[1] = 'new value';

      console.log(arr);
      console.log(arr2);
    }

    // test1();

    let fnPush = (a) => {
      console.log(arr);

      a.push(6, 7, 8, 9, 10);

      console.log(arr);
    }

    // fnPush(arr);

    let fnFilter = (source, fn) => {
      let result = [];

      for (let elem of source) {
        if (fn(elem) === true) {
          result.push(elem)
        }
      }
      return result;
    }

    let newArr = fnFilter(arr, elem => elem > 3);

    // console.log(arr);
    // console.log(newArr);

    let delFn = () => {
      let arr666 = [1, 2, 3, 4, 5];

      console.log(arr666);

      // delete arr666[1];
      let newArr666 = arr666.splice(1, 1);
      console.log(`delete : ${newArr666}`);

      console.log(arr666);
    };

    // delFn();

    let addFn = () => {
      let arr = []
      arr.splice(0, 0, 'hello', 'from', 'splice')
      console.log(arr);
    }

    // addFn();

    let forFun = () => {
      for (; arr.length > 0; arr.pop()) {
        console.log(arr);
      }
      for (let i = 1; arr.length < 6; arr.push(i++)) {
        console.log(arr);
      }
    }

    // forFun();

    let setFn = () => {
      let src = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let src2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

      let uniq = new Set();
      let uniq2 = new Set(src2);

      for (const elem of src) {
        uniq.add(elem);
      };

      console.log(uniq.values());
      console.log(uniq2.values());

    }

    // setFn();

  }

  // arrays();

};

practice();