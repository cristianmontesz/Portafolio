// Obtener el selector de tema
const themeSelector = document.getElementById('theme-selector');

// Cambiar el tema según la selección del usuario
themeSelector.addEventListener('change', (event) => {
    // Remover todas las clases de temas previos
    document.body.classList.remove('minimal', 'retro', 'moderno');
    
    // Agregar la clase seleccionada
    const selectedTheme = event.target.value;
    document.body.classList.add(selectedTheme);
});

