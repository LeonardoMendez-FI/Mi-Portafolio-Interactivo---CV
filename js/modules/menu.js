// Módulo del menú de navegación y secciones
(function() {
    function setupMenu() {
        console.log('📋 Configurando menú...');
        
        const menuToggle = document.getElementById('menuToggle');
        const sectionsMenu = document.getElementById('sectionsMenu');
        const closeMenu = document.querySelector('.close-menu');
        
        if (!menuToggle) {
            console.error('❌ Botón menuToggle no encontrado');
            return;
        }
        
        if (!sectionsMenu) {
            console.error('❌ sectionsMenu no encontrado');
            return;
        }
        
        // Abrir menú
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sectionsMenu.classList.toggle('show');
            console.log('📂 Menú toggled:', sectionsMenu.classList.contains('show'));
        });
        
        // Cerrar menú con botón X
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                sectionsMenu.classList.remove('show');
            });
        }
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (sectionsMenu && menuToggle && 
                !sectionsMenu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                sectionsMenu.classList.remove('show');
            }
        });
        
        // Navegación suave a secciones
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

    function setupLanguageToggle() {
        console.log('🌐 Configurando cambio de idioma...');
        
        const langToggle = document.getElementById('langToggle');
        if (!langToggle) {
            console.error('❌ Botón langToggle no encontrado');
            return;
        }
        
        langToggle.addEventListener('click', () => {
            const newLang = window.currentLang === 'es' ? 'en' : 'es';
            console.log('🔄 Cambiando idioma a:', newLang);
            if (typeof window.changeLanguage === 'function') {
                window.changeLanguage(newLang);
            } else {
                console.error('❌ function changeLanguage no está definida');
            }
        });
    }

    function updateTooltips() {
        const t = window.translations?.[window.currentLang];
        if (!t) return;
        
        const themeBtn = document.getElementById('themeToggle');
        const langBtn = document.getElementById('langToggle');
        const downloadBtn = document.getElementById('downloadPDF');
        const menuBtn = document.getElementById('menuToggle');
        
        if (themeBtn) themeBtn.setAttribute('data-tooltip', t.tooltipTheme);
        if (langBtn) langBtn.setAttribute('data-tooltip', t.tooltipLang);
        if (downloadBtn) downloadBtn.setAttribute('data-tooltip', t.tooltipDownload);
        if (menuBtn) menuBtn.setAttribute('data-tooltip', t.tooltipMenu);
        
        const emailWrapper = document.querySelector('.contact-icon-wrapper[data-type="email"]');
        const phoneWrapper = document.querySelector('.contact-icon-wrapper[data-type="phone"]');
        const githubWrapper = document.querySelector('.contact-icon-wrapper:last-child');
        
        if (emailWrapper) emailWrapper.setAttribute('data-tooltip', t.tooltipEmail);
        if (phoneWrapper) phoneWrapper.setAttribute('data-tooltip', t.tooltipPhone);
        if (githubWrapper) githubWrapper.setAttribute('data-tooltip', t.tooltipGithub);
        
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.setAttribute('data-tooltip', t.tooltipView);
        });
        
        document.querySelectorAll('.github-link').forEach(btn => {
            btn.setAttribute('data-tooltip', t.tooltipLink);
        });
    }

    function changeLanguage(lang) {
        console.log('🌎 Ejecutando changeLanguage a:', lang);
        
        window.currentLang = lang;
        const t = window.translations[lang];
        
        if (!t) {
            console.error('❌ Traducciones no encontradas para:', lang);
            return;
        }
        
        // Actualizar todos los elementos con data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (t[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else if (element.tagName === 'BUTTON' && key === 'sendBtn') {
                    element.innerHTML = t[key];
                } else {
                    element.innerHTML = t[key];
                }
            }
        });
        
        // Actualizar idiomas en la sección de idiomas
        const spanishLangSpan = document.querySelector('.language-item:first-child .language-info span:first-child');
        const englishLangSpan = document.querySelector('.language-item:last-child .language-info span:first-child');
        
        if (spanishLangSpan) {
            spanishLangSpan.innerHTML = lang === 'es' ? '🐆 Español' : '🐆 Spanish';
        }
        if (englishLangSpan) {
            englishLangSpan.innerHTML = lang === 'es' ? '🦅 Inglés' : '🦅 English';
        }
        
        const spanishLevelSpan = document.querySelector('.language-item:first-child .language-info span:last-child');
        const englishLevelSpan = document.querySelector('.language-item:last-child .language-info span:last-child');
        
        if (spanishLevelSpan) spanishLevelSpan.innerHTML = t.spanishLevel;
        if (englishLevelSpan) englishLevelSpan.innerHTML = t.englishLevel;
        
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.innerHTML = lang === 'es' ? '🦅' : '🐆';
        }
        
        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const mensajeTextarea = document.getElementById('mensaje');
        
        if (nombreInput) nombreInput.placeholder = lang === 'es' ? 'Nombre completo' : 'Full name';
        if (emailInput) emailInput.placeholder = lang === 'es' ? 'Correo electrónico' : 'Email';
        if (mensajeTextarea) mensajeTextarea.placeholder = lang === 'es' ? 'Mensaje' : 'Message';
        
        updateTooltips();
        console.log('✅ Idioma cambiado a:', lang);
    }

    // Exponer funciones globalmente
    window.changeLanguage = changeLanguage;
    window.updateTooltips = updateTooltips;

    // Esperar a que los componentes carguen
    document.addEventListener('componentsLoaded', () => {
        console.log('🎯 Inicializando módulo de menú...');
        setupMenu();
        setupLanguageToggle();
        updateTooltips();
        changeLanguage('es');
    });
    
    // Si ya hay componentes cargados
    if (document.querySelector('.modern-header')) {
        console.log('🎯 Componentes ya cargados, inicializando...');
        setTimeout(() => {
            setupMenu();
            setupLanguageToggle();
            updateTooltips();
            changeLanguage('es');
        }, 100);
    }
})();