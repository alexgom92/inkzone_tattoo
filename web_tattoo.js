document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.tattoo-card img');
  const modal = document.getElementById('modal-imagen');
  const modalImg = document.getElementById('img-grande');
  const cerrarModal = document.querySelector('.cerrar-modal');

  imgs.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  window.addEventListener('scroll', () =>{
    document.querySelector('header').classList.toggle('scroll', window.scrollY > 10);
  });

  // Desplegar categorías
  const botones = document.querySelectorAll('.toggle-btn');
  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const grid = btn.nextElementSibling;
      grid.classList.toggle('activo');
      btn.textContent = grid.classList.contains('activo')
        ? btn.textContent.replace('▾', '▴')
        : btn.textContent.replace('▴', '▾');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('activo');
    });
  }
});

