let c1 = document.getElementById ('c1');
let c2 = document.getElementById ('c2');
let c3 = document.getElementById ('c3');
let c4 = document.getElementById ('c4');
let c5 = document.getElementById ('c5');
let svg;
function getNumber(min, max) {
  let n1 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n2 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n3 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n4 = Math.floor (Math.random () * (max - min + 1)) + min;
  let n5 = Math.floor (Math.random () * (max - min + 1)) + min;
  // function createDropOne (cube) {
  //   let svg = document.createElement ('svg');
  //   svg.setAttribute ('width', '100');
  //   svg.setAttribute ('height', '100');
  //   svg.setAttribute ('xmlns', 'http://www.w3.org/2000/svg');
  //   let circle = document.createElement ('circle');
  //   circle.setAttribute ('cx','50');
  //   circle.setAttribute ('cy','50');
  //   circle.setAttribute ('r','10');
  //   circle.setAttribute ('stroke','black');
  //   circle.setAttribute ('fill','black');
  //   svg.appendChild (circle);
    // cube.innerHTML = svg;
  // }
  switch (n1) {
    case 1:
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
    break;
    case 2: 
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 3: 
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 4: 
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 5: 
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 6: 
    c1.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
  }
  switch (n2) {
    case 1: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
    break;
    case 2: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 3: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 4: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 5: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 6: 
    c2.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
  }
  switch (n3) {
    case 1: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
    break;
    case 2: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 3: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 4: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 5: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 6: 
    c3.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
  }
  switch (n4) {
    case 1: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
    break;
    case 2: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 3: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 4: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 5: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 6: 
    c4.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
  }
  switch (n5) {
    case 1: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>"
    break;
    case 2: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 3: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 4: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 5: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
    case 6: 
    c5.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>"
    break;
  }
}