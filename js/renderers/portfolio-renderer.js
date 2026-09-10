function loc(value, lang) {
  if (value == null) return '';
  if (typeof value === 'string' || typeof value === 'number') return String(value);
  return value[lang] ?? value.es ?? value.en ?? '';
}
function visible(items) { return (items || []).filter(item => item.visible !== false); }
function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}
function resolveMedia(item, filename) {
  if (!filename) return '';
  if (/^(https?:|data:|\/)/i.test(filename)) return filename;
  return `${item.mediaFolder || ''}${filename}`;
}
function linkButtons(item, ui) {
  const specs = [
    ['github','🐙',ui.github], ['demo','🌐',ui.demo], ['documentation','📄',ui.documentation], ['certificate','🎓',ui.certificate]
  ];
  return specs.filter(([key]) => item.links?.[key]).map(([key,icon,label]) =>
    `<a class="github-link" href="${escapeHtml(item.links[key])}" target="_blank" rel="noopener noreferrer" data-tooltip="${escapeHtml(label)}" aria-label="${escapeHtml(label)}">${icon}</a>`
  ).join('');
}
function galleryHtml(item, lang, ui) {
  const gallery = (item.gallery || []).filter(Boolean);
  if (!gallery.length) return '';
  const id = `gallery-${item.id}`;
  const images = gallery.map((file, i) => `<img src="${escapeHtml(resolveMedia(item,file))}" alt="${escapeHtml(loc(item.title,lang))} ${i+1}" loading="lazy">`).join('');
  return `<div id="${id}" class="image-gallery"><div class="gallery-header"><span>📸 ${escapeHtml(ui.gallery)} - ${escapeHtml(loc(item.title,lang))}</span><button class="close-gallery" type="button" aria-label="${escapeHtml(ui.close)}">✖</button></div><div class="gallery-content">${images}</div></div>`;
}
function itemHtml(item, lang, ui) {
  const gallery = (item.gallery || []).filter(Boolean);
  const galleryButton = gallery.length ? `<button class="view-btn" type="button" data-target="gallery-${escapeHtml(item.id)}" data-tooltip="${escapeHtml(ui.viewGallery)}" aria-label="${escapeHtml(ui.viewGallery)}">👁️</button>` : '';
  const technologies = (item.technologies || []).map(t => `<span class="tech-badge">${escapeHtml(t)}</span>`).join('');
  const bullets = (item.items || []).map(x => `<li>${escapeHtml(loc(x,lang))}</li>`).join('');
  return `<article class="experience-item"><div class="item-header"><h4>${escapeHtml(loc(item.title,lang))}</h4><div class="item-buttons">${galleryButton}${linkButtons(item,ui)}</div></div><p class="date">${escapeHtml(loc(item.date,lang))}</p>${technologies ? `<div class="tech-stack">${technologies}</div>` : ''}${bullets ? `<ul class="achievements">${bullets}</ul>` : ''}${galleryHtml(item,lang,ui)}</article>`;
}

