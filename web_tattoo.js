document.addEventListener('DOMContentLoaded', () => {
  // === Modal solo si existe ===
  const modal = document.getElementById('modal-imagen');
  const modalImg = document.getElementById('img-grande');
  const cerrarModal = document.querySelector('.cerrar-modal');
  const imgs = document.querySelectorAll('.tattoo-card img');

  if (modal && modalImg && cerrarModal && imgs.length > 0) {
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }

  // === Desplegar categorías solo si hay botones ===
  const botones = document.querySelectorAll('.toggle-btn');
  if (botones.length > 0) {
    botones.forEach(btn => {
      btn.addEventListener('click', () => {
        const grid = btn.nextElementSibling;
        grid.classList.toggle('activo');
        btn.textContent = grid.classList.contains('activo')
          ? btn.textContent.replace('▾', '▴')
          : btn.textContent.replace('▴', '▾');
      });
    });
  }

  // === Efecto scroll en header
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scroll', window.scrollY > 10);
  });

  // === Menú hamburguesa (lo que te fallaba)
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("activo");
    });
  }
});


