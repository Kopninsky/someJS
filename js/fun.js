const wrap = document.createElement('div');
root.appendChild(wrap);
const clock = document.createElement('h2');
clock.style.color = 'white'
wrap.appendChild(clock);

let clockFn = () => {

  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  if (h.length < 2) {
    h = '0' + h;
  }
  if (m.length < 2) {
    m = '0' + m;
  }
  if (s.length < 2) {
    s = '0' + s;
  }

  clock.textContent = `${h} : ${m} : ${s}`;
  color = `#${h}${m}${s}`;
  wrap.style.backgroundColor = color;
  wrap.style.width = '30%';
  wrap.style.borderRadius = '10px';
  wrap.style.margin = 'auto';

}

clockFn();
setInterval(clockFn, 1000);