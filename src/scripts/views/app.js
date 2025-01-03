import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Home from './pages/home.js';


class App {
  constructor({ maincontent }) {
    this._mainContent = maincontent;
    this.render(); // Panggil render pada saat inisialisasi
  }

  render() {
    this._mainContent.innerHTML = ` 
        <section id="home-section"></section>
      `;

    // Memanggil render Home dan setelah itu menjalankan afterRender untuk Home
    Home.render().then((html) => {
      document.querySelector('#home-section').innerHTML = html;
      Home.afterRender();
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log('Parsed URL:', url); // Debugging Parsed URL
    const page = routes[url];

    if (!page) {
      console.error(`Page not found for URL: ${url}`); // Log error jika route tidak ditemukan
      this._mainContent.innerHTML = '<h2>Page Not Found</h2>';
      return;
    }

    console.log('Found Page:', page); // Debugging halaman yang cocok
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }


}

export default App;
