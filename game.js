function getSVG(number, cube) {
  switch (number) {
    case 1:
      cube.innerHTML = "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=50 cy=50 r=10 stroke=black fill=black /></svg>";
      break;
    case 2:
      cube.innerHTML =
        "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>";
      break;
    case 3:
      cube.innerHTML =
        "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>";
      break;
    case 4:
      cube.innerHTML =
        "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>";
      break;
    case 5:
      cube.innerHTML =
        "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=50 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>";
      break;
    case 6:
      cube.innerHTML =
        "<svg width = 100 height = 100 xmlns = 'http://www.w3.org/2000/svg'><circle cx=15 cy=15 r=10 stroke=black fill=black /><circle cx=85 cy=15 r=10 stroke=black fill=black /><circle cx=15 cy=50 r=10 stroke=black fill=black /><circle cx=85 cy=50 r=10 stroke=black fill=black /><circle cx=15 cy=85 r=10 stroke=black fill=black /><circle cx=85 cy=85 r=10 stroke=black fill=black /></svg>";
      break;
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumber(min, max) {
  let c1 = document.getElementById("c1");
  let c2 = document.getElementById("c2");
  let c3 = document.getElementById("c3");
  let c4 = document.getElementById("c4");
  let c5 = document.getElementById("c5");

  let n1 = getRandom(min, max);
  let n2 = getRandom(min, max);
  let n3 = getRandom(min, max);
  let n4 = getRandom(min, max);
  let n5 = getRandom(min, max);

  getSVG(n1, c1);
  getSVG(n2, c2);
  getSVG(n3, c3);
  getSVG(n4, c4);
  getSVG(n5, c5);
}

function playersAdd () {};
function scores () {};