// Obtener el botón de modo oscuro
const btnModoOscuro = document.getElementById('btnModoOscuro');
// Obtener el elemento <html para poder modificar su atributo data-theme
const html = document.documentElement;

// Añadir un listener al boton para que ejecute código cuando se haga clic 
btnModoOscuro.addEventListener('click', () => {
   //si el tema actual es oscuro
    if (html.dataset.theme === 'dark') {
        // cambiar a tema claro
    html.dataset.theme = 'light';
  } else {
    html.dataset.theme = 'dark'; //sino cambiar a oscuro
  }
  // Cambia el texto del botón según el tema actual
//Si el tema es oscuro, el botón mostrará "Modo claro" , Si el tema es claro, mostrará "Modo oscuro"
  btnModoOscuro.textContent = html.dataset.theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
});

