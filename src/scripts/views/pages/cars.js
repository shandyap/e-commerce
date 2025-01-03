import { carsData } from '../../../public/data/CARS';

const Cars = {
  async render() {
    return `
      <app-header></app-header>
      <section class="new-arrival-container">
        <div class="new-arrival-inner">
          <h1>New Arrival</h1>
          <p>Porsche GT3-RS</p>
        </div>
        <div class="new-arrival-image" style="background-image: url('/images/cars/Porsche-GT3-Rs-Zeichnen.jpg');"></div>
      </section>
      <section class="car-list-container">
        <div class="our-collection">
          <h1>Our Collection</h1>
        </div>
        <div class="car-list" id="carList"></div>

      </section>
      
      <app-footer></app-footer>
    `;
  },

  async afterRender() {
    // Ambil elemen container
    const carListElement = document.getElementById('carList');

    // Render setiap mobil ke dalam container
    carsData.forEach((car) => {
      if (car.status === 'available') {
        const carHTML = `
          <a href="/#/detail/${car.id}" class="car-item">
            <img src="${car.gambar}" alt="${car.nama}">
            <h3>${car.nama} (${car.tahun})</h3>
            <p>${car.merek}</p>
          </a>
        `;
        carListElement.innerHTML += carHTML;
      }
    });
  }
};

export default Cars;
