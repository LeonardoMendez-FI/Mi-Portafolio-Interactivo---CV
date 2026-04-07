// ==================== DATOS DE CONTACTO ====================
const emailContacto = "leonardo.mendez.fi@gmail.com";
const telefonoContacto = "+52 55 2285 9195";
const githubURL = "https://github.com/LeonardoMendez-FI";

// ==================== CONFIGURACIÓN EMAILJS ====================
const EMAILJS_USER_ID = "LNwegLC69TiSjQWXW";
const EMAILJS_SERVICE_ID = "service_f8c68qc";
const EMAILJS_TEMPLATE_ID = "template_ybj0tno";

// ==================== TRADUCCIONES ====================
const translations = {
    es: {
        name: "MÉNDEZ LÓPEZ<br>LEONARDO OCTAVIO",
        title: "ESTUDIANTE DE INGENIERÍA MECATRÓNICA",
        tagline: "Automatización · Robótica · Desarrollo de Software · Diseño Mecánico",
        contact: "CONTACTO",
        directContact: "CONTACTO DIRECTO",
        languages: "IDIOMAS",
        techSkills: "HABILIDADES TÉCNICAS",
        education: "FORMACIÓN ACADÉMICA",
        sports: "LOGROS DEPORTIVOS",
        otherInfo: "OTROS DATOS",
        profile: "PERFIL PROFESIONAL",
        tools: "HERRAMIENTAS",
        experience: "EXPERIENCIA",
        projects: "PROYECTOS DESTACADOS",
        courses: "CURSOS Y EVENTOS",
        sendBtn: "Enviar mensaje ✉️",
        spanishLevel: "Nativo",
        englishLevel: "Intermedio-Avanzado (B2)",
        skill1: "Uso de cautín y multímetro",
        skill2: "Paquetería Office (Word, Excel, PowerPoint)",
        skill3: "Ensamble y mantenimiento de equipos de cómputo",
        skill4: "Soldadura de componentes electrónicos",
        skill5: "Documentación técnica y reportes",
        skill6: "Interpretación de diagramas electrónicos",
        edu1Title: "Ingeniería Mecatrónica",
        edu1Desc: "Facultad de Ingeniería UNAM<br>2024 - Presente (6to Semestre)",
        edu2Title: "Técnico en Computación",
        edu2Desc: "ENP 9 Estudios Técnicos Especializados UNAM<br>2022 - 2024 (Titulación en proceso)",
        edu3Title: "Educación Media Superior",
        edu3Desc: "Escuela Nacional Preparatoria 9 UNAM<br>2021 - 2024",
        sportsTitle: "Flag Football - Equipo Representativo UNAM",
        sports1: "Integrante del equipo oficial de flag football",
        sports2: "Participación en torneos internos y representación institucional",
        sports3: "Desarrollo de disciplina, liderazgo y trabajo en equipo",
        sports4: "Compaginación exitosa de entrenamientos con estudios de ingeniería",
        militaryTitle: "Cartilla Militar Liberada",
        militaryDesc: "2024 - Situación militar definida, documentación en regla",
        profileText: "Estudiante de Ingeniería Mecatrónica en la Facultad de Ingeniería de la UNAM, con sólidos conocimientos en automatización, robótica, programación y diseño mecánico. Apasionado por la integración de sistemas mecatrónicos y el desarrollo de soluciones tecnológicas innovadoras. Destaco por mi capacidad de aprendizaje continuo, trabajo en equipo y orientación a resultados.",
        exp1Title: "Servicio Social - Programa UNAMITA",
        exp1Date: "Facultad de Filosofía y Letras, UNAM | Junio 2024 - Diciembre 2024",
        exp1_1: "Diseño de infografías y videos educativos para campañas de inclusión digital.",
        exp1_2: "Participación en talleres de difusión contra la brecha digital.",
        exp1_3: "Apoyo en la creación de contenido para redes sociales del programa.",
        proj1Title: "Traductor Texto-Braille (C - Programación Estructurada)",
        proj1Date: "Proyecto académico | 2024",
        proj1_1: "Implementación con lógica de búsqueda y mapeo mediante estructuras de datos básicas.",
        proj1_2: "Proyecto funcional muy por encima del nivel esperado en ese momento.",
        proj1_3: "Demuestra capacidad de resolver problemas complejos con recursos limitados.",
        proj2Title: "Integración Unity + Chaleco Háptico (ESP32) + VR Cardboard",
        proj2Date: "Proyecto académico y personal | 2026 - En desarrollo",
        proj2_1: "Desarrollo en Unity con comunicación serial vía WIFI con ESP32.",
        proj2_2: "Activación de motores en zonas específicas del chaleco para simular impactos.",
        proj2_3: "Integración con Google Cardboard para visualización VR.",
        proj3Title: "Videojuego \"SERI\"",
        proj3Date: "Proyecto Game Jam | 2026 - En desarrollo",
        proj3_1: "Desarrollo autodidacta con Godot Engine y GDScript.",
        proj3_2: "Implementación de mecánicas de juego y sistema de cinemáticas.",
        proj3_3: "Creación e integración de modelos 3D.",
        proj4Title: "Juego de Mesa Virtual \"Ultimate Nucleus\"",
        proj4Date: "Proyecto personal | 2025 - En desarrollo",
        proj4_1: "Migración de Python a Godot Engine para mejorar experiencia visual.",
        proj4_2: "Implementación de lógica de turnos, avance de fichas, reglas completas.",
        proj4_3: "Refactorización de código y control de versiones.",
        proj5Title: "Alcoholímetro con Arduino",
        proj5Date: "Proyecto personal | 2025",
        proj5_1: "Implementación con Arduino UNO, sensor de gas, LEDs y buzzer.",
        proj5_2: "Calibración manual del sensor MQ-3 y salida por monitor serial.",
        proj5_3: "Sistema de alerta con buzzer y niveles visuales (5 LEDs, 5 Niveles).",
        proj6Title: "Proyecto de Inyección de Plásticos",
        proj6Date: "Proyecto Académico | Facultad de Ingeniería, UNAM | 2025",
        proj6_1: "Diseño mecánico en Inventor y ensamble de componentes físicos.",
        proj6_2: "Sistema de calentamiento controlado y mecanismo de inyección manual.",
        proj6_3: "Presentación en exposición académica.",
        proj7Title: "CV Interactivo",
        proj7Date: "Proyecto personal | 2025",
        proj7_1: "Modo oscuro/claro y secciones colapsables.",
        proj7_2: "Generación de PDF con html2pdf.",
        proj7_3: "Protección de datos de contacto y diseño responsive.",
        course1Title: "Global Game Jam 2026",
        course1_1: "Game jam de una semana con temática \"Máscaras\".",
        course1_2: "Desarrollo completo de videojuego en equipo multidisciplinario.",
        course1_3: "Trabajo colaborativo bajo presión y resolución rápida de problemas.",
        course2Title: "Talent Land 2026",
        course2_1: "Asistencia a talleres y conferencias sobre videojuegos, IA, hardware y robótica.",
        course2_2: "Networking con profesionales y estudiantes de la región.",
        course3Title: "Competencia de Robótica - Sumo de Robots",
        course3Date: "Preparatoria 4, UNAM y Facultad de Ingeniería UNAM | 2024",
        course3_1: "Construcción y programación de robot autónomo para competencia.",
        course3_2: "Diseño mecánico con centro de gravedad bajo y tracción optimizada.",
        course3_3: "Programación de lógica de control con sensores infrarrojos.",
        course4Title: "Curso Básico de Robótica con Arduino",
        course4Date: "Asociación de Robótica Aplicada y Ciencias de la Tecnología (ARACT) | 2026",
        course4_1: "Manejo de entradas/salidas digitales y analógicas.",
        course4_2: "Sensores (ultrasonido, infrarrojos, temperatura) y actuadores.",
        course4_3: "Desarrollo de proyectos: semáforo, detector de objetos, sirena de policías.",
        tooltipEmail: "Mostrar email",
        tooltipPhone: "Mostrar teléfono",
        tooltipGithub: "Abrir GitHub",
        tooltipView: "Ver galería",
        tooltipLink: "Ver repositorio",
        tooltipTheme: "Cambiar tema",
        tooltipLang: "Cambiar idioma",
        tooltipDownload: "Descargar PDF",
        tooltipMenu: "Menú de secciones"
    },
    en: {
        name: "MÉNDEZ LÓPEZ<br>LEONARDO OCTAVIO",
        title: "MECHATRONICS ENGINEERING STUDENT",
        tagline: "Automation · Robotics · Software Development · Mechanical Design",
        contact: "CONTACT",
        directContact: "DIRECT CONTACT",
        languages: "LANGUAGES",
        techSkills: "TECHNICAL SKILLS",
        education: "EDUCATION",
        sports: "SPORTS ACHIEVEMENTS",
        otherInfo: "OTHER INFO",
        profile: "PROFESSIONAL PROFILE",
        tools: "TOOLS",
        experience: "EXPERIENCE",
        projects: "FEATURED PROJECTS",
        courses: "COURSES & EVENTS",
        sendBtn: "Send Message ✉️",
        spanishLevel: "Native",
        englishLevel: "Upper-Intermediate (B2)",
        skill1: "Soldering iron and multimeter usage",
        skill2: "Microsoft Office (Word, Excel, PowerPoint)",
        skill3: "Computer assembly and maintenance",
        skill4: "Electronic component soldering",
        skill5: "Technical documentation and reports",
        skill6: "Electronic diagram interpretation",
        edu1Title: "Mechatronics Engineering",
        edu1Desc: "Faculty of Engineering, UNAM<br>2024 - Present (6th Semester)",
        edu2Title: "Computer Technician",
        edu2Desc: "ENP 9 Technical Specialized Studies, UNAM<br>2022 - 2024 (Graduation in process)",
        edu3Title: "High School Education",
        edu3Desc: "National Preparatory School 9, UNAM<br>2021 - 2024",
        sportsTitle: "Flag Football - UNAM Representative Team",
        sports1: "Member of the official flag football team",
        sports2: "Participation in internal tournaments and institutional representation",
        sports3: "Development of discipline, leadership, and teamwork",
        sports4: "Successful balance of training with engineering studies",
        militaryTitle: "Military ID Released",
        militaryDesc: "2024 - Military status defined, documentation in order",
        profileText: "Mechatronics Engineering student at UNAM's Faculty of Engineering, with solid knowledge in automation, robotics, programming, and mechanical design. Passionate about integrating mechatronic systems and developing innovative technological solutions. I stand out for my continuous learning ability, teamwork, and results-oriented approach.",
        exp1Title: "Social Service - UNAMITA Program",
        exp1Date: "Faculty of Philosophy and Letters, UNAM | June 2024 - December 2024",
        exp1_1: "Design of infographics and educational videos for digital inclusion campaigns.",
        exp1_2: "Participation in workshops against the digital divide.",
        exp1_3: "Support in creating content for the program's social networks.",
        proj1Title: "Text-Braille Translator (C - Structured Programming)",
        proj1Date: "Academic Project | 2024",
        proj1_1: "Implementation with search logic and mapping using basic data structures.",
        proj1_2: "Functional project well above the expected level at that time.",
        proj1_3: "Demonstrates ability to solve complex problems with limited resources.",
        proj2Title: "Unity + Haptic Vest (ESP32) + VR Cardboard Integration",
        proj2Date: "Academic and Personal Project | 2026 - In Development",
        proj2_1: "Unity development with serial communication via WIFI with ESP32.",
        proj2_2: "Activation of motors in specific vest areas to simulate impacts.",
        proj2_3: "Integration with Google Cardboard for VR visualization.",
        proj3Title: "\"SERI\" Video Game",
        proj3Date: "Game Jam Project | 2026 - In Development",
        proj3_1: "Self-taught development with Godot Engine and GDScript.",
        proj3_2: "Implementation of game mechanics and cinematic system.",
        proj3_3: "Creation and integration of 3D models.",
        proj4Title: "\"Ultimate Nucleus\" Virtual Board Game",
        proj4Date: "Personal Project | 2025 - In Development",
        proj4_1: "Migration from Python to Godot Engine to improve visual experience.",
        proj4_2: "Implementation of turn logic, piece movement, complete rules.",
        proj4_3: "Code refactoring and version control.",
        proj5Title: "Arduino Breathalyzer",
        proj5Date: "Personal Project | 2025",
        proj5_1: "Implementation with Arduino UNO, gas sensor, LEDs and buzzer.",
        proj5_2: "Manual calibration of MQ-3 sensor and serial monitor output.",
        proj5_3: "Alert system with buzzer and visual levels (5 LEDs, 5 Levels).",
        proj6Title: "Plastic Injection Project",
        proj6Date: "Academic Project | Faculty of Engineering, UNAM | 2025",
        proj6_1: "Mechanical design in Inventor and assembly of physical components.",
        proj6_2: "Controlled heating system and manual injection mechanism.",
        proj6_3: "Presentation at academic exhibition.",
        proj7Title: "Interactive CV",
        proj7Date: "Personal Project | 2025",
        proj7_1: "Dark/light mode and collapsible sections.",
        proj7_2: "PDF generation with html2pdf.",
        proj7_3: "Contact data protection and responsive design.",
        course1Title: "Global Game Jam 2026",
        course1_1: "Week-long game jam with \"Masks\" theme.",
        course1_2: "Complete video game development in a multidisciplinary team.",
        course1_3: "Collaborative work under pressure and quick problem solving.",
        course2Title: "Talent Land 2026",
        course2_1: "Attendance at workshops and conferences on video games, AI, hardware, and robotics.",
        course2_2: "Networking with professionals and students from the region.",
        course3Title: "Robotics Competition - Robot Sumo",
        course3Date: "Preparatory School 4, UNAM and Faculty of Engineering, UNAM | 2024",
        course3_1: "Construction and programming of autonomous robot for competition.",
        course3_2: "Mechanical design with low center of gravity and optimized traction.",
        course3_3: "Control logic programming with infrared sensors.",
        course4Title: "Basic Robotics with Arduino Course",
        course4Date: "Applied Robotics and Technology Sciences Association (ARACT) | 2026",
        course4_1: "Management of digital and analog inputs/outputs.",
        course4_2: "Sensors (ultrasonic, infrared, temperature) and actuators.",
        course4_3: "Project development: traffic light, object detector, police siren.",
        tooltipEmail: "Show email",
        tooltipPhone: "Show phone",
        tooltipGithub: "Open GitHub",
        tooltipView: "View gallery",
        tooltipLink: "View repository",
        tooltipTheme: "Change theme",
        tooltipLang: "Change language",
        tooltipDownload: "Download PDF",
        tooltipMenu: "Sections menu"
    }
};

