document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});




// ==========================================
// 📸 SLIDER DE IMÁGENES (PORTADA)
// ==========================================

const slides = document.querySelectorAll('.hero-slide');
let slideActual = 0;
function cambiarSlide() {

    slides[slideActual].classList.remove('active');
    slideActual = (slideActual + 1) % slides.length;
    slides[slideActual].classList.add('active');
}

setInterval(cambiarSlide, 5000);