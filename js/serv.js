let testXhr = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', false);
  xhr.send();
  let towns = xhr.responseText;
  let arrTowns = JSON.parse(towns);
  let townsName = () => {
    let newArrTowns = [];

    for (let i = 0; i < arrTowns.length; i++) {
      newArrTowns.push(arrTowns[i].name);
    }

    let test = newArrTowns.sort();
    console.log(test);
  }

  townsName();

}

// testXhr();

const myNewDiv = document.createElement('div');
const result = document.createElement('div');
const loadBtn = document.createElement('button');
root.appendChild(myNewDiv);
myNewDiv.appendChild(result);
myNewDiv.appendChild(loadBtn);
loadBtn.textContent = 'Load';

loadBtn.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
  
})
