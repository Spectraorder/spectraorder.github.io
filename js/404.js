const outerCircle = document.querySelectorAll('.circle');
const innerCircle = document.querySelectorAll('.one');
const orangeColumns = document.querySelectorAll('.two, .three');
const textElements = document.querySelectorAll('.p404');

let mousePos = { x: 0, y: 0 };

function calculateOffsets(baseMultiplier) {
  return {
    horizontal: ((mousePos.x - window.innerWidth / 2) / window.innerWidth) * baseMultiplier,
    vertical: ((mousePos.y - window.innerHeight / 2) / window.innerHeight) * baseMultiplier / 2,
  };
}

function updateAnimation() {
  const offsets = {
    outerCircle: calculateOffsets(40),
    innerCircle: calculateOffsets(30),
    orangeColumns: calculateOffsets(20),
    text: calculateOffsets(10),
  };

  outerCircle.forEach((element) => element.style.transform = `translate(${-offsets.outerCircle.horizontal}%, ${-offsets.outerCircle.vertical}%)`);
  innerCircle.forEach((element) => element.style.transform = `translate(${-offsets.innerCircle.horizontal}%, ${-offsets.innerCircle.vertical}%)`);
  orangeColumns.forEach((element) => element.style.transform = `translate(${-offsets.orangeColumns.horizontal}%, ${-offsets.orangeColumns.vertical}%)`);
  textElements.forEach((element) => element.style.transform = `translate(${-offsets.text.horizontal}%, ${-offsets.text.vertical}%)`);

  requestAnimationFrame(updateAnimation);
}

window.addEventListener("mousemove", (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

if(window.innerWidth>767){
  requestAnimationFrame(updateAnimation);
}
