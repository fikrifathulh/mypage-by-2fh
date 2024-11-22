export const Footer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML =
    `
        <div class="footer-content">
          <ul>
            <li>Copyright &copy; 2024 2FH</li>
            <li><a href="https://github.com/fikrifathulh">2FH GitHub</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#info">Info</a></li>
            <li><a href="#aboutme">About Me</a></li>
          </ul>
        </div>
    `
  return footer;
};

