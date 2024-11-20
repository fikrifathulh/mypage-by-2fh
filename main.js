import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  app.append(Header(), Main(), Footer());
});