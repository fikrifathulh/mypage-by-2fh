import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Footer } from './components/Footer.js';

//const containerDiv = document.createElement('div');
//containerDiv.className = 'container';

//const innerDiv = document.createElement('div');
//innerDiv.appendChild(header);
//innerDiv.appendChild(main);

//containerDiv.appendChild(innerDiv);
//containerDiv.appendChild(footer);

const App = () => {
  const fragment = document.createDocumentFragment();

  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';

  const innerDiv = document.createElement('div');
  innerDiv.appendChild(Header);
  innerDiv.appendChild(Main);

  containerDiv.appendChild(innerDiv);
  containerDiv.appendChild(Footer);


  fragment.appendChild(containerDiv);

  return fragment;
};

export { App };
