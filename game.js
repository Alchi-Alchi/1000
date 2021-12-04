let c1 = document.getElementById ('c1');
let c2 = document.getElementById ('c2');
let c3 = document.getElementById ('c3');
let c4 = document.getElementById ('c4');
let c5 = document.getElementById ('c5');
function getNumber(min, max) {
  c1.innerHTML = Math.floor (Math.random () * (max - min + 1)) + min;
  c2.innerHTML = Math.floor (Math.random () * (max - min + 1)) + min;
  c3.innerHTML = Math.floor (Math.random () * (max - min + 1)) + min;
  c4.innerHTML = Math.floor (Math.random () * (max - min + 1)) + min;
  c5.innerHTML = Math.floor (Math.random () * (max - min + 1)) + min;
  console.log (c1.innerText)
}