let currentLang = 'es';

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando CV Interactivo...');
    
    // 1. Inicializar EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_USER_ID);
        console.log('✅ EmailJS inicializado');
    } else {
        console.error('❌ EmailJS no cargó');
    }
    
    // 2. Configurar modo oscuro
    setupTheme();
    
    // 3. Configurar menú de secciones
    setupMenu();
    
    // 4. Configurar cambio de idioma
    setupLanguage();
    
    // 5. Configurar galerías
    setupGalleries();
    
    // 6. Configurar contacto (mostrar email/teléfono)
    setupContactReveal();
    
    // 7. Configurar GitHub
    setupGitHub();
    
    // 8. Configurar formulario de contacto
    setupContactForm();
    
    // 9. Configurar PDF
    setupPDFDownload();
    
    // 10. Actualizar tooltips
    updateTooltips();
    
    // 11. Establecer idioma inicial
    changeLanguage('es');
    
    console.log('✅ Inicialización completa');
});

// ==================== FUNCIONES ====================

function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        }
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sectionsMenu = document.getElementById('sectionsMenu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (menuToggle && sectionsMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sectionsMenu.classList.toggle('show');
        });
        
        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                sectionsMenu.classList.remove('show');
            });
        }
        
        document.addEventListener('click', (e) => {
            if (!sectionsMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                sectionsMenu.classList.remove('show');
            }
        });
    }
    
    // Navegación suave
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (sectionsMenu) sectionsMenu.classList.remove('show');
            }
        });
    });
}

