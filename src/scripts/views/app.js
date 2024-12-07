class App {
  constructor({ maincontent }) {
    this._maincontent = maincontent;

    this._initialAppShell();
  }

  _initialAppShell() {
    console.log('App shell initialized');
  }
}

export default App;
