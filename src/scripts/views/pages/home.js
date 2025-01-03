import { carsData } from '../../../public/data/CARS';

const Home = {
  async render() {
    return `
          <app-header></app-header>
          <section class="hero-container">
            <div class="hero-inner">
                <h1>Prime Luxe Cars</h1>
                <p style="color: #bcbcbc;">Experience the Finest Selection of Luxury Cars</p>    
            </div>
            <div class="hero-images">
              <div class="hero-image active" style="background-image: url('/images/heros/hero1.jpg');"></div>
              <div class="hero-image" style="background-image: url('/images/heros/hero2.jpg');"></div>
              <div class="hero-image" style="background-image: url('/images/heros/hero3.jpg');"></div>
            </div>
          </section>
          <section class="cta-section">
            <div class="cta-container">
              <h2>Your Dream Car Awaits</h2>
              <p>Explore our luxurious collection and find the perfect car that matches your lifestyle.</p>
              <a href="/inventory" class="cta-button">See All</a>
            </div>
          </section>

          <section class="cars-section">
            <div id="cars-container" class="cars-container">
              <!-- Cards akan dimuat secara dinamis di sini -->
            </div>
          </section>

          <section class="about-us">
            <h2>About Us</h2>
            <div class="about-content">
                <div class="about-text">
                <p>At Prime Luxe Cars, we are committed to providing our customers with the finest selection of luxury automobiles. With years of experience in the automotive industry, we have built a reputation for offering top-quality vehicles, exceptional customer service, and unmatched expertise. Our team is passionate about cars and dedicated to helping you find the perfect vehicle that fits your style, needs, and budget.
                   We believe that purchasing a luxury car is more than just a transaction; it’s an experience. Our showroom features a wide range of prestigious brands, including Ferrari, Lamborghini, Mercedes-Benz, Porsche, and more, each vehicle meticulously chosen for its performance, design, and craftsmanship. Whether you’re seeking a powerful sports car, a sophisticated sedan, or an elegant SUV, Prime Luxe Cars offers a variety of models that cater to your every desire.
                </p>
                </div>
                <div class="about-images">
                <img src="/images/about/car1.jpg" alt="Car 1">
                <img src="/images/about/car2.jpg" alt="Car 2">
                </div>
            </div>
          </section>



          <section class="blog-section">
            <h2>Latest Articles</h2>
            <div class="blogs">
              <div class="blog-card">
                <img src="/images/blog/img1.jpg" alt="Blog 1">
                <h3>Fastest Supercar in the World in 2023</h3>
                <p>Learn how to pick the perfect luxury car for your needs, balancing style and performance...</p>
                <a href="https://www.kompasiana.com/raffipasha9887/6752eb2134777c4c2c59a962/5-supercar-tercepat-di-dunia-pada-tahun-2023" class="read-more">Read More</a>
              </div>
              <div class="blog-card">
                <img src="/images/blog/img2.jpg" alt="Blog 2">
                <h3>Electric Car Revolution: Innovation That Changes the Automotive World</h3>
                <p>Explore how electric vehicles are reshaping the world of luxury cars and eco-friendly driving...</p>
                <a href="https://www.kompasiana.com/ninobalmy/674557f5ed641570db290ff3/revolusi-mobil-listrik-inovasi-terbaru-yang-mengubah-dunia-otomotif" class="read-more">Read More</a>
              </div>
              <div class="blog-card">
                <img src="/images/blog/img3.jpg" alt="Blog 3">
                <h3>Electric Cars, Are They the Right Way to a Green World?</h3>
                <p>In recent years, electric cars (EV or Electric Vehicle) have entered a global trend.</p>
                <a href="https://www.kompasiana.com/russell40005/673c7d9b34777c474718b93a/mobil-listrik-apakah-jalan-yang-tepat-menuju-dunia-hijau" class="read-more">Read More</a>
              </div>
            </div>
          </section>
          <app-footer></app-footer>


        `;
  },

  async afterRender() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.hero-image');
    const totalImages = images.length;

    // Setiap gambar dalam hero-images harus memiliki posisi absolut dan tersembunyi
    images.forEach((image) => {
      image.style.position = 'absolute';
      image.style.width = '100%';
      image.style.height = '100%';
      image.style.opacity = '0';
      image.style.transition = 'opacity 1s ease'; // Transisi memudar
    });

    // Tampilkan gambar pertama
    images[currentIndex].style.opacity = '1';

    // Fungsi untuk memperbarui carousel
    function updateCarousel() {
      images[currentIndex].style.opacity = '0'; // Sembunyikan gambar saat ini
      currentIndex = (currentIndex + 1) % totalImages; // Ganti ke gambar berikutnya
      images[currentIndex].style.opacity = '1'; // Tampilkan gambar berikutnya
    }

    // Jalankan updateCarousel setiap 5 detik (5000ms)
    setInterval(updateCarousel, 5000);




    // Load Cars Data Untuk Cars Card
    const carsContainer = document.getElementById('cars-container');

    // Filter dan ambil data berdasarkan id
    const filteredCars = carsData.filter((car) => car.id >= 7 && car.id <= 10).slice(0, 4);

    // Render data mobil ke dalam cards
    filteredCars.forEach((car) => {
      const carCard = document.createElement('div');
      carCard.classList.add('car-card');

      carCard.innerHTML = `
        <img src="${car.gambar}" alt="${car.nama}" class="car-image">
        <div class="car-details">
          <h3>${car.nama}</h3>
          <p class="car-price">$${car.harga.toLocaleString()}</p>
          <a href="#/detail/${car.id}" class="car-button">View Details</a>
        </div>
      `;

      carsContainer.appendChild(carCard);
    });
  }
};

export default Home;
