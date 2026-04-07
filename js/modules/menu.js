// Menú de secciones
function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sectionsMenu = document.getElementById('sectionsMenu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (menuToggle && sectionsMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sectionsMenu.classList.toggle('show');
        });
    }
    
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            sectionsMenu.classList.remove('show');
        });
    }
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (sectionsMenu && !sectionsMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sectionsMenu.classList.remove('show');
        }
    });
    
    // Scroll suave a secciones
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                const offset = 80;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                if (sectionsMenu) sectionsMenu.classList.remove('show');
            }
        });
    });
}

window.setupMenu = setupMenu;