function setupLanguage() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
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
    
    // Actualizar idiomas
    const spanishLangSpan = document.querySelector('.language-item:first-child .language-info span:first-child');
    const englishLangSpan = document.querySelector('.language-item:last-child .language-info span:first-child');
    if (spanishLangSpan) spanishLangSpan.innerHTML = lang === 'es' ? '🐆 Español' : '🐆 Spanish';
    if (englishLangSpan) englishLangSpan.innerHTML = lang === 'es' ? '🦅 Inglés' : '🦅 English';
    
    const spanishLevelSpan = document.querySelector('.language-item:first-child .language-info span:last-child');
    const englishLevelSpan = document.querySelector('.language-item:last-child .language-info span:last-child');
    if (spanishLevelSpan) spanishLevelSpan.innerHTML = t.spanishLevel;
    if (englishLevelSpan) englishLevelSpan.innerHTML = t.englishLevel;
    
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.innerHTML = lang === 'es' ? '🦅' : '🐆';
    
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeTextarea = document.getElementById('mensaje');
    if (nombreInput) nombreInput.placeholder = lang === 'es' ? 'Nombre completo' : 'Full name';
    if (emailInput) emailInput.placeholder = lang === 'es' ? 'Correo electrónico' : 'Email';
    if (mensajeTextarea) mensajeTextarea.placeholder = lang === 'es' ? 'Mensaje' : 'Message';
    
    updateTooltips();
}

