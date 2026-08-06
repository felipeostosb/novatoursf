document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    if (header) {
        const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 50);

        updateHeader();
        window.addEventListener('scroll', () => {
            updateHeader();
        });
    }

    const slides = document.querySelectorAll('.hero-slide');

    if (slides.length > 1) {
        let slideActual = 0;

        setInterval(() => {
            slides[slideActual].classList.remove('active');
            slideActual = (slideActual + 1) % slides.length;
            slides[slideActual].classList.add('active');
        }, 5000);
    }

    const filterPills = document.querySelectorAll('.filter-pill');
    const blogCards = document.querySelectorAll('.insp-card');

    if (filterPills.length && blogCards.length) {
        filterPills.forEach((pill) => {
            pill.addEventListener('click', (event) => {
                event.preventDefault();

                filterPills.forEach((item) => item.classList.remove('active'));
                pill.classList.add('active');

                const categoriaFiltro = pill.dataset.filter;

                blogCards.forEach((card) => {
                    const categoriaCard = card.dataset.category;
                    const mostrar = categoriaFiltro === 'all' || categoriaCard === categoriaFiltro;
                    card.classList.toggle('is-hidden', !mostrar);
                });
            });
        });
    }
});