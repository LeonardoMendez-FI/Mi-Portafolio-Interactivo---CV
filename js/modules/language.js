function setupLanguage() {
  const btn = document.getElementById('langToggle');
  if (!btn || !window.PortfolioApp) return;
  btn.onclick = () => {
    window.PortfolioApp.lang = window.PortfolioApp.lang === 'es' ? 'en' : 'es';
    localStorage.setItem('language', window.PortfolioApp.lang);
    window.renderPortfolio(window.PortfolioApp.data, window.PortfolioApp.lang);
  };
}
window.setupLanguage = setupLanguage;