function renderPortfolio(data, lang='es') {
  const ui = data.ui[lang] || data.ui.es;
  document.documentElement.lang = lang;
  document.getElementById('headerName').innerHTML = loc(data.personal.name, lang);
  document.getElementById('headerTitle').textContent = loc(data.personal.title, lang);
  document.getElementById('headerTagline').textContent = loc(data.personal.tagline, lang);
  const profileImage = document.getElementById('profileImage');
  profileImage.src = data.personal.profileImage;
  profileImage.alt = loc(data.personal.name, lang).replace(/<br\s*\/?>/gi, ' ');

  const headings = {
    contactHeading:'contact', directContactHeading:'directContact', languagesHeading:'languages', skillsHeading:'techSkills',
    educationHeading:'education', sportsHeading:'sports', otherHeading:'otherInfo', profileHeading:'profile', toolsHeading:'tools',
    experienceHeading:'experience', projectsHeading:'projects', coursesHeading:'courses'
  };
  for (const [id,key] of Object.entries(headings)) document.getElementById(id).textContent = ui[key];
  document.getElementById('footerText').textContent = ui.footer;
  document.getElementById('profileText').textContent = loc(data.personal.profile,lang);

  document.getElementById('contactContent').innerHTML = `
    <div class="contact-protected"><div class="contact-icons-row">
      <div class="contact-icon-wrapper" data-type="email" data-tooltip="${escapeHtml(ui.showEmail)}"><button class="reveal-icon-btn" type="button" data-type="email">📧</button></div>
      <div class="contact-icon-wrapper" data-type="phone" data-tooltip="${escapeHtml(ui.showPhone)}"><button class="reveal-icon-btn" type="button" data-type="phone">📱</button></div>
      <div class="contact-icon-wrapper" data-tooltip="${escapeHtml(ui.openGithub)}"><button class="github-icon-btn" type="button" id="githubBtn">🐙</button></div>
    </div><div class="contact-values"><div class="contact-value-item" id="emailValueItem"></div><div class="contact-value-item" id="phoneValueItem"></div><div class="contact-value-item show">GitHub</div></div></div>`;
  document.getElementById('contactFormContent').innerHTML = `<form id="contactForm"><input type="text" id="nombre" name="nombre" placeholder="${escapeHtml(ui.namePlaceholder)}" required><input type="email" id="email" name="email" placeholder="${escapeHtml(ui.emailPlaceholder)}" required><textarea id="mensaje" name="mensaje" rows="3" placeholder="${escapeHtml(ui.messagePlaceholder)}" required></textarea><button type="submit">${ui.sendBtn}</button></form>`;

  document.getElementById('languagesContent').innerHTML = visible(data.languages).map(x => `<div class="language-item"><div class="language-info"><span>${x.icon || ''} ${escapeHtml(loc(x.name,lang))}</span><span>${escapeHtml(loc(x.level,lang))}</span></div><div class="language-bar"><div class="language-level" style="width:${Math.max(0,Math.min(100,Number(x.percent)||0))}%"></div></div></div>`).join('');
  document.getElementById('skillsContent').innerHTML = `<ul class="skills-list">${visible(data.skills).map(x => `<li>${x.icon || ''} <span>${escapeHtml(loc(x.name,lang))}</span></li>`).join('')}</ul>`;
  document.getElementById('educationContent').innerHTML = visible(data.education).map(x => `<div class="education-item"><h4>${escapeHtml(loc(x.title,lang))}</h4><p>${escapeHtml(loc(x.institution,lang))}<br>${escapeHtml(loc(x.period,lang))}</p></div>`).join('');
  document.getElementById('sportsContent').innerHTML = visible(data.achievements.sports).map(x => `<div class="education-item"><h4>${escapeHtml(loc(x.title,lang))}</h4><p>${escapeHtml(loc(x.date,lang))}</p><ul class="achievements">${(x.items||[]).map(i => `<li>${escapeHtml(loc(i,lang))}</li>`).join('')}</ul></div>`).join('');
  document.getElementById('otherContent').innerHTML = visible(data.achievements.other).map(x => `<div class="education-item"><h4>${escapeHtml(loc(x.title,lang))}</h4><p>${escapeHtml(loc(x.description,lang))}</p></div>`).join('');
  document.getElementById('toolsContent').innerHTML = visible(data.tools).map(x => `<div class="tool-item" data-tool="${escapeHtml(x.name)}"><img src="${escapeHtml(x.icon)}" alt="${escapeHtml(x.name)}" class="colored-icon" loading="lazy"><span class="tool-name">${escapeHtml(x.name)}</span></div>`).join('');
  document.getElementById('experienceContent').innerHTML = visible(data.experience).map(x => itemHtml(x,lang,ui)).join('');
  document.getElementById('projectsContent').innerHTML = visible(data.projects).map(x => itemHtml(x,lang,ui)).join('');
  document.getElementById('coursesContent').innerHTML = visible(data.courses).map(x => itemHtml(x,lang,ui)).join('');

  document.getElementById('menuTitle').textContent = ui.menuTitle;
  document.getElementById('themeToggle').dataset.tooltip = ui.changeTheme;
  document.getElementById('langToggle').dataset.tooltip = ui.changeLanguage;
  document.getElementById('downloadPDF').dataset.tooltip = ui.downloadPdf;
  document.getElementById('menuToggle').dataset.tooltip = ui.sectionsMenu;
  document.getElementById('langToggle').textContent = lang === 'es' ? '🦅' : '🇪🇸';
  window.PortfolioApp?.setupDynamicFeatures?.();
}
window.renderPortfolio = renderPortfolio;
window.portfolioLoc = loc;
