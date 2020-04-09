const containerWidth = 800;
const containerHeight = 800;
const cubePerRow = 25;
const cubePerCol = 25;
const cubeSpace = 10;
const cubeSize = containerHeight / cubePerCol - cubeSpace * 2;
let wavesArr = [];

function main() {
  initContainer();
}

function initContainer() {
  let container = document.createElement("div");
  container.classList.add("waves-container");
  container.style.width = containerWidth + "px";
  container.style.height = containerHeight + "px";
  document.body.appendChild(container);

  generateCubes(container);
}

function generateCubes(container) {
  for (let hcubes = 0; hcubes < cubePerRow; hcubes++) {
    wavesArr[hcubes] = [];
    for (let vcubes = 0; vcubes < cubePerCol; vcubes++) {
      let cubeElt = document.createElement("div");
      cubeElt.classList.add("wave");
      cubeElt.style.width = cubeSize + "px";
      cubeElt.style.height = cubeSize + "px";
      cubeElt.style.margin = cubeSpace + "px";
      container.appendChild(cubeElt);
      wavesArr[hcubes].push(cubeElt);
    }
  }
  addEvents();
}

function addEvents() {
  wavesArr.forEach((cols, i) => {
    cols.forEach((wave, j) => {
      wave.addEventListener("click", () => {
        growCubes(i, j);
      });
    });
  });
}

function growCubes(i, j) {
  if (wavesArr[i] && wavesArr[i][j]) {
    if (!wavesArr[i][j].classList.contains("grow")) {
      wavesArr[i][j].classList.add("grow");
      setTimeout(() => {
        growCubes(i + 1, j);
        growCubes(i - 1, j);
        growCubes(i, j + 1);
        growCubes(i, j - 1);
      }, 100);
    }

    setTimeout(() => {
      wavesArr[i][j].classList.remove("grow");
    }, 300);
  }
}

main();
