import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app'; // Impor App dari views
import './components/app-header.js'; // Impor custom element
import './components/app-footer.js';

// Inisialisasi aplikasi
const app = new App({
  maincontent: document.querySelector('#mainContent'), // Tempat untuk me-render Home
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});