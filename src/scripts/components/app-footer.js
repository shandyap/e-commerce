class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
          .footer {
            background-color: #222;
            color: #fff;
            padding: 40px 20px;
            font-size: 14px;
          }
  
          .footer-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            gap: 20px;
          }
  
          .footer-logo img {
            width: 120px;
            margin-bottom: 10px;
          }
  
          .footer-logo p {
            font-size: 14px;
            color: #bcbcbc;
          }
  
          .footer-links h3,
          .footer-socials h3 {
            margin-bottom: 10px;
            font-size: 18px;
          }
  
          .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
  
          .footer-links ul li {
            margin-bottom: 5px;
          }
  
          .footer-links ul li a {
            text-decoration: none;
            color: #bcbcbc;
            transition: color 0.3s ease;
          }
  
          .footer-links ul li a:hover {
            color: #fff;
          }
  
          .footer-socials .social-icons {
            display: flex;
            gap: 15px;
          }
  
          .footer-socials .social-icons a {
            color: #bcbcbc;
            font-size: 20px;
            transition: color 0.3s ease;
          }
  
          .footer-socials .social-icons a:hover {
            color: #fff;
          }
  
          .footer-bottom {
            text-align: center;
            margin-top: 20px;
            border-top: 1px solid #444;
            padding-top: 15px;
            font-size: 12px;
            color: #bcbcbc;
          }
        </style>
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-logo">
              <img src="/images/logo/logo.png" alt="Prime Luxe Cars Logo">
              <p>Prime Luxe Cars - Where Luxury Meets Performance.</p>
            </div>
            <div class="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div class="footer-socials">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.x.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.threads.net" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
                <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Prime Luxe Cars. All Rights Reserved.</p>
          </div>
        </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
