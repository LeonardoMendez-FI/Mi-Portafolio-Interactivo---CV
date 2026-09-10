const COMPONENTS = {
  'navbar-placeholder': 'components/navbar.html',
  'header-placeholder': 'components/header.html',
  'left-column-placeholder': 'components/left-column.html',
  'right-column-placeholder': 'components/right-column.html',
  'footer-placeholder': 'components/footer.html'
};

async function loadComponents() {
  await Promise.all(Object.entries(COMPONENTS).map(async ([id, path]) => {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
    document.getElementById(id).innerHTML = await response.text();
  }));
}
window.loadComponents = loadComponents;
