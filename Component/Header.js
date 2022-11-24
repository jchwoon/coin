const Header = () => {
  const template = document.createElement("template");
  template.innerHTML = `<ul><li><a href="/">Coins</li></ul>`;
  return template.content;
};

export default Header;
