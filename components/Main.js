export const Main = () => {
  const main = document.createElement('main');
  main.innerHTML =
    `
      <section class="intro-section">
        <header>
          <h1>Welcome To 2FH First Page</h1>
          <p>
          See Info for information about the tools I use and
          see About Me for learn more about Me.
          </p>
        </header>
      </section>

      <section class="info-section" id="info">
        <header>
          <h1>Info</h1>
          <p>
          The tools I use to build this page is
          Neovim, VSCode, Vite, Javascript, and CSS.
          </p>
        </header>
      </section>

      <section class="aboutme-section" id="aboutme">
        <header>
          <h1>About Me</h1>
          <p>
          Hi, my name is Fikri Fathul H aka 2FH, 
          I have an interest in learning Javascript 
          and Web Development. You can found me at 
          GitHub.
          </p>
        </header>
      </section>
    `
  return main;
};
