// Configurar EmailJS
const EMAILJS_USER_ID = "PMzO83rsu-P6T1ytI";
const EMAILJS_SERVICE_ID = "service_f8c68qc";
const EMAILJS_TEMPLATE_ID = "template_ybj0tno";

// Inicializar EmailJS
emailjs.init(EMAILJS_USER_ID);

// Mostrar/ocultar información de contacto
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

// Configurar GitHub
function setupGitHub() {
    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            window.open(window.githubURL, '_blank');
        });
    }
}

// Formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if (!nombre || !email || !mensaje) {
            alert(window.currentLang === 'es' ? '⚠️ Completa todos los campos.' : '⚠️ Fill all fields.');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert(window.currentLang === 'es' ? '⚠️ Email válido.' : '⚠️ Valid email.');
            return;
        }
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = window.currentLang === 'es' ? '⏳ Enviando...' : '⏳ Sending...';
        submitBtn.disabled = true;
        
        try {
            const templateParams = {
                to_email: window.emailContacto,
                from_name: nombre,
                from_email: email,
                message: mensaje,
                reply_to: email
            };
            
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            if (response.status === 200) {
                alert(window.currentLang === 'es' 
                    ? `✅ ¡Gracias ${nombre}! Mensaje enviado.`
                    : `✅ Thank you ${nombre}! Message sent.`);
                contactForm.reset();
            } else {
                throw new Error('Error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(window.currentLang === 'es' 
                ? '❌ Error al enviar. Intenta nuevamente.'
                : '❌ Error sending. Try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Exportar funciones
window.setupContactReveal = setupContactReveal;
window.setupGitHub = setupGitHub;
window.setupContactForm = setupContactForm;