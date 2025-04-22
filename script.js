document.addEventListener('DOMContentLoaded', () => {
  // Tab switching functionality
  const tabLinks = document.querySelectorAll('.tablink');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      tabLinks.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      link.classList.add('active');
      const tabId = link.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Modal functionality for "See More" buttons
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('.see-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parentLi = btn.closest('li');
      const imgSrc = parentLi.getAttribute('data-img');
      const desc = parentLi.getAttribute('data-desc');
      modalImage.src = imgSrc;
      modalDescription.textContent = desc;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
