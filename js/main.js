// ==================== INICIALIZACIÓN PRINCIPAL ====================

// Esperar a que los componentes estén cargados
document.addEventListener('componentsLoaded', () => {
    console.log('✅ Componentes cargados, inicializando aplicación...');
    
    // Inicializar todos los módulos
    setupContactReveal();
    setupGitHub();
    setupThemeToggle();
    setupMenu();
    setupPDFDownload();  // <-- Esta es la función nueva
    setupContactForm();
    setupGalleries();
    
    // Inicializar cambio de idioma
    if (typeof setupLanguageToggle === 'function') {
        setupLanguageToggle();
    }
    
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        changeLanguage('en');
    } else {
        changeLanguage('es');
    }
    
    console.log('🚀 CV Interactivo - Leonardo Méndez');
});

// Si los componentes ya están cargados
if (document.getElementById('navbar-placeholder')?.innerHTML) {
    const event = new CustomEvent('componentsLoaded');
    document.dispatchEvent(event);
}