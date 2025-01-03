class AppHeader extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // Template HTML
    shadow.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .header {
            top: 0;
            left: 0;
            width: 100%;
            height: 80px; /* Atur tinggi navbar */
            color: white; /* Pastikan di atas hero section */
            background-color: #222;
            z-index: 1000;
          }
       
          .header-title {
            margin-left: 50px;
            width: 350px;
            height: auto;
          }
          
          .app-bar {
            display: flex;
            justify-content: space-betweenw;
            align-items: center;
            padding: 1px;
            padding-right: 10px;
            margin: auto;
          }

          .app-logo {
            display: flex;
            align-items: center;
            flex-grow: 4;
          }

          .app-logo img {
            width: 60px;
            height: 60px;
          }
          .nav-item a {
            text-decoration: none;
            color: white;
            padding: 0.5rem 1rem;
            font-size: 1.2rem;
            transition: background-color 0.3s;
            min-width: 44px;
            min-height: 44px;
            display: inline-block;

          }

          .nav {
            list-style: none;
            display: flex; 
            justify-content: flex-end; 
            margin-right: 50px;
            padding: 0;
            text-decoration: none;
          }

          .nav-item {
            margin: 0;
            background-color: #222;
            
          }

          .header-menu {
            font-size: 2rem;
            cursor: pointer;
            text-decoration: none;
            min-height: 44px;
            min-width: 44px;
            display: inline-block;
            
          }

          #menu:visited {
            color: white;
          }

          #drawer .nav-item a {
            font-weight: 400;
            font-size: 1.5em;
            color: white;
            background-color: #222;
            text-decoration: none;
            padding: 10px;
            transition: background-color 0.3s;
            min-height: 44px;
          }

          .app-logo {
            font-size: 1.5em;
            font-weight: 250;
            letter-spacing: 3px;
          }

          #drawer .nav-item a:hover {
            color: #bcbcbc;
          }

          @media screen and (max-width: 873px) {
            .nav {
                    z-index: 1000;
                    top: 1.5rem;;
                    background-color: black;
                    width: 350px;
                    position: absolute;
                    flex-direction: column;
                    margin-left: -50px;
                    margin-top: 65px;
                    /* This trasform moves the drawer off canvas. */
                    -webkit-transform: translate(-350px, 0);
                    transform: translate(-350px, 0);
                    
                    /* Optionally, we animate the drawer. */
                    transition: transform 0.3s ease;
                }

                .open {
                    -webkit-transform: translate(0, 0);
                    transform: translate(0, 0);
                    
                    
                }

                .nav-item {
                    padding: 1em;
                    text-align:center;
                    
                } 

                .nav-item a {
                    min-width: 44px;
                    min-height: 44px;
                    display: inline-block;
                }
            }


            @media screen and (min-width: 873px) {
                .header-menu {
                    display: none;
                }
            }
        
        </style>
        <header class="header">
          <nav class="app-bar">
            <div class="app-logo">
              <img class="header-title" src="/images/logo/logo.png" alt=""> 
            </div>
            <a href="" id="menu" class="header-menu">☰</a>
            <ul id="drawer" class="nav">
              <li class="nav-item"><a href="#">Home</a></li>
              <li class="nav-item"><a href="#/cars">Cars</a></li>
              <li class="nav-item"><a href="#/contactus">Contact Us</a></li>
              <li class="nav-item"><a href="#/checkout">Checkout</a></li>
            </ul>
          </nav>
        </header>
      `;
  }

  connectedCallback() {
    const menu = this.shadowRoot.querySelector('#menu');
    const drawer = this.shadowRoot.querySelector('#drawer');

    menu.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(drawer);
    });

    document.addEventListener('click', (event) => {
      if (!this.contains(event.target) && event.target !== menu) {
        this._closeDrawer(drawer);
      }
    });

    console.log('AppHeader connected and event listeners added.');
  }

  _toggleDrawer(drawer) {
    drawer.classList.toggle('open');
  }

  _closeDrawer(drawer) {
    drawer.classList.remove('open');
  }
}

// Register the custom element
customElements.define('app-header', AppHeader);
