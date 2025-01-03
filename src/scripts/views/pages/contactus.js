import { createContactUsTemplate } from '../templates/template-creator';

const ContactUs = {
  async render() {
    return `
      <app-header></app-header>
      <div id="contactUs" class="contact-us"></div>
      <app-footer></app-footer>
      `;
  },

  async afterRender() {
    document.querySelector('#contactUs').innerHTML = createContactUsTemplate;
    document.querySelectorAll('.faq-question').forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Close other answers if one is open
        document.querySelectorAll('.faq-answer').forEach((item) => {
          if (item !== answer) {
            item.style.display = 'none';
          }
        });

        // Toggle the current answer
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });

  },
};

export default ContactUs;