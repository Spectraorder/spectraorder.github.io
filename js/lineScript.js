const path = document.querySelector('.line-container svg path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () =>{
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollStart = windowHeight / 2;
    const scrollEnd = documentHeight - windowHeight;
    const scrollPosition = window.scrollY;

    // Calculate scroll ratio
    let ratio = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
    ratio = Math.max(0, Math.min(ratio, 1));

    // Calculate scroll percentage using easing function
    const scrollPercentage = easeInOutQuad(ratio);
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = drawLength - pathLength;
    
})

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}