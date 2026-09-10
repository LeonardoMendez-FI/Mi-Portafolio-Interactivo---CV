// PDF profesional reconstruido a partir de /data.
// No imprime la pagina web: crea un CV independiente con formato carta y QR al portafolio.

function pdfLoc(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  return value[lang] ?? value.es ?? value.en ?? '';
}

function pdfVisible(items) {
  return (items || []).filter(item => item.visible !== false && item.pdfVisible !== false);
}

function pdfEscape(value = '') {
  return String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[ch]));
}

function pdfPlainName(data, lang) {
  const explicit = pdfLoc(data.personal?.pdfName, lang);
  if (explicit) return explicit;
  return pdfLoc(data.personal?.name, lang).replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim();
}

function getPortfolioURL(data) {
  const configured = data?.config?.pdf?.portfolioUrl || data?.personal?.contact?.portfolio || '';
  const current = window.location.href.split('#')[0].split('?')[0];
  const isLocal = /^(file:)|localhost|127\.0\.0\.1/i.test(current);
  return isLocal ? configured : (current || configured);
}

function generateQRCodeURL(value, size = 180) {
  return `https://quickchart.io/qr?text=${encodeURIComponent(value)}&size=${size}&margin=1&ecLevel=H`;
}

async function imageUrlToDataURL(url) {
  try {
    const response = await fetch(url, { mode: 'cors', cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.warn('No se pudo convertir el QR a data URL; se usara la URL remota.', error);
    return url;
  }
}

function pdfTech(technologies = []) {
  if (!technologies.length) return '';
  return `<div class="pdfcv-tech">${technologies.map(t => `<span>${pdfEscape(t)}</span>`).join('')}</div>`;
}

function pdfBullets(items, lang, maxItems = 2) {
  const selected = (items || []).slice(0, maxItems);
  if (!selected.length) return '';
  return `<ul class="pdfcv-list">${selected.map(item => `<li>${pdfEscape(pdfLoc(item, lang))}</li>`).join('')}</ul>`;
}

function pdfCompactDescription(item, lang) {
  const explicit = pdfLoc(item.pdfSummary, lang);
  if (explicit) return explicit;
  const first = (item.items || [])[0];
  return first ? pdfLoc(first, lang) : '';
}

function pdfExperienceItem(item, lang) {
  return `
    <article class="pdfcv-item pdfcv-exp-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <div class="pdfcv-item-date">${pdfEscape(pdfLoc(item.date, lang))}</div>
      ${pdfTech(item.technologies)}
      ${pdfBullets(item.items, lang, 2)}
    </article>`;
}

function pdfProjectItem(item, lang, detailed = false) {
  const description = pdfCompactDescription(item, lang);
  return `
    <article class="pdfcv-item pdfcv-project-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <div class="pdfcv-item-date">${pdfEscape(pdfLoc(item.date, lang))}</div>
      ${pdfTech(item.technologies)}
      ${detailed ? pdfBullets(item.items, lang, 2) : (description ? `<p class="pdfcv-description">${pdfEscape(description)}</p>` : '')}
    </article>`;
}

function pdfCourseItem(item, lang) {
  return `
    <article class="pdfcv-item pdfcv-course-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <div class="pdfcv-item-date">${pdfEscape(pdfLoc(item.date, lang))}</div>
      ${pdfBullets(item.items, lang, 2)}
    </article>`;
}

function pdfEducationItem(item, lang) {
  return `
    <article class="pdfcv-edu-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <div class="pdfcv-subtitle">${pdfEscape(pdfLoc(item.institution, lang))}</div>
      <div class="pdfcv-item-date">${pdfEscape(pdfLoc(item.period, lang))}</div>
    </article>`;
}

function pdfSection(title, content, extraClass = '') {
  if (!content) return '';
  return `<section class="pdfcv-section ${extraClass}"><h3>${pdfEscape(title)}</h3>${content}</section>`;
}

function buildProfessionalPdfHtml(data, lang, qrCodeSrc, portfolioURL) {
  const isEn = lang === 'en';
  const ui = data.ui?.[lang] || data.ui?.es || {};
  const cfg = data.config?.pdf || {};
  const personal = data.personal || {};
  const contact = personal.contact || {};

  const projects = pdfVisible(data.projects).slice(0, Number(cfg.maxProjects) || 6);
  const splitAt = Math.max(1, Math.min(projects.length, Number(cfg.projectsFirstPage) || 3));
  const projectsPage1 = projects.slice(0, splitAt);
  const projectsPage2 = projects.slice(splitAt);
  const courses = pdfVisible(data.courses).slice(0, Number(cfg.maxCourses) || 4);
  const experience = pdfVisible(data.experience);
  const skills = pdfVisible(data.skills);
  const education = pdfVisible(data.education);
  const languages = pdfVisible(data.languages);
  const tools = pdfVisible(data.tools);
  const sports = pdfVisible(data.achievements?.sports);
  const other = pdfVisible(data.achievements?.other);

  const name = pdfPlainName(data, lang);
  const title = pdfLoc(personal.pdfTitle, lang) || pdfLoc(personal.title, lang);
  const profile = pdfLoc(personal.profile, lang);
  const githubLabel = (contact.github || '').replace(/^https?:\/\/(www\.)?github\.com\//i, '').replace(/\/$/, '');

  const skillsHtml = skills.map(s => `<div class="pdfcv-skill">${pdfEscape(pdfLoc(s.name, lang))}</div>`).join('');
  const languagesHtml = languages.map(item => `
    <div class="pdfcv-language"><strong>${pdfEscape(pdfLoc(item.name, lang))}</strong><span>${pdfEscape(pdfLoc(item.level, lang))}</span></div>`).join('');
  const educationHtml = education.map(item => pdfEducationItem(item, lang)).join('');
  const experienceHtml = experience.map(item => pdfExperienceItem(item, lang)).join('');
  const project1Html = projectsPage1.map(item => pdfProjectItem(item, lang)).join('');
  const project2Html = projectsPage2.map(item => pdfProjectItem(item, lang, true)).join('');
  const coursesHtml = courses.map(item => pdfCourseItem(item, lang)).join('');
  const toolsHtml = tools.length ? `<div class="pdfcv-tool-list">${tools.map(t => `<span>${pdfEscape(t.name)}</span>`).join('')}</div>` : '';
  const sportsHtml = sports.map(item => `
    <article class="pdfcv-mini-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <div class="pdfcv-item-date">${pdfEscape(pdfLoc(item.date, lang))}</div>
      ${pdfBullets(item.items, lang, 2)}
    </article>`).join('');
  const otherHtml = other.map(item => `
    <article class="pdfcv-mini-item">
      <div class="pdfcv-item-title">${pdfEscape(pdfLoc(item.title, lang))}</div>
      <p class="pdfcv-description">${pdfEscape(pdfLoc(item.description, lang))}</p>
    </article>`).join('');

  const continuationTitle = isEn ? 'FEATURED PROJECTS - CONT.' : 'PROYECTOS DESTACADOS - CONT.';
  const portfolioCaption = isEn ? 'Scan to view interactive portfolio' : 'Escanea para ver el portafolio interactivo';
  const pageLabel = isEn ? 'Page' : 'Página';

  return `
    <style>
      @page { size: Letter; margin: 0; }
      .pdfcv-root, .pdfcv-root * { box-sizing: border-box; }
      .pdfcv-root {
        width: 8.5in;
        background: #fff;
        color: #30343b;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 10.5px;
        line-height: 1.36;
      }
      .pdfcv-page {
        width: 8.5in;
        height: 11in;
        padding: 0.42in 0.46in 0.34in;
        background: #fff;
        position: relative;
        overflow: hidden;
        page-break-after: always;
        break-after: page;
      }
      .pdfcv-page:last-child { page-break-after: auto; break-after: auto; }
      .pdfcv-header {
        border-bottom: 3px solid #2c7da0;
        padding-bottom: 12px;
        margin-bottom: 18px;
      }
      .pdfcv-header-main {
        display: grid;
        grid-template-columns: 1fr 88px;
        gap: 18px;
        align-items: center;
      }
      .pdfcv-header-text { text-align: center; padding-left: 80px; }
      .pdfcv-name {
        margin: 0 0 5px;
        color: #171928;
        font-size: 27px;
        line-height: 1.08;
        letter-spacing: .25px;
        font-weight: 700;
      }
      .pdfcv-role {
        margin: 0;
        color: #df765d;
        font-size: 15px;
        font-weight: 500;
      }
      .pdfcv-qr { text-align: center; }
      .pdfcv-qr img { width: 78px; height: 78px; display: block; margin: 0 auto; }
      .pdfcv-qr p { font-size: 7.5px; color: #7d858c; margin: 4px 0 0; line-height: 1.15; }
      .pdfcv-contact {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        flex-wrap: wrap;
        margin-top: 10px;
        color: #6e767d;
        font-size: 9.5px;
      }
      .pdfcv-contact a { color: inherit; text-decoration: none; }
      .pdfcv-grid {
        display: grid;
        grid-template-columns: 31.5% 1fr;
        gap: 25px;
      }
      .pdfcv-section { margin-bottom: 18px; }
      .pdfcv-section h3 {
        color: #2c7da0;
        font-size: 13px;
        letter-spacing: 1px;
        margin: 0 0 10px;
        padding-bottom: 6px;
        border-bottom: 2px solid #2c7da0;
        text-transform: uppercase;
      }
      .pdfcv-profile { text-align: justify; margin: 0; font-size: 10px; }
      .pdfcv-skill {
        border-left: 2px solid #8abfd0;
        padding: 2px 0 2px 7px;
        margin: 0 0 6px;
        font-size: 9.7px;
      }
      .pdfcv-language { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 7px; }
      .pdfcv-language span { color: #7b8288; text-align: right; }
      .pdfcv-edu-item, .pdfcv-mini-item { margin-bottom: 13px; }
      .pdfcv-item { margin-bottom: 13px; break-inside: avoid; page-break-inside: avoid; }
      .pdfcv-item-title { color: #df765d; font-size: 11.5px; font-weight: 700; line-height: 1.2; margin-bottom: 3px; }
      .pdfcv-subtitle { color: #2c7da0; font-size: 9.8px; font-weight: 600; margin-bottom: 2px; }
      .pdfcv-item-date { color: #90979d; font-size: 9px; margin-bottom: 4px; }
      .pdfcv-description { margin: 4px 0 0; font-size: 9.7px; }
      .pdfcv-tech { display: flex; flex-wrap: wrap; gap: 5px; margin: 5px 0; }
      .pdfcv-tech span, .pdfcv-tool-list span {
        background: #eaf5f8;
        color: #317d96;
        border-radius: 10px;
        padding: 2px 8px;
        font-size: 8.4px;
        font-weight: 600;
      }
      .pdfcv-list { list-style: none; margin: 5px 0 0; padding: 0; }
      .pdfcv-list li { position: relative; padding-left: 12px; margin-bottom: 3px; font-size: 9.6px; }
      .pdfcv-list li::before { content: '›'; position: absolute; left: 1px; color: #df765d; font-weight: 700; }
      .pdfcv-page2-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px solid #2c7da0;
        padding-bottom: 9px;
        margin-bottom: 17px;
      }
      .pdfcv-page2-header strong { color: #171928; font-size: 15px; }
      .pdfcv-page2-header span { color: #7d858c; font-size: 8.5px; }
      .pdfcv-tool-list { display: flex; flex-wrap: wrap; gap: 6px; }
      .pdfcv-page-footer {
        position: absolute;
        left: 0.46in;
        right: 0.46in;
        bottom: 0.16in;
        display: flex;
        justify-content: space-between;
        color: #a0a6ab;
        font-size: 7.5px;
        border-top: 1px solid #e4e7e9;
        padding-top: 5px;
      }
      .pdfcv-page-footer a { color: #6f99a8; text-decoration: none; }
    </style>

    <div class="pdfcv-root">
      <section class="pdfcv-page">
        <header class="pdfcv-header">
          <div class="pdfcv-header-main">
            <div class="pdfcv-header-text">
              <h1 class="pdfcv-name">${pdfEscape(name)}</h1>
              <h2 class="pdfcv-role">${pdfEscape(title)}</h2>
            </div>
            <div class="pdfcv-qr">
              <a href="${pdfEscape(portfolioURL)}"><img crossorigin="anonymous" src="${pdfEscape(qrCodeSrc)}" alt="QR"></a>
              <p>${portfolioCaption}</p>
            </div>
          </div>
          <div class="pdfcv-contact">
            ${contact.email ? `<a href="mailto:${pdfEscape(contact.email)}">${pdfEscape(contact.email)}</a>` : ''}
            ${contact.phone ? `<span>${pdfEscape(contact.phone)}</span>` : ''}
            ${contact.github ? `<a href="${pdfEscape(contact.github)}">GitHub: ${pdfEscape(githubLabel)}</a>` : ''}
          </div>
        </header>

        <div class="pdfcv-grid">
          <div>
            ${pdfSection(ui.profile || (isEn ? 'PROFILE' : 'PERFIL'), `<p class="pdfcv-profile">${pdfEscape(profile)}</p>`)}
            ${pdfSection(ui.techSkills || (isEn ? 'TECHNICAL SKILLS' : 'HABILIDADES TÉCNICAS'), skillsHtml)}
            ${pdfSection(ui.languages || (isEn ? 'LANGUAGES' : 'IDIOMAS'), languagesHtml)}
            ${pdfSection(ui.education || (isEn ? 'EDUCATION' : 'FORMACIÓN ACADÉMICA'), educationHtml)}
          </div>
          <div>
            ${pdfSection(ui.experience || (isEn ? 'EXPERIENCE' : 'EXPERIENCIA'), experienceHtml)}
            ${pdfSection(ui.projects || (isEn ? 'FEATURED PROJECTS' : 'PROYECTOS DESTACADOS'), project1Html)}
          </div>
        </div>

        <footer class="pdfcv-page-footer">
          <a href="${pdfEscape(portfolioURL)}">${pdfEscape(portfolioURL)}</a>
          <span>${pageLabel} 1 / 2</span>
        </footer>
      </section>

      <section class="pdfcv-page">
        <div class="pdfcv-page2-header">
          <strong>${pdfEscape(name)}</strong>
          <span>${pdfEscape(title)}</span>
        </div>

        <div class="pdfcv-grid">
          <div>
            ${pdfSection(isEn ? 'TOOLS' : 'HERRAMIENTAS', toolsHtml)}
            ${pdfSection(ui.sports || (isEn ? 'SPORTS ACHIEVEMENTS' : 'LOGROS DEPORTIVOS'), sportsHtml)}
            ${pdfSection(ui.otherInfo || (isEn ? 'OTHER INFORMATION' : 'OTROS DATOS'), otherHtml)}
          </div>
          <div>
            ${projectsPage2.length ? pdfSection(continuationTitle, project2Html) : ''}
            ${pdfSection(ui.courses || (isEn ? 'COURSES & EVENTS' : 'CURSOS Y EVENTOS'), coursesHtml)}
          </div>
        </div>

        <footer class="pdfcv-page-footer">
          <span>${isEn ? 'Interactive portfolio available through the QR code' : 'Portafolio interactivo disponible mediante el código QR'}</span>
          <span>${pageLabel} 2 / 2</span>
        </footer>
      </section>
    </div>`;
}

async function waitForPdfImages(root, timeoutMs = 8000) {
  const images = [...root.querySelectorAll('img')];
  if (!images.length) return;
  await Promise.all(images.map(img => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise(resolve => {
      const timeout = setTimeout(resolve, timeoutMs);
      const done = () => { clearTimeout(timeout); resolve(); };
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    });
  }));
}

async function downloadProfessionalPDF(data) {
  if (!window.html2pdf) {
    alert('html2pdf.js no esta disponible.');
    return;
  }

  const button = document.getElementById('downloadPDF');
  const original = button?.textContent || '⬇️';
  if (button) {
    button.textContent = '⏳';
    button.disabled = true;
  }

  let host = null;
  try {
    const lang = window.PortfolioApp?.lang || 'es';
    const portfolioURL = getPortfolioURL(data);
    if (!portfolioURL) throw new Error('No hay una URL del portafolio configurada para generar el QR.');

    const qrRemote = generateQRCodeURL(portfolioURL, 220);
    const qrCodeSrc = await imageUrlToDataURL(qrRemote);
    const html = buildProfessionalPdfHtml(data, lang, qrCodeSrc, portfolioURL);

    host = document.createElement('div');
    host.id = 'professional-pdf-source';
    host.style.position = 'absolute';
    host.style.left = '-12000px';
    host.style.top = '0';
    host.style.width = '8.5in';
    host.style.background = '#fff';
    host.innerHTML = html;
    document.body.appendChild(host);

    await waitForPdfImages(host);

    const cfg = data.config?.pdf || {};
    const date = new Date().toISOString().slice(0, 10);
    const defaultFilename = lang === 'en' ? `CV_Leonardo_Mendez_${date}_EN.pdf` : `CV_Leonardo_Mendez_${date}.pdf`;
    const filename = cfg.filename || defaultFilename;

    await html2pdf().set({
      margin: 0,
      filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: Number(cfg.scale) || 2,
        useCORS: true,
        allowTaint: false,
        logging: false,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'], before: '.pdfcv-page + .pdfcv-page' },
      enableLinks: true
    }).from(host.querySelector('.pdfcv-root')).save();
  } catch (error) {
    console.error('Error al generar el PDF profesional:', error);
    const lang = window.PortfolioApp?.lang || 'es';
    alert(lang === 'en' ? 'The professional PDF could not be generated.' : 'No se pudo generar el PDF profesional.');
  } finally {
    host?.remove();
    if (button) {
      button.textContent = original;
      button.disabled = false;
    }
  }
}

function setupPdf(data) {
  const button = document.getElementById('downloadPDF');
  if (!button) return;
  button.onclick = event => {
    event.preventDefault();
    downloadProfessionalPDF(data);
  };
}

window.setupPdf = setupPdf;
window.downloadProfessionalPDF = downloadProfessionalPDF;
window.buildProfessionalPdfHtml = buildProfessionalPdfHtml;
window.getPortfolioURL = getPortfolioURL;
window.generateQRCodeURL = generateQRCodeURL;