function updateTooltips() {
    const t = translations[currentLang];
    
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
    if (emailWrapper) emailWrapper.setAttribute('data-tooltip', t.tooltipEmail);
    if (phoneWrapper) phoneWrapper.setAttribute('data-tooltip', t.tooltipPhone);
    
    document.querySelectorAll('.view-btn').forEach(btn => btn.setAttribute('data-tooltip', t.tooltipView));
    document.querySelectorAll('.github-link').forEach(btn => btn.setAttribute('data-tooltip', t.tooltipLink));
}

function setupContactReveal() {
    const emailWrapper = document.querySelector('.contact-icon-wrapper[data-type="email"]');
    const phoneWrapper = document.querySelector('.contact-icon-wrapper[data-type="phone"]');
    const emailValueDiv = document.getElementById('emailValueItem');
    const phoneValueDiv = document.getElementById('phoneValueItem');
    
    let emailVisible = false, phoneVisible = false;
    
    if (emailWrapper && emailValueDiv) {
        emailWrapper.addEventListener('click', () => {
            if (!emailVisible) {
                emailValueDiv.textContent = emailContacto;
                emailValueDiv.classList.add('show');
                emailVisible = true;
            } else {
                emailValueDiv.classList.remove('show');
                setTimeout(() => { emailValueDiv.textContent = ''; }, 300);
                emailVisible = false;
            }
        });
    }
    
    if (phoneWrapper && phoneValueDiv) {
        phoneWrapper.addEventListener('click', () => {
            if (!phoneVisible) {
                phoneValueDiv.textContent = telefonoContacto;
                phoneValueDiv.classList.add('show');
                phoneVisible = true;
            } else {
                phoneValueDiv.classList.remove('show');
                setTimeout(() => { phoneValueDiv.textContent = ''; }, 300);
                phoneVisible = false;
            }
        });
    }
}

