// ==================== GENERACIÓN DE PDF PROFESIONAL ====================

function generateProfessionalPDF() {
    const isEnglish = window.currentLang === 'en';
    const t = window.translations[window.currentLang];
    
    // Obtener datos actuales del CV
    const cvData = {
        name: "Leonardo Octavio Méndez López",
        title: isEnglish ? "Mechatronics Engineering Student" : "Estudiante de Ingeniería Mecatrónica",
        email: window.emailContacto,
        phone: window.telefonoContacto,
        github: window.githubURL,
        profile: t.profileText,
        skills: [
            t.skill1, t.skill2, t.skill3, t.skill4, t.skill5, t.skill6
        ],
        languages: [
            { name: isEnglish ? "Spanish" : "Español", level: isEnglish ? "Native" : "Nativo" },
            { name: isEnglish ? "English" : "Inglés", level: isEnglish ? "Upper-Intermediate (B2)" : "Intermedio-Avanzado (B2)" }
        ],
        education: [
            { title: t.edu1Title, institution: "FI UNAM", date: "2024 - Present", description: isEnglish ? "6th Semester" : "6to Semestre" },
            { title: t.edu2Title, institution: "ENP 9 UNAM", date: "2022 - 2024", description: isEnglish ? "Graduation in process" : "Titulación en proceso" },
            { title: t.edu3Title, institution: "ENP 9 UNAM", date: "2021 - 2024", description: "" }
        ],
        experience: [
            {
                title: t.exp1Title,
                company: "Facultad de Filosofía y Letras, UNAM",
                date: isEnglish ? "June 2024 - December 2024" : "Junio 2024 - Diciembre 2024",
                achievements: [t.exp1_1, t.exp1_2, t.exp1_3],
                tech: ["Canva", "InShot", "Photoshop"]
            }
        ],
        projects: [
            {
                title: t.proj1Title,
                date: "2024",
                description: isEnglish ? "Functional text-to-Braille translator implemented in C, demonstrating problem-solving with limited resources." : "Traductor texto-Braille funcional implementado en C, demostrando capacidad de resolución de problemas con recursos limitados.",
                tech: ["C"]
            },
            {
                title: t.proj2Title,
                date: "2026 - " + (isEnglish ? "In Development" : "En desarrollo"),
                description: isEnglish ? "Unity development with ESP32 communication for haptic feedback vest, integrated with Google Cardboard VR." : "Desarrollo en Unity con comunicación ESP32 para chaleco de retroalimentación háptica, integrado con VR Cardboard.",
                tech: ["Unity", "Arduino", "ESP32", "C++"]
            },
            {
                title: t.proj3Title,
                date: "2026 - " + (isEnglish ? "In Development" : "En desarrollo"),
                description: isEnglish ? "Self-taught game development with Godot Engine, implementing game mechanics and 3D model integration." : "Desarrollo autodidacta con Godot Engine, implementando mecánicas de juego e integración de modelos 3D.",
                tech: ["Godot", "GDScript", "Blender"]
            },
            {
                title: t.proj4Title,
                date: "2025 - " + (isEnglish ? "In Development" : "En desarrollo"),
                description: isEnglish ? "Virtual board game migrated from Python to Godot Engine, implementing turn logic and complete rules." : "Juego de mesa virtual migrado de Python a Godot Engine, implementando lógica de turnos y reglas completas.",
                tech: ["Python", "Godot", "GDScript"]
            },
            {
                title: t.proj5Title,
                date: "2025",
                description: isEnglish ? "Arduino-based breathalyzer with MQ-3 sensor, LED indicators, and buzzer alert system." : "Alcoholímetro basado en Arduino con sensor MQ-3, indicadores LED y sistema de alerta con buzzer.",
                tech: ["Arduino", "C++", "Electronics"]
            },
            {
                title: t.proj6Title,
                date: "2025",
                description: isEnglish ? "Mechanical design and assembly of plastic injection machine with controlled heating system." : "Diseño mecánico y ensamble de máquina de inyección de plásticos con sistema de calentamiento controlado.",
                tech: ["Inventor", "Mechanical Design", "Manufacturing"]
            },
            {
                title: t.proj7Title,
                date: "2025",
                description: isEnglish ? "Interactive CV with dark/light mode, PDF generation, and responsive design." : "CV interactivo con modo oscuro/claro, generación de PDF y diseño responsive.",
                tech: ["HTML5", "CSS3", "JavaScript"]
            }
        ],
        courses: [
            {
                title: t.course1Title,
                institution: "ENAC",
                date: "2026",
                description: isEnglish ? "Week-long game jam developing a complete video game in a multidisciplinary team." : "Game jam de una semana desarrollando un videojuego completo en equipo multidisciplinario."
            },
            {
                title: t.course2Title,
                institution: "CDMX",
                date: "2026",
                description: isEnglish ? "Attendance at workshops and conferences on video games, AI, hardware, and robotics." : "Asistencia a talleres y conferencias sobre videojuegos, IA, hardware y robótica."
            },
            {
                title: t.course3Title,
                institution: "UNAM",
                date: "2024",
                description: isEnglish ? "Construction and programming of autonomous robot for sumo competition with optimized design." : "Construcción y programación de robot autónomo para competencia de sumo con diseño optimizado."
            },
            {
                title: t.course4Title,
                institution: "ARACT",
                date: "2026",
                description: isEnglish ? "Arduino robotics course covering sensors, actuators, and project development." : "Curso de robótica con Arduino cubriendo sensores, actuadores y desarrollo de proyectos."
            }
        ]
    };
    
    // Crear el HTML del PDF
    const pdfHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>CV_${cvData.name.replace(/ /g, '_')}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Segoe UI', 'Montserrat', Arial, sans-serif;
                    line-height: 1.5;
                    color: #2d3436;
                    background: white;
                    padding: 40px;
                }
                
                .cv-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    background: white;
                }
                
                /* Header */
                .pdf-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 3px solid #2c7da0;
                }
                
                .pdf-header h1 {
                    font-size: 32px;
                    color: #1a1a2e;
                    margin-bottom: 5px;
                    letter-spacing: 1px;
                }
                
                .pdf-header h2 {
                    font-size: 18px;
                    color: #e76f51;
                    font-weight: 500;
                    margin-bottom: 15px;
                }
                
                .contact-row {
                    display: flex;
                    justify-content: center;
                    gap: 25px;
                    flex-wrap: wrap;
                    font-size: 13px;
                    color: #636e72;
                    margin-top: 10px;
                }
                
                .contact-row span {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }
                
                /* Grid layout */
                .pdf-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 30px;
                }
                
                /* Left column */
                .pdf-left h3, .pdf-right h3 {
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    padding-bottom: 8px;
                    border-bottom: 2px solid #2c7da0;
                    color: #2c7da0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                .section {
                    margin-bottom: 25px;
                }
                
                /* Skills */
                .skill-item {
                    margin-bottom: 8px;
                    font-size: 13px;
                    padding: 5px 0;
                }
                
                /* Languages */
                .lang-item {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-size: 13px;
                }
                
                .lang-name {
                    font-weight: 600;
                }
                
                .lang-level {
                    color: #636e72;
                }
                
                /* Education & Experience */
                .edu-item, .exp-item, .project-item, .course-item {
                    margin-bottom: 18px;
                }
                
                .item-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #e76f51;
                    margin-bottom: 3px;
                }
                
                .item-subtitle {
                    font-size: 12px;
                    color: #2c7da0;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                
                .item-date {
                    font-size: 11px;
                    color: #8899a6;
                    margin-bottom: 8px;
                }
                
                .item-description {
                    font-size: 12px;
                    color: #2d3436;
                    margin-top: 5px;
                }
                
                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin: 8px 0 5px 0;
                }
                
                .tech-badge {
                    background: #e8f4f8;
                    color: #2c7da0;
                    padding: 2px 10px;
                    border-radius: 12px;
                    font-size: 10px;
                    font-weight: 600;
                }
                
                .achievement-list {
                    list-style: none;
                    padding-left: 0;
                    margin-top: 5px;
                }
                
                .achievement-list li {
                    font-size: 12px;
                    margin-bottom: 5px;
                    padding-left: 16px;
                    position: relative;
                }
                
                .achievement-list li::before {
                    content: "▹";
                    position: absolute;
                    left: 0;
                    color: #e76f51;
                    font-size: 11px;
                }
                
                hr {
                    margin: 15px 0;
                    border: none;
                    border-top: 1px solid #e0e0e0;
                }
                
                .footer-pdf {
                    margin-top: 30px;
                    padding-top: 15px;
                    text-align: center;
                    font-size: 10px;
                    color: #b2bec3;
                    border-top: 1px solid #e0e0e0;
                }
                
                @media print {
                    body {
                        padding: 0;
                        margin: 0;
                    }
                    .cv-container {
                        max-width: 100%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="cv-container">
                <!-- Header -->
                <div class="pdf-header">
                    <h1>${cvData.name}</h1>
                    <h2>${cvData.title}</h2>
                    <div class="contact-row">
                        <span>📧 ${cvData.email}</span>
                        <span>📱 ${cvData.phone}</span>
                        <span>🐙 ${cvData.github.replace('https://github.com/', '')}</span>
                    </div>
                </div>
                
                <div class="pdf-grid">
                    <!-- Columna Izquierda -->
                    <div class="pdf-left">
                        <!-- Perfil -->
                        <div class="section">
                            <h3>${isEnglish ? 'PROFILE' : 'PERFIL'}</h3>
                            <p style="font-size: 12px; line-height: 1.5; text-align: justify;">${cvData.profile}</p>
                        </div>
                        
                        <!-- Habilidades Técnicas -->
                        <div class="section">
                            <h3>${isEnglish ? 'TECHNICAL SKILLS' : 'HABILIDADES TÉCNICAS'}</h3>
                            ${cvData.skills.map(skill => `<div class="skill-item">🔧 ${skill}</div>`).join('')}
                        </div>
                        
                        <!-- Idiomas -->
                        <div class="section">
                            <h3>${isEnglish ? 'LANGUAGES' : 'IDIOMAS'}</h3>
                            ${cvData.languages.map(lang => `
                                <div class="lang-item">
                                    <span class="lang-name">${lang.name}</span>
                                    <span class="lang-level">${lang.level}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- Educación -->
                        <div class="section">
                            <h3>${isEnglish ? 'EDUCATION' : 'FORMACIÓN ACADÉMICA'}</h3>
                            ${cvData.education.map(edu => `
                                <div class="edu-item">
                                    <div class="item-title">${edu.title}</div>
                                    <div class="item-subtitle">${edu.institution}</div>
                                    <div class="item-date">${edu.date}</div>
                                    ${edu.description ? `<div class="item-description">${edu.description}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- Columna Derecha -->
                    <div class="pdf-right">
                        <!-- Experiencia -->
                        <div class="section">
                            <h3>${isEnglish ? 'WORK EXPERIENCE' : 'EXPERIENCIA LABORAL'}</h3>
                            ${cvData.experience.map(exp => `
                                <div class="exp-item">
                                    <div class="item-title">${exp.title}</div>
                                    <div class="item-subtitle">${exp.company}</div>
                                    <div class="item-date">${exp.date}</div>
                                    <div class="tech-stack">
                                        ${exp.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                                    </div>
                                    <ul class="achievement-list">
                                        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- Proyectos Destacados -->
                        <div class="section">
                            <h3>${isEnglish ? 'FEATURED PROJECTS' : 'PROYECTOS DESTACADOS'}</h3>
                            ${cvData.projects.map(proj => `
                                <div class="project-item">
                                    <div class="item-title">${proj.title}</div>
                                    <div class="item-date">${proj.date}</div>
                                    <div class="tech-stack">
                                        ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                                    </div>
                                    <div class="item-description">${proj.description}</div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- Cursos y Eventos -->
                        <div class="section">
                            <h3>${isEnglish ? 'COURSES & EVENTS' : 'CURSOS Y EVENTOS'}</h3>
                            ${cvData.courses.map(course => `
                                <div class="course-item">
                                    <div class="item-title">${course.title}</div>
                                    <div class="item-subtitle">${course.institution}</div>
                                    <div class="item-date">${course.date}</div>
                                    <div class="item-description">${course.description}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="footer-pdf">
                    ${isEnglish ? 'CV generated from interactive portfolio' : 'CV generado desde portafolio interactivo'} - ${new Date().getFullYear()}
                </div>
            </div>
        </body>
        </html>
    `;
    
    return pdfHTML;
}

// Función para descargar el PDF profesional
async function downloadProfessionalPDF() {
    const downloadBtn = document.getElementById('downloadPDF');
    const originalText = downloadBtn?.textContent || '⬇️';
    
    if (downloadBtn) {
        downloadBtn.textContent = '⏳';
        downloadBtn.disabled = true;
    }
    
    try {
        const pdfHTML = generateProfessionalPDF();
        
        // Crear un elemento temporal para generar el PDF
        const element = document.createElement('div');
        element.innerHTML = pdfHTML;
        document.body.appendChild(element);
        
        const opt = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: window.currentLang === 'es' 
                ? `CV_Leonardo_Mendez_${new Date().toISOString().split('T')[0]}.pdf`
                : `CV_Leonardo_Mendez_${new Date().toISOString().split('T')[0]}_EN.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, logging: false },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        await html2pdf().set(opt).from(element).save();
        
        // Limpiar
        document.body.removeChild(element);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert(window.currentLang === 'es' 
            ? '❌ Error al generar el CV en PDF' 
            : '❌ Error generating PDF CV');
    } finally {
        if (downloadBtn) {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }
    }
}

// Configurar el botón de descarga
function setupPDFDownload() {
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn) {
        // Remover event listeners anteriores si existen
        const newBtn = downloadBtn.cloneNode(true);
        downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
        
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadProfessionalPDF();
        });
    }
}

// Exportar funciones
window.generateProfessionalPDF = generateProfessionalPDF;
window.downloadProfessionalPDF = downloadProfessionalPDF;
window.setupPDFDownload = setupPDFDownload;