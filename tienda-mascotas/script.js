document.addEventListener('DOMContentLoaded', () => {
    // Librería AOS
    AOS.init({
    duration: 800,        // Duración de la animación en milisegundos
    easing: 'ease-in-out',// Curva de aceleración
    once: false,          // Repite las animaciones al volver a hacer scroll
    mirror: true          // Anima los elementos mientras se scrollea hacia arriba
  });

  console.log('🐾 Huellitas.co inicializado con éxito');
})