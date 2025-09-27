document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.animated-section');

    // Scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);

        // Flip card effect for Mission & Vision
        if (section.dataset.animation === 'flip-card') {
            section.addEventListener('click', () => {
                const flipCard = section.querySelector('.flip-card-inner');
                flipCard.style.transform = 'rotateY(180deg)';
            });
        }

        // Floating effect for the Cause section
        if (section.dataset.animation === 'float') {
            const floatingElement = document.createElement('div');
            floatingElement.classList.add('floating-leaf');
            section.appendChild(floatingElement);

            setInterval(() => {
                const randomX = Math.random() * 100;
                floatingElement.style.left = `${randomX}%`;
            }, 2000);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the element is in view (intersecting)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');
            } else {
                // Remove the 'visible' class when it's out of view, allowing re-animation
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Select all .goal-box elements and observe them
    document.querySelectorAll('.goal-box').forEach(box => {
        observer.observe(box);
    });
});


