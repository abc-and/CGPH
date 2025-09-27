const images = ['Codegreen1.jpg', 'Codegreen2.jpg', 'Codegreen3.jpg', 'Codegreen4.jpg', 'Codegreen5.jpg',  'Codegreen6.jpg'];
let currentImageIndex = 0;
const backgroundElement = document.body;

// Function to change the background image with a smooth transition
function changeBackgroundImage() {
    // Fade out the background
    backgroundElement.classList.add('fade-out');

    setTimeout(() => {
        // Change the background image after fade out
        backgroundElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Fade in the new background
        backgroundElement.classList.remove('fade-out');
        backgroundElement.classList.add('fade-in');
    }, 1000); // Matches the CSS transition duration (1 second)
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);

// Set the initial background image
changeBackgroundImage();

