// Módulo de contacto - Revelar información y GitHub
(function() {
    function setupContactReveal() {
        const emailWrapper = document.querySelector('.contact-icon-wrapper[data-type="email"]');
        const phoneWrapper = document.querySelector('.contact-icon-wrapper[data-type="phone"]');
        const emailValueDiv = document.getElementById('emailValueItem');
        const phoneValueDiv = document.getElementById('phoneValueItem');
        
        let emailVisible = false;
        let phoneVisible = false;
        
        if (emailWrapper && emailValueDiv) {
            emailWrapper.addEventListener('click', () => {
                if (!emailVisible) {
                    emailValueDiv.textContent = window.emailContacto;
                    emailValueDiv.classList.add('show');
                    emailVisible = true;
                } else {
                    emailValueDiv.classList.remove('show');
                    setTimeout(() => {
                        emailValueDiv.textContent = '';
                    }, 300);
                    emailVisible = false;
                }
            });
        }
        
        if (phoneWrapper && phoneValueDiv) {
            phoneWrapper.addEventListener('click', () => {
                if (!phoneVisible) {
                    phoneValueDiv.textContent = window.telefonoContacto;
                    phoneValueDiv.classList.add('show');
                    phoneVisible = true;
                } else {
                    phoneValueDiv.classList.remove('show');
                    setTimeout(() => {
                        phoneValueDiv.textContent = '';
                    }, 300);
                    phoneVisible = false;
                }
            });
        }
    }

    function setupGitHub() {
        const githubBtn = document.getElementById('githubBtn');
        if (githubBtn) {
            githubBtn.addEventListener('click', () => {
                window.open(window.githubURL, '_blank');
            });
        }
    }

    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.error('❌ Formulario de contacto no encontrado');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const mensaje = document.getElementById('mensaje')?.value || '';
            
            console.log('📝 Intentando enviar formulario...', { nombre, email });
            
            if (!nombre || !email || !mensaje) {
                alert(window.currentLang === 'es' ? '⚠️ Completa todos los campos.' : '⚠️ Fill all fields.');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert(window.currentLang === 'es' ? '⚠️ Email válido.' : '⚠️ Valid email.');
                return;
            }
            
            const originalText = submitBtn?.textContent || '';
            if (submitBtn) {
                submitBtn.textContent = window.currentLang === 'es' ? '⏳ Enviando...' : '⏳ Sending...';
                submitBtn.disabled = true;
            }
            
            try {
                // Verificar que EmailJS esté disponible
                if (typeof emailjs === 'undefined') {
                    throw new Error('EmailJS no está cargado');
                }
                
                const templateParams = {
                    to_email: window.emailContacto,
                    from_name: nombre,
                    from_email: email,
                    message: mensaje,
                    reply_to: email
                };
                
                console.log('📧 Enviando con parámetros:', templateParams);
                
                const response = await emailjs.send(
                    window.EMAILJS_SERVICE_ID,
                    window.EMAILJS_TEMPLATE_ID,
                    templateParams
                );
                
                console.log('✅ Respuesta de EmailJS:', response);
                
                if (response.status === 200) {
                    alert(window.currentLang === 'es' 
                        ? `✅ ¡Gracias ${nombre}! Mensaje enviado.`
                        : `✅ Thank you ${nombre}! Message sent.`);
                    contactForm.reset();
                } else {
                    throw new Error('Error en la respuesta');
                }
            } catch (error) {
                console.error('❌ Error detallado:', error);
                alert(window.currentLang === 'es' 
                    ? '❌ Error al enviar. Intenta nuevamente.\nVerifica la consola para más detalles.'
                    : '❌ Error sending. Try again.\nCheck console for details.');
            } finally {
                if (submitBtn) {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            }
        });
    }

    // Inicializar cuando los componentes estén cargados
    document.addEventListener('componentsLoaded', () => {
        console.log('🔧 Inicializando módulo de contacto...');
        setupContactReveal();
        setupGitHub();
        setupContactForm();
    });
})();