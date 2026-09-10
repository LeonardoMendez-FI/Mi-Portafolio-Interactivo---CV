const DATA_FILES = {
  ui: 'data/ui.json', personal: 'data/personal.json', config: 'data/config.json',
  languages: 'data/languages.json', skills: 'data/skills.json', education: 'data/education.json',
  achievements: 'data/achievements.json', tools: 'data/tools.json', experience: 'data/experience.json',
  projects: 'data/projects.json', courses: 'data/courses.json'
};

async function loadPortfolioData() {
  const entries = await Promise.all(Object.entries(DATA_FILES).map(async ([key, path]) => {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`No se pudo cargar ${path}`);
    try { return [key, await response.json()]; }
    catch (error) { throw new Error(`JSON inválido en ${path}: ${error.message}`); }
  }));
  return Object.fromEntries(entries);
}
window.loadPortfolioData = loadPortfolioData;
