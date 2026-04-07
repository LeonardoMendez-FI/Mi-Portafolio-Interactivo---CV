// Archivo principal - Inicialización y configuración global
(function() {
    // Esperar a que EmailJS cargue
    function initEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init(window.EMAILJS_USER_ID);
            console.log('✅ EmailJS inicializado correctamente');
        } else {
            console.error('❌ EmailJS no cargó correctamente');
        }
    }
    
    // Inicializar cuando todo esté listo
    document.addEventListener('componentsLoaded', () => {
        initEmailJS();
        ensureFooter();
        checkModules();
    });
    
    function ensureFooter() {
        const container = document.querySelector('.container');
        if (container && !document.querySelector('.footer')) {
            const footer = document.createElement('div');
            footer.className = 'footer';
            footer.innerHTML = `
                <p>© ${new Date().getFullYear()} Leonardo Octavio Méndez López - Ingeniería Mecatrónica, FI UNAM</p>
                <p style="font-size: 11px; margin-top: 8px;">Diseño y desarrollo por Leonardo Méndez</p>
            `;
            container.appendChild(footer);
        }
    }
    
    function checkModules() {
        console.log('%c✨ CV Leonardo Méndez - Todos los módulos cargados ✨', 'color: #e76f51; font-size: 14px; font-weight: bold;');
    }
    
    // Si los componentes ya están cargados
    if (document.querySelector('.modern-header')) {
        const event = new CustomEvent('componentsLoaded');
        document.dispatchEvent(event);
    }
})();