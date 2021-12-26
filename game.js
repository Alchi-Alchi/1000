let c1 = document.getElementById ('c1');
let c2 = document.getElementById ('c2');
let c3 = document.getElementById ('c3');
let c4 = document.getElementById ('c4');
let c5 = document.getElementById ('c5');
function getNumber(min, max) {
  let n1 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n2 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n3 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n4 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n5 = Math.floor (Math.random () * (max - min + 1)) + min;
  console.log (n1)
  if (n1 == 1) {
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
  }
}