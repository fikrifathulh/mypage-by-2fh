export const Header = () => {
  const header = document.createElement('header');
  header.innerHTML =
    `
    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#aboutme">About Me</a></li>
      </ul>
    </nav>
  `
  return header;
};
