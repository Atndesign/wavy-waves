let containerWidth = 400;
let containerHeight = 400;
let cubePerRow = 10;
let cubePerCol = 10;

function main() {
  initContainer();
}

function initContainer() {
  let container = document.createElement("div");
  container.classList.add("waves-container");
  container.style.width = containerWidth;
  container.style.height = containerHeight;
  document.body.appendChild(container);
}

main();

// for (let hcubes = 0; hcubes < hsize; hcubes++) {
//   for (let vcubes = 0; vcubes < vsize; vcubes++) {
//     let cubeElt = document.createElement("div");
//     cubeElt.classList.add("wave");
//     document.body.appendChild(cubeElt);
//   }
// }
