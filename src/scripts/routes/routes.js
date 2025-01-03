import Detail from '../views/pages/detail';
import Cars from '../views/pages/cars';
import ContactUs from '../views/pages/contactus';
import Checkout from '../views/pages/checkout';
import Home from '../views/pages/home';


const routes = {
  '/': Home,
  '/home': Home,
  '/cars': Cars,
  '/contactus': ContactUs,
  '/checkout': Checkout,
  '/detail/:id': Detail, // Route dengan placeholder :id
};

export default routes;
