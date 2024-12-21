document.addEventListener("DOMContentLoaded", function() {
    // Detect if the device is a touch device
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    // Hide the mouseCircle element on touch devices, show it on others
    if (isTouchDevice) {
        document.querySelector('.mouseCircle').style.display = 'none';
    } else {
        document.querySelector('.mouseCircle').style.display = 'block';
    }

    const blurOverlay = document.querySelector('.blur-overlay');
    const sidebar = document.querySelector(".menu-sidebar");
    const cards = gsap.utils.toArray('.menu-card');
    const overlayToggle = document.querySelector('.overlay-toggle');

    // Function to animate the cards into view
    function animateCardsIn() {
        gsap.to(cards, {
            right: '0%',
            stagger: 0.075,
            duration: 1,
            ease: "power4.out"
        });

        gsap.to(blurOverlay, {
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        });
    }

    // Function to animate the cards out of view
    function animateCardsOut() {
        gsap.to(cards, {
            right: '-110%',
            stagger: 0.075,
            duration: 1,
            ease: "power4.out"
        });

        gsap.to(blurOverlay, {
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });
    }

    // Toggle the overlay and card animations on overlayToggle click
    overlayToggle.addEventListener('click', () => {
        overlayToggle.classList.toggle('active');
        if (overlayToggle.classList.contains('active')) {
            sidebar.style.pointerEvents = "all";
            animateCardsIn();
        } else {
            sidebar.style.pointerEvents = "none";
            animateCardsOut();
        }
    });
    
    // Close the sidebar and animate cards out when any card is clicked
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            overlayToggle.classList.toggle('active');
            sidebar.style.pointerEvents = "none";
            animateCardsOut();
        });
    });

    const path = document.getElementById('wave-path');
    let animationFrame;
    let isAnimating = false;

    // Function to animate the wave path
    function animateWave() {
        let t = 0;
        function wave() {
            const amplitude = 80;
            const frequency = 0.1;
            t += 0.1;
            const newPath = `M 0 5 Q 25 ${5 + amplitude * Math.sin(frequency * t)}, 50 5 Q 75 ${-1 * (-5 + amplitude * Math.sin(frequency * t))}, 100 5`;
            path.setAttribute('d', newPath);
            animationFrame = requestAnimationFrame(wave);
        }
        wave();
    }

    // Start the wave animation
    function startWaveAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animateWave();
        }
    }

    // Stop the wave animation and reset the path
    function stopWaveAnimation() {
        if (isAnimating) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
            path.setAttribute('d', 'M 0 5 Q 25 5, 50 5 Q 75 5, 100 5');
            isAnimating = false;
        }
    }

    // Play the audio when the page loads
    const audio = document.getElementById('background-music');
    audio.volume = 0;

    function playAudio() {
        audio.play();
        fadeInAudio();
        startWaveAnimation();
    }

    function fadeInAudio() {
        audio.volume = 0;
        const fadeInInterval = setInterval(() => {
            if (audio.volume < 0.5) {
                audio.volume += 0.1;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 200);
    }

    function fadeOutAudio() {
        const fadeOutInterval = setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume -= 0.1;
            } else {
                clearInterval(fadeOutInterval);
                audio.pause();
            }
        }, 200);
    }

    document.addEventListener('click', function playOnClick() {
        playAudio();
        document.removeEventListener('click', playOnClick);
    });

    // audio.addEventListener('play', startWaveAnimation);
    // audio.addEventListener('pause', stopWaveAnimation);

    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play();
    });

    // Toggle the wave animation on volume-icon click
    document.querySelector('.volume-icon').addEventListener('click', () => {
        if (isAnimating) {
            fadeOutAudio();
            stopWaveAnimation();
        } else {
            audio.play();
            fadeInAudio();
            startWaveAnimation();
        }
    });

    const myName = document.querySelector('.my-name');

    // Function to handle scroll events and add/remove animation class to myName
    function handleScroll() {
        const isVisible = window.scrollY >= myName.offsetTop - window.innerHeight;
        if (isVisible) {
            myName.classList.add('animate');
        } else {
            myName.classList.remove('animate');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Adjust the SVG size and position based on window size
    function adjustSVG() {
        const svgElement = document.querySelector('.line-container svg');
        const windowWidth = window.innerWidth;
    
        const minWidth = 2450;
        const baseScale = 1;
        const baseTranslateY = 100;
        
        let scale = baseScale;
        let translateY = baseTranslateY;
    
        if (windowWidth > minWidth) {
            const excessWidth = windowWidth - minWidth;
            
            scale = baseScale + (excessWidth / minWidth) * 2;
            translateY = baseTranslateY + (excessWidth / 10);
        }
    
        svgElement.style.transform = `translateX(-250px) scale(${scale}) translateY(${translateY}px)`;
    }

    // Adjust the SVG on window resize and load
    window.addEventListener('resize', adjustSVG);
    window.addEventListener('load', adjustSVG);

    // Apply parallax scrolling effect if the window width is greater than 767px
    if (window.innerWidth > 767) {
        window.addEventListener('scroll', () => {
            const scrollLine = document.querySelectorAll(".parallax");
            let index = 0, length = scrollLine.length;
            for (index; index < length; index++) {
                const pos = window.pageYOffset * scrollLine[index].dataset.rate;
        
                if (scrollLine[index].dataset.direction === 'vertical') {
                    scrollLine[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
                } else {
                    const posX = window.pageYOffset * scrollLine[index].dataset.ratex;
                    const posY = window.pageYOffset * scrollLine[index].dataset.ratey;
                    scrollLine[index].style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
                }
            }
        });
    }
});
