export const Header = () => {
  //anchor
  const home = document.createElement("a");
  home.href = "#";
  home.textContent = "Home";
  const info = document.createElement("a");
  info.href = "#info";
  info.textContent = "Info";
  const aboutme = document.createElement("a");
  aboutme.href = "#aboutme";
  aboutme.textContent = "About Me";

  //list
  const home_li = document.createElement("li");
  home_li.append(home);
  const info_li = document.createElement("li");
  info_li.append(info);
  const aboutme_li = document.createElement("li");
  aboutme_li.append(aboutme);

  //unordered list
  const navbar_ul = document.createElement("ul");
  navbar_ul.append(home_li, info_li, aboutme_li);

  //navbar
  const navbar = document.createElement("nav");
  navbar.className = "navbar";
  navbar.append(navbar_ul);

  //header
  const header = document.createElement("header");
  header.append(navbar);

  return header;
};
