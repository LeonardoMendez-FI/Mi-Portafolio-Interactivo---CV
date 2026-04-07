// Galerías de imágenes
function setupGalleries() {
    // Abrir galerías
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const gallery = document.getElementById(targetId);
            if (gallery) {
                // Cerrar otras galerías
                document.querySelectorAll('.image-gallery.show').forEach(g => {
                    if (g.id !== targetId) g.classList.remove('show');
                });
                gallery.classList.add('show');
            }
        });
    });
    
    // Cerrar galerías
    document.querySelectorAll('.close-gallery').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const gallery = closeBtn.closest('.image-gallery');
            if (gallery) {
                gallery.classList.remove('show');
            }
        });
    });
    
    // Cerrar galería al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.image-gallery') && !e.target.closest('.view-btn')) {
            document.querySelectorAll('.image-gallery.show').forEach(gallery => {
                gallery.classList.remove('show');
            });
        }
    });
}

window.setupGalleries = setupGalleries;