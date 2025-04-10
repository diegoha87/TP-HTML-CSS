// Cargar header
fetch('header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el header');
        }
        return response.text();
    })
    .then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (!headerPlaceholder) {
            throw new Error('No se encontró el placeholder del header');
        }

        headerPlaceholder.innerHTML = data;

        // Verificar que los elementos existen
        const checkElements = () => {
            const hamburgerBtn = document.getElementById('hamburgerBtn');
            const navMenu = document.getElementById('navMenu');

            if (hamburgerBtn && navMenu) {
                setupToggleMenu(hamburgerBtn, navMenu);
                initDarkMode();
            } else {
                console.warn('Elementos no encontrados, reintentando...');
                setTimeout(checkElements, 100);
            }
        };

        checkElements();
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Cargar footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

function setupToggleMenu(hamburgerBtn, navMenu) {
    console.log('Inicializando menú toggle...');

    hamburgerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        // Cambiar ícono
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && e.target !== hamburgerBtn) {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            const icon = hamburgerBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
}

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    const body = document.body;
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

