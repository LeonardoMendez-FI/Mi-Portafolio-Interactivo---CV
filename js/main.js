window.PortfolioApp = { data: null, lang: 'es' };

PortfolioApp.setupDynamicFeatures = function() {
  setupGallery();
  setupContact(PortfolioApp.data, PortfolioApp.lang);
  setupLanguage();
  setupMenu(PortfolioApp.data, PortfolioApp.lang);
};

document.addEventListener('DOMContentLoaded', async () => {
  const loading = document.getElementById('appLoading');
  const errorBox = document.getElementById('appError');
  try {
    await loadComponents();
    PortfolioApp.data = await loadPortfolioData();
    const savedLang = localStorage.getItem('language');
    PortfolioApp.lang = savedLang === 'en' ? 'en' : 'es';
    renderPortfolio(PortfolioApp.data, PortfolioApp.lang);
    setupTheme();
    setupPdf(PortfolioApp.data);
    loading.remove();
  } catch (error) {
    console.error(error);
    loading.remove();
    errorBox.hidden = false;
    errorBox.innerHTML = `<strong>No se pudo iniciar el portafolio.</strong><br>${error.message}<br><br>Si abriste index.html con doble clic, inicia un servidor local. Consulta README.md.`;
  }
});
