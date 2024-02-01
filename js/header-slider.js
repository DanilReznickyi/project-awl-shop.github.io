let currentSlideIndex = 1;

function showSlide(index) {
  document.querySelectorAll('.backgroundImage').forEach(image => {
    image.style.opacity = 0;
  });
  document.getElementById(`backgroundImage${index}`).style.opacity = 1;
  document.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active_dot');
  });
  document.getElementById(`dot${index}`).classList.add('active_dot');
  currentSlideIndex = index;
}
function handleCurrentSlide(index) {
  showSlide(index);
}
