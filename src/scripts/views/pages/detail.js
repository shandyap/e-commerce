import UrlParser from '../../routes/url-parser';
import { carsData } from '../../../public/data/CARS';
import { createCarDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <app-header></app-header>
      <div id="car-detail" class="car-detail"></div>
      <app-footer></app-footer>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const id = url.id; // Mendapatkan ID dari URL
    console.log('Parsed ID:', id); // Debugging ID yang diparsing

    if (!id) {
      console.error('No ID found in URL');
      return;
    }

    const car = carsData.find((item) => item.id === parseInt(id, 10));
    console.log('Car Data:', car); // Debugging data mobil

    if (!car) {
      document.querySelector('#car-detail').innerHTML = '<p>Mobil tidak ditemukan</p>';
      return;
    }

    document.querySelector('#car-detail').innerHTML = createCarDetailTemplate(car);
    const btnFeatures = document.getElementById('btnFeatures');
    const btnSpecifications = document.getElementById('btnSpecifications');
    const contentContainer = document.getElementById('contentContainer');

    btnFeatures.addEventListener('click', () => {
      // Ubah konten menjadi fitur
      contentContainer.innerHTML = `
        <ul>
          ${car.fitur.map((fitur) => `<li>${fitur}</li>`).join('')}
        </ul>
      `;
      toggleActiveButton(btnFeatures);
    });

    btnSpecifications.addEventListener('click', () => {
      // Ubah konten menjadi spesifikasi
      contentContainer.innerHTML = `
        <ul>
          <li><h3>Engine</h3></li>
          <li><h3>Power</h3></li>
          <li><h3>Transmission</h3></li>
          <li><h3>Passenger Capacity</h3></li>
          <li><h3>Luggage Capacity</h3></li>
        </ul>
        <ul>
          <li>${car.spesifikasi.mesin}</li>
          <li>${car.spesifikasi.tenaga}</li>
          <li>${car.spesifikasi.transmisi}</li>
          <li>${car.spesifikasi.kapasitas_penumpang}</li>
          <li>${car.spesifikasi.kapasitas_bagasi}</li>
        </ul>
      `;
      toggleActiveButton(btnSpecifications);
    });

    function toggleActiveButton(activeButton) {
      // Hapus kelas "active" dari semua tombol
      btnFeatures.classList.remove('active');
      btnSpecifications.classList.remove('active');

      // Tambahkan kelas "active" ke tombol yang diklik
      activeButton.classList.add('active');
    }

    // Set default tampilan ke fitur
    btnFeatures.click();

  },

};

export default Detail;