function setupGitHub() {
    const githubBtn = document.getElementById('githubBtn');
    if (githubBtn) {
        githubBtn.addEventListener('click', () => window.open(githubURL, '_blank'));
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const mensaje = document.getElementById('mensaje')?.value || '';
        
        if (!nombre || !email || !mensaje) {
            alert(currentLang === 'es' ? '⚠️ Completa todos los campos.' : '⚠️ Fill all fields.');
            return;
        }
        
        if (!email.includes('@')) {
            alert(currentLang === 'es' ? '⚠️ Email válido.' : '⚠️ Valid email.');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn?.textContent || '';
        if (submitBtn) {
            submitBtn.textContent = currentLang === 'es' ? '⏳ Enviando...' : '⏳ Sending...';
            submitBtn.disabled = true;
        }
        
        try {
            const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                to_email: emailContacto,
                from_name: nombre,
                from_email: email,
                message: mensaje
            });
            
            if (response.status === 200) {
                alert(currentLang === 'es' ? `✅ ¡Gracias ${nombre}! Mensaje enviado.` : `✅ Thank you ${nombre}! Message sent.`);
                contactForm.reset();
            } else {
                throw new Error('Error');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(currentLang === 'es' ? '❌ Error al enviar. Intenta nuevamente.' : '❌ Error sending. Try again.');
        } finally {
            if (submitBtn) {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    });
}

function setupGalleries() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const gallery = document.getElementById(targetId);
            if (gallery) gallery.classList.add('show');
        });
    });
    
    document.querySelectorAll('.close-gallery').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const gallery = closeBtn.closest('.image-gallery');
            if (gallery) gallery.classList.remove('show');
        });
    });
}

function setupPDFDownload() {
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn && document.getElementById('cvContent')) {
        downloadBtn.addEventListener('click', async () => {
            const element = document.getElementById('cvContent');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) document.body.classList.remove('dark-mode');
            
            try {
                await html2pdf().set({
                    margin: 0.5,
                    filename: currentLang === 'es' ? 'CV_Leonardo_Mendez.pdf' : 'CV_Leonardo_Mendez_EN.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                }).from(element).save();
            } catch (error) {
                console.error('Error PDF:', error);
            }
            
            if (isDarkMode) document.body.classList.add('dark-mode');
        });
    }
}