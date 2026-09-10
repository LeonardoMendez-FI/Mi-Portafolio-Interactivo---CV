function setupMenu(data, lang) {
  const ui = data.ui[lang] || data.ui.es;
  const menu = document.getElementById('sectionsMenu');
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('closeMenu');
  const content = document.getElementById('menuContent');
  const items = [
    ['perfil','👤',ui.profile],['herramientas','🛠️',ui.tools],['experiencia','💼',ui.experience],
    ['proyectos','🚀',ui.projects],['cursos','🎓',ui.courses],['contacto','✉️',ui.contact],
    ['habilidades','⚙️',ui.techSkills],['formacion','📚',ui.education]
  ];
  content.innerHTML = items.map(([id,icon,label]) => `<a class="menu-item" href="#${id}"><span>${icon}</span><span>${label}</span></a>`).join('');
  toggle.onclick = () => menu.classList.toggle('show');
  close.onclick = () => menu.classList.remove('show');
  content.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('show'));
}
window.setupMenu = setupMenu;
