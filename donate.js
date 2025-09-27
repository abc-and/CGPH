document.querySelectorAll('.carousel').forEach(carousel => {
    let currentIndex = 0;
    const images = carousel.querySelectorAll('.carousel-image');

    setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 5000); 
});
