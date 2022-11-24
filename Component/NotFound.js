const NotFound = () => {
  const template = document.createElement("template");
  template.innerHTML = "<h1>404 NotFound</h1>";

  return template.content;
};

export default NotFound;
