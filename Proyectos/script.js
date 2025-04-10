

// SCRIPT INDEX
// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 500;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Start counter animation when in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});


// Testimonial slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);



//SCRIPT CONTACTO
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalButton = document.getElementById('modalButton');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Mostrar spinner de carga
        submitBtn.classList.add('loading');

        // Simular envío (en un caso real sería una petición AJAX)
        setTimeout(function () {
            submitBtn.classList.remove('loading');

            // Mostrar modal de confirmación
            modalOverlay.classList.add('active');

            // Resetear formulario
            contactForm.reset();
        }, 1500);
    });

    // Cerrar modal
    modalClose.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
    });

    modalButton.addEventListener('click', function () {
        modalOverlay.classList.remove('active');
    });

    // Cerrar al hacer clic fuera del modal
    modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});

//SCRIPT PRECIOS

document.addEventListener('DOMContentLoaded', function () {
    const planToggle = document.getElementById('planToggle');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');
    const pricingTable = document.querySelector('.pricing-table');

    planToggle.addEventListener('change', function () {
        if (this.checked) {
            pricingTable.classList.add('annual-mode');
            monthlyLabel.classList.remove('active');
            annualLabel.classList.add('active');
        } else {
            pricingTable.classList.remove('annual-mode');
            monthlyLabel.classList.add('active');
            annualLabel.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los filtros y artículos
    const filters = document.querySelectorAll('.filter-input');
    const articles = document.querySelectorAll('.article-card');

    // Añadir evento a cada filtro
    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            const selectedCategory = this.id.replace('filter-', '');

            articles.forEach(article => {
                if (selectedCategory === 'all') {
                    article.classList.add('visible');
                } else {
                    if (article.dataset.category === selectedCategory) {
                        article.classList.add('visible');
                    } else {
                        article.classList.remove('visible');
                    }
                }
            });

            // Aplicar animación con ScrollReveal
            ScrollReveal().clean('.article-card.visible');
            ScrollReveal().reveal('.article-card.visible', {
                delay: 200,
                distance: '20px',
                origin: 'bottom',
                interval: 100,
                reset: true
            });
        });
    });

    // Inicializar ScrollReveal para todos los artículos visibles
    ScrollReveal().reveal('.article-card.visible', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100
    });
});


//Script blog fitness
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los filtros y artículos
    const filters = document.querySelectorAll('.filter-input');
    const articles = document.querySelectorAll('.article-card');

    // Añadir evento a cada filtro
    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            const selectedCategory = this.id.replace('filter-', '');

            articles.forEach(article => {
                if (selectedCategory === 'all') {
                    article.classList.add('visible');
                } else {
                    if (article.dataset.category === selectedCategory) {
                        article.classList.add('visible');
                    } else {
                        article.classList.remove('visible');
                    }
                }
            });

            // Aplicar animación con ScrollReveal
            ScrollReveal().clean('.article-card.visible');
            ScrollReveal().reveal('.article-card.visible', {
                delay: 200,
                distance: '20px',
                origin: 'bottom',
                interval: 100,
                reset: true
            });
        });
    });

    // Inicializar ScrollReveal para todos los artículos visibles
    ScrollReveal().reveal('.article-card.visible', {
        delay: 200,
        distance: '20px',
        origin: 'bottom',
        interval: 100

    });

});

//script clases
document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del filtro y las tarjetas de clase
    const filterInputs = document.querySelectorAll('.filter-input');
    const classCards = document.querySelectorAll('.class-card-clases');

    // Añadir evento a cada radio button del filtro
    filterInputs.forEach(input => {
        input.addEventListener('change', function () {
            const selectedCategory = this.id; // Obtiene el id del input seleccionado

            classCards.forEach(card => {
                // Mostrar todas las clases si se selecciona "Todas"
                if (selectedCategory === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }
                // Mostrar solo las clases de la categoría seleccionada
                else {
                    if (card.dataset.category === selectedCategory) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Inicializar animaciones para todas las clases al cargar
    classCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

