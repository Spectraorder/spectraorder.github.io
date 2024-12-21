const mouseCircleElement = document.querySelector('.mouseCircle');

const mousePos = {x:0, y:0};
const mousePrevPos = {x:0, y:0};
const circlePos = {x:0, y:0};
let currentScale = 0;
let currentAngle = 0;

window.addEventListener('mousemove', (e) => {
    mousePos.x = e.x;
    mousePos.y = e.y;
});

const speed = 0.17

const tick = () => {
    circlePos.x += (mousePos.x - circlePos.x) * speed;
    circlePos.y += (mousePos.y - circlePos.y) * speed;

    const translateTransform = `translate(${circlePos.x}px, ${circlePos.y}px)`;

    const deltaMouseX = mousePos.x - mousePrevPos.x;
    const deltaMouseY = mousePos.y - mousePrevPos.y;
    mousePrevPos.x = mousePos.x;
    mousePrevPos.y = mousePos.y;

    const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150);
    const scaleValue = mouseVelocity / 300;

    currentScale += (scaleValue - currentScale) * speed;

    const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

    const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;

    if (mouseVelocity > 20) {
        currentAngle = angle
    }

    const rotateTransform = `rotate(${currentAngle}deg)`;

    mouseCircleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

    window.requestAnimationFrame(tick);
}

tick();