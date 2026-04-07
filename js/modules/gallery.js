// Módulo de galerías de imágenes
(function() {
    function setupGalleries() {
        // Botones "Ver galería"
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
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
        
        // Botones de cerrar galería
        document.querySelectorAll('.close-gallery').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const gallery = closeBtn.closest('.image-gallery');
                if (gallery) {
                    gallery.classList.remove('show');
                }
            });
        });
        
        // Cerrar galería al hacer clic fuera (opcional)
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.image-gallery') && !e.target.closest('.view-btn')) {
                document.querySelectorAll('.image-gallery.show').forEach(gallery => {
                    gallery.classList.remove('show');
                });
            }
        });
    }

    document.addEventListener('componentsLoaded', () => {
        setupGalleries();
    });
})();