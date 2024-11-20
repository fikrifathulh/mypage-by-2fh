import { App } from './App.js';

const root = document.getElementById('root');
if (root) {
  root.appendChild(App());
} else {
  alert('Not Found');
}
