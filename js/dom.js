const root = document.querySelector('#root');
const title = root.querySelector('.title');
const newElement = document.createElement('div');
const newElement2 = document.createElement('spun');
const newStile = document.createElement('style');
const head = document.querySelector('head');

const link = root.querySelector('a');
link.addEventListener('click', e => e.preventDefault());

const colorMyBtn = root.querySelector('.btn');
const colorMyBack = root.querySelector('.btn2');
const textSpun = root.querySelector('.text__spun');
textSpun.style.fontSize = '18px';
const backSpun = root.querySelector('.back__spun');
backSpun.style.fontSize = '18px';

const newDiv1 = document.createElement('div');
const newDiv2 = document.createElement('div');

let inputPractice = () => {
  const input = root.querySelector('.input');
  const inputResult = root.querySelector('.input__text');
  const ul = document.createElement('ul');
  ul.style.listStyle = 'none';
  ul.style.width = '30%';
  ul.style.margin = 'auto';
  ul.style.padding = '0';
  ul.style.border = '1px solid black';
  ul.style.borderRadius = '5px';
  ul.style.height = '90px';
  ul.style.overflow = 'hidden';
  ul.style.backgroundColor = 'Coral';
  inputResult.appendChild(ul);

  input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
      let li = document.createElement('li');
      li.style.height = '30px';
      li.style.fontSize = '25px';
      li.style.color = 'DarkCyan';
      ul.appendChild(li);
      li.textContent = input.value;
      input.value = '';
      if(ul.children.length > 3){
        ul.removeChild(ul.children[0]);
      }
    }    
  })
}

inputPractice();

let practice1 = () => {
  let rootFn = () => {
    root.style.textAlign = 'center';
    root.style.fontSize = '30px';
  }

  rootFn();

  let titleFn = () => {
    title.textContent = 'new text';
  }

  // titleFn();

  let newElementFn = () => {
    root.appendChild(newElement);
    root.appendChild(newElement2);
    newElement.textContent = 'inside new div';
    newElement2.textContent = 'inside new spun';
    newElement2.className = 'test';
  }

  // newElementFn();

  let styleFn = () => {
    head.appendChild(newStile);
    newStile.textContent = '.test{color:green;font-size:20px;}';
    //css in js?)
  }

  styleFn();

  let coloredFn = () => {
    let i = 0;
    colorMyBtn.addEventListener('click', () => {
      i++;
      if (i === colors.length)
        i = 0;
      title.style.color = colors[i];
      title.textContent =  colors[i];
      textSpun.appendChild(newDiv1)
      newDiv1.textContent = 'text color is ' + colors[i];
    });
  
    colorMyBack.addEventListener('click', () => {
      i++;
      if (i === colors.length)
        i = 0;
      title.style.backgroundColor = colors[i];
      backSpun.appendChild(newDiv2)
      newDiv2.textContent = 'back color is ' + colors[i];
    });
  }
  
  coloredFn();
  
  let autoColor = () => {
    let i = 0;
    let test = setInterval(() => {
      i++
      if (i === colors.length) {
        i = 0
      }
      title.style.color = colors[i];
      title.textContent =  colors[i];
    }, 200)
  }
  
  // autoColor();
  
}

practice1();

const colors = ['AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenrod',
  'DarkGray',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DodgerBlue',
  'Firebrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'Goldenrod',
  'Gray',
  'Green',
  'GreenYellow',
  'Honeydew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenrodYellow',
  'LightGreen',
  'LightGray',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquamarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenrod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen'
]