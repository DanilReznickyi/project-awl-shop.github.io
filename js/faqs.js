function toggleFAQ(faqNumber) {
  const faqItem = document.querySelector(`.faq-item:nth-child(${faqNumber})`);
  faqItem.classList.toggle('opened');
  const faqContent = faqItem.querySelector('.faq-content');
  const toggleButton = faqItem.querySelector('.toggle-button');

  if (faqItem.classList.contains('opened')) {
    faqContent.style.display = 'block';
  } else {
    faqContent.style.display = 'none';
  }

  toggleButton.textContent = faqItem.classList.contains('opened') ? '▲' : '▼';
}