document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // Puedes ajustar este valor según tu preferencia
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Cambiar a fondo sólido
      } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Mantener el fondo semi-transparente
      }
    });
  });

  