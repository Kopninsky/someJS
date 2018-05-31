let timers = () => {

  let setT = () => {
    console.log('b4');
    setTimeout(() => {
      console.log('inside');
    }, 3000);
    console.log('after');
  }

  // setT();

  let setI = () => {
    console.log('b4');
    setInterval(() => {
      console.log('inside');
    }, 3000);
    console.log('after');
  }

  // setI();

  let queue = () => {
    setTimeout(() => {
      console.log('hi');
    }, 1000)
    setTimeout(() => {
      console.log('hi');
    }, 3000)
    setTimeout(() => {
      console.log('hi');
    }, 5000)
    console.time('time')
    for (let i = 0; i < 5000000000; i++) {
      i + 1 * 5 / 2;
    }
    console.timeEnd('time')
  }

  // queue();

}

// timers();

let myPromises = () => {
  let url1 = 'https://media.giphy.com/media/3og0IV7MOCfnm85iRa/giphy.gif'
  let url2 = 'https://media.giphy.cphy.gif'
  // let url2 = 'https://media.giphy.com/media/TZf4ZyXb0lXXi/giphy.gif'
  let url3 = 'https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif'

  let addImg = (url) => {
    let img = new Image();
    img.src = url;
    img.height = '300px';
    img.style.margin = '10px';
    document.body.appendChild(img);
  }

  // addImg(url1);
  // addImg(url2);
  // addImg(url3);

  let callbackHell = () => {
    let img = new Image();
    img.src = url1;
    img.style.height = '300px';
    img.style.margin = '10px';
    document.body.appendChild(img);
    img.addEventListener('load', () => {
      let img = new Image();
      img.src = url2;
      img.style.height = '300px';
      img.style.margin = '10px';
      document.body.appendChild(img);
      img.addEventListener('load', () => {
        let img = new Image();
        img.src = url3;
        img.style.height = '300px';
        img.style.margin = '10px';
        document.body.appendChild(img);
      })
    })
  }

  // callbackHell();

  let promiseTest = () => {

    let promiseDelay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          console.log('resolved');
        }, ms)
      })
    }

    let promise = promiseDelay(4000);

    console.log('b4');

    promise
      .then(() => console.log('1'))
      .then(() => console.log('2'))
      .then(() => console.log('3'))
      .then(() => console.log('4'))
      .then(() => console.log('5'))

    console.log('after');

  }

  // promiseTest();

  let loadImg = (url) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.height = 300;
      img.style.margin = '10px';
      document.body.appendChild(img);
      img.addEventListener('load', () => resolve());
      img.addEventListener('error', () => reject());
    })
  }

  // loadImg(url1)
  //   .then(() => loadImg(url2))
  //   .then(() => loadImg(url3))
  //   .then(() => console.log('ok'))
  //   .catch(() => console.log('error'));


  let asyncAwait = () => {
    let delay = (ms) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(Math.random()), ms)
      });
    }

    async function fn() {
      console.log('b4');

      let a = await delay(2000);
      let b = await delay(2000);
      let c = await delay(2000);
      let d = await delay(2000);
      let e = await delay(2000);
     
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);

      console.log('after');
    }
    fn();
  }

  asyncAwait();

}

// myPromises();

let promisePractice = () => {

}

promisePractice();