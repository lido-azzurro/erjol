document.addEventListener('DOMContentLoaded', () => {
  // Tab switching functionality (si më parë)
  const tablinks = document.querySelectorAll('.tablink');
  const tabContents = document.querySelectorAll('.tab-content');

  tablinks.forEach(button => {
    button.addEventListener('click', () => {
      tablinks.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Modal logjika për visual search për pjatat
  const modal = document.getElementById('dish-modal');
  const modalImg = document.getElementById('modal-image');
  const modalDesc = document.getElementById('modal-description');
  const modalClose = document.querySelector('.modal-close');

  // Kur klikohen butonat "See More" ose elementet përkatëse
  const seeMoreButtons = document.querySelectorAll('.see-more');

  seeMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Parandalojmë klikimin e prapambetjes në listë
      event.stopPropagation();
      const listItem = button.closest('li');
      openModal(listItem);
    });
  });

  // Opsionale: Lejojmë edhe klikimin në të gjithë dish-itemin
  const dishItems = document.querySelectorAll('.dish-item');
  dishItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Nëse nuk është klikuar butoni "See More", hap modalin
      if (!event.target.classList.contains('see-more')) {
        const listItem = item.closest('li');
        openModal(listItem);
      }
    });
  });

  function openModal(listItem) {
    const imgSrc = listItem.getAttribute('data-img') || 'images/placeholder.jpg';
    const desc = listItem.getAttribute('data-desc') || 'Përshkrimi i pjatës.';
    modalImg.src = imgSrc;
    modalDesc.textContent = desc;
    modal.style.display = 'block';
  }

  // Mbyllja e modalit kur klikohet x ose jashtë modal-content
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
