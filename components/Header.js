const Header = document.createElement('header');

document.getElementsByTagName('header').innerHTML =
  `
  <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#info">Info</a></li>
        <li><a href="#aboutme">About Me</a></li>
      </ul>
    </nav>
  `

export { Header };
