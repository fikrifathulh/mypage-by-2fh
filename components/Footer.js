export const Footer = () => {
  //copyright
  const copy = document.createElement('li');
  copy.textContent = "Copyright © 2024 2FH";

  //anchor
  const github = document.createElement('a');
  github.href = "https://github.com/fikrifathulh";
  github.textContent = "2FH GitHub";

  const foot_home = document.createElement('a');
  foot_home.href = "#";
  foot_home.textContent = "Home";

  const foot_info = document.createElement('a');
  foot_info.href = "#info";
  foot_info.textContent = "Info";

  const foot_aboutme = document.createElement('a');
  foot_aboutme.href = "#aboutme";
  foot_aboutme.textContent = "About Me";

  //list
  const github_li = document.createElement('li');
  github_li.append(github);

  const foot_home_li = document.createElement('li');
  foot_home_li.append(foot_home);

  const foot_info_li = document.createElement('li');
  foot_info_li.append(foot_info);

  const foot_aboutme_li = document.createElement('li');
  foot_aboutme_li.append(foot_aboutme);

  //unordered lsit
  const foot_ul = document.createElement('ul');
  foot_ul.append(copy, github_li, foot_home_li, foot_info_li, foot_aboutme_li);

  //div
  const foot_div = document.createElement('div');
  foot_div.className = "footer-content";
  foot_div.append(foot_ul);

  const footer = document.createElement('footer');
  footer.append(foot_div);

  return footer;
};
