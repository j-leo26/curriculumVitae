import '../style.css';
import { initMDBComponents } from './modules/initMDB.js';

// Insertar componentes
function loadComponent(id, path, callback = () => {}) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      callback(); // 👈 ejecuta initMDB una vez insertado
    })
    .catch(err => console.error(`Error al cargar ${id}:`, err));
}

// Cargar componentes con inicialización
loadComponent('navbar', '/src/components/navbar.html', initMDBComponents);
loadComponent('footer', '/src/components/footer.html');
