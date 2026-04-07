// Cargar componentes HTML externos
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) element.innerHTML = html;
        return true;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        return false;
    }
}

// Cargar todos los componentes al iniciar
async function loadAllComponents() {
    const components = [
        { id: 'navbar-placeholder', path: 'components/navbar.html' },
        { id: 'header-placeholder', path: 'components/header.html' },
        { id: 'left-column-placeholder', path: 'components/left-column.html' },
        { id: 'right-column-placeholder', path: 'components/right-column.html' },
        { id: 'footer-placeholder', path: 'components/footer.html' }
    ];
    
    for (const component of components) {
        await loadComponent(component.id, component.path);
    }
    
    // Disparar evento personalizado cuando todos los componentes estén cargados
    const event = new CustomEvent('componentsLoaded');
    document.dispatchEvent(event);
}

// Iniciar carga
loadAllComponents();