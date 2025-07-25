document.addEventListener('DOMContentLoaded', () => {
  const fadeLeft = document.querySelector('.left .content');
  const fadeRight = document.querySelector('.right .content');
  const xboxBtn = document.querySelector('.right .btn');

  // Add fade-in animations on load
  fadeLeft.classList.add('fade-in-left');
  fadeRight.classList.add('fade-in-right');

  // Scroll to Xbox section when Buy Now button is clicked
  xboxBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let xboxSection = document.getElementById('xbox-section');
    if (xboxSection) {
      xboxSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
