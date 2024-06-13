const accordions = document.querySelectorAll('.accordion');

accordions.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleAccordion(button);
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % accordions.length;
      accordions[nextIndex].querySelector('.acc-question').focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevIndex = (index - 1 + accordions.length) % accordions.length;
      accordions[prevIndex].querySelector('.acc-question').focus();
    }
  });
});

function toggleAccordion(button) {
  // Close any currently open accordion items
  accordions.forEach((item) => {
    const body = item.querySelector('.acc-answer');
    if (item !== button && body.classList.contains('active')) {
      body.classList.remove('active');
    }
  });

  // Toggle the clicked accordion item
  const body = button.querySelector('.acc-answer');
  body.classList.toggle('active');
}
