import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import './components/app-header.js'; // Impor custom element

const app = new App({
  maincontent: document.querySelector('#mainContent'), // Pastikan ID ini sesuai
});

console.log('Custom element <app-header> loaded.');
