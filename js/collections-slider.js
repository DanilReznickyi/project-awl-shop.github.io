let currentIndex = 0;
const cardWidth = document.querySelector('.collections_item').offsetWidth + 50;
const totalItems = document.querySelectorAll('.collections_item').length;
const sliderWrapper = document.querySelector('.slider_wrapper');

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlide();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateSlide();
}

function updateSlide() {
    const newLeftValue = -currentIndex * cardWidth + 'px';
    sliderWrapper.style.transform = `translateX(${newLeftValue})`;
}