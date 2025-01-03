export const createCarDetailTemplate = (car) => `
  <section class="detail-product-container">
    <div class="detail-product">
      <div class="detail-product-left">
          <div class="detail-title">
              <h1>${car.nama}</h1>
              <p>Starts at:</p>
              <h2>$${car.harga}</h2>
              <button>Add To Favorite</button>
          </div>
      </div>
      <div class="detail-product-image">
          <img src="${car.gambar}" alt="${car.nama}">
      </div>  
    </div>
  </section>
  <section class="product-description-container">
      <div>
      <h2>${car.nama}</h2>
      <p>${car.deskripsi}</p>
    </div>
  </section>
  <h1 class="feature-spesification-h1">Feature & Spesification</h1>
  <section class="features-specifications-section">
    <div class="breadcrumbs">
      <button class="breadcrumb-button" id="btnFeatures">Feature</button>
      <button class="breadcrumb-button" id="btnSpecifications">Spesification</button>
    </div>
    <div class="content-container" id="contentContainer">
    </div>
  </section>
  <section class="customer-reviews">
  <h2>What our customers <span>Are Saying</span></h2>
  <div class="reviews-container">
    <div class="review">
      <div class="user-info">
        <img src="images/blank-profile.jpeg" alt="Foto" class="review-photo">
        <p>${car.ulasan[0].pengguna}</p>
      </div>
      <p>${'⭐'.repeat(car.ulasan[0].rating)}</p>
      <h3>${car.ulasan[0].komentar}</h3>
      <span class="time">7 Days Ago</span>
    </div>
    <div class="review">
      <div class="user-info">
        <img src="images/blank-profile.jpeg" alt="Foto" class="review-photo">
        <p>${car.ulasan[1].pengguna}</p>
      </div>
      <p>${'⭐'.repeat(car.ulasan[1].rating)}</p>
      <h3>${car.ulasan[1].komentar}</h3>
      <span class="time">3 Days Ago</span>
    </div>
</section>
`;


export const createContactUsTemplate = `
<div class="container">
        <section class="contact-text">
          <h1>Contact Us</h1>
          <h3>We’d Love to Hear From You!</h3>
          <p>Got questions, feedback, or just want to say hello? Reach out to us through any of the following channels:</p>
          <ul>
            <li>
              <p><bold>Email</bold></p>
              <p>📧<a href="">primeluxecars@gmail.com</a></p>
              <p>Feel free to send us an email, and we’ll get back to you within 24 hours.</p>
            </li>
            <li>
            <br>
            <p><bold>Phone</bold></p>
              <p>📞+1 234 567 890</p>
              <p>Call us during our business hours (Mon–Fri, 9 AM to 6 PM).</p>
            </li>
          </ul>
          </section>
        <section class="contact-section">
          <h1>Get in touch</h1>
          <p>You can reach us anytime</p>
          <br>
          <form class="contact-form">
              <input type="text" placeholder="First name" required>
              <input type="text" placeholder="Last name" required>
              <input type="email" placeholder="Your email" required>
              <input type="tel" placeholder="Phone number" required>
              <textarea placeholder="How can we help?" required></textarea>
              <button type="submit">Submit</button>
          </form>
        </section>
    </div>
    <div>
        <section class="location-section">
            <h2>Our Location</h2>
            <p>Connecting Near and Far</p>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sSnappy%20Inc.!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus" 
                width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <address>
                <strong>Headquarters</strong><br>
                Snappy Inc.<br>
                123 Tech Boulevard, Suite 456<br>
                San Francisco, CA 12345<br>
                United States
            </address>
        </section>
        <h2 style="font-size: 2rem; text-align: center;">FAQ</h2>
        <section class="faq-section-container">
          <div class="faq-email">
            <h3>Do you have any question for us?</h3>
            <p>If there are question you want to ask. We will answer all your question</p>
            <form class="faq-question-input">
              <input type="text" placeholder="Enter Your Email" required>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div class="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
              <button class="faq-question">How do I purchase a car on this website?</button>
              <div class="faq-answer">
                <p>You can search for the car you want, click the "Buy Now" button, and follow the instructions to complete your purchase. We also offer consultation services if you need assistance.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">Can I sell my car here?</button>
              <div class="faq-answer">
                <p>Yes, we provide a service to sell your car. Simply fill out the sales form with complete information about your car, and our team will contact you shortly to proceed.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">Is there a warranty for the cars I buy?</button>
              <div class="faq-answer">
                <p>All cars sold on our platform come with warranties that vary depending on the vehicle’s condition and sales agreement. Make sure to read the warranty details in the product description before purchasing.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">Can I pay in installments?</button>
              <div class="faq-answer">
                <p>Yes, we collaborate with trusted financial institutions to provide installment payment options. You can apply for financing directly on the car's product page.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question">How much does car delivery cost?</button>
              <div class="faq-answer">
                <p>The delivery cost depends on your location and the type of car being delivered. Shipping fees will be calculated automatically when you enter the shipping address at checkout.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
`;
