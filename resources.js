// JavaScript to handle sliding effect in both carousels
const slideIndex = {
    letstaknowm: 0,
    greengazette: 0,
};

function changeSlide(sectionId, direction) {
    const track = document.querySelector(`#${sectionId} .carousel-track`);
    const slides = track.children;
    const totalSlides = slides.length;
    const visibleSlides = 3; // Show 3 topics at a time

    // Update the index based on direction, wrapping around if needed
    slideIndex[sectionId] = (slideIndex[sectionId] + direction + totalSlides) % totalSlides;

    // Constrain the sliding within the bounds
    const maxIndex = totalSlides - visibleSlides;
    if (slideIndex[sectionId] < 0) slideIndex[sectionId] = 0;
    else if (slideIndex[sectionId] > maxIndex) slideIndex[sectionId] = maxIndex;

    // Move the track to display the correct set of slides
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideIndex[sectionId] * slideWidth}px)`;
}
function showImages(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function hideImages(modalId) {
    document.getElementById(modalId).style.display = "none";
}

