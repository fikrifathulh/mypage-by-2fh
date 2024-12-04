export const Main = () => {
  // const main = document.createElement("main");
  // main.innerHTML = `
  //     <section class="intro-section">
  //       <header>
  //         <h1>Welcome To 2FH First Page</h1>
  //         <p>
  //         See Info for information about the tools I use and
  //         see About Me for learn more about Me.
  //         </p>
  //       </header>
  //     </section>

  //     <section class="info-section" id="info">
  //       <header>
  //         <h1>Info</h1>
  //         <p>
  //         The tools I use to build this page is
  //         Neovim, VSCode, Vite, Javascript, and CSS.
  //         </p>
  //       </header>
  //     </section>

  //     <section class="aboutme-section" id="aboutme">
  //       <header>
  //         <h1>About Me</h1>
  //         <p>
  //         Hi, my name is Fikri Fathul H aka 2FH, 
  //         I have an interest in learning Javascript 
  //         and Web Development. You can found me at 
  //         GitHub.
  //         </p>
  //       </header>
  //     </section>
  //   `;

  //intro section
  const intro_h1 = document.createElement('h1');
  intro_h1.textContent = "Welcome To 2FH First Page";

  const intro_p = document.createElement('p');
  intro_p.textContent = "See Info for information about the tools I use and see About Me for learn more about Me.";

  const intro_header = document.createElement('header');
  intro_header.append(intro_h1, intro_p);

  const intro_section = document.createElement('section');
  intro_section.className = "intro-section";
  intro_section.append(intro_header);

  //info section
  const info_h1 = document.createElement('h1');
  info_h1.textContent = "Info";

  const info_p = document.createElement('p');
  info_p.textContent = "The tools I use to build this page is Neovim, VSCode, Vite, Javascript, and CSS.";
  const info_header = document.createElement('header');
  info_header.append(info_h1, info_p);

  const info_section = document.createElement('section');
  info_section.className = "info-section";
  info_section.id = "info";
  info_section.append(info_header);

  //aboutme section
  const aboutme_h1 = document.createElement('h1');
  aboutme_h1.textContent = "About Me";

  const aboutme_p = document.createElement('p');
  aboutme_p.textContent = "Hi, my name is Fikri Fathul H aka 2FH, I have an interest in learning Javascript and Web Development. You can found me at GitHub.";

  const aboutme_header = document.createElement('header');
  aboutme_header.append(aboutme_h1, aboutme_p);

  const aboutme_section = document.createElement('section');
  aboutme_section.className = "aboutme-section";
  aboutme_section.id = "aboutme";
  aboutme_section.append(aboutme_header);

  const main = document.createElement("main");
  main.append(intro_section, info_section, aboutme_section);

  return main;
};
