// ==================== INICIALIZACIÓN PRINCIPAL ====================

// Esperar a que los componentes estén cargados
document.addEventListener('componentsLoaded', () => {
    console.log('✅ Componentes cargados, inicializando aplicación...');
    
    // Inicializar todos los módulos
    setupContactReveal();
    setupGitHub();
    setupThemeToggle();
    setupMenu();
    setupPDFDownload();
    setupContactForm();
    setupGalleries();
    
    // Inicializar idioma (español por defecto)
    changeLanguage('es');
    
    // Actualizar tooltips
    updateTooltips();
    
    console.log('🚀 CV Interactivo - Leonardo Méndez');
});

// Si los componentes ya están cargados antes de que se agregue el listener
if (document.getElementById('navbar-placeholder')?.innerHTML) {
    const event = new CustomEvent('componentsLoaded');
    document.dispatchEvent(event);
}