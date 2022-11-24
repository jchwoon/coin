import Coin from "./Component/Coin.js";
import Coins from "./Component/Coins.js";
import Header from "./Component/Header.js";
import NotFound from "./Component/NotFound.js";

const root = document.getElementById("root");
const header = document.getElementById("header");

export const render = async (link, id) => {
  const coinId = id ?? location.pathname.replace("/coin/", "");
  console.log(coinId);
  const routes = [
    { path: `/coin/${coinId}`, content: Coin },
    { path: "/", content: Coins },
  ];
  const currLink = link ?? window.location.pathname;
  try {
    const component =
      routes.find((route) => route.path === currLink)?.content || NotFound;
    header.replaceChildren(Header());
    root.replaceChildren(await component(id));
  } catch (error) {
    console.error(error.message);
  }
};

header.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.getAttribute("href");
  const currPath = location.pathname;
  e.preventDefault();
  if (!target.closest("a")) return;
  if (currPath === link) return;
  window.history.pushState(null, null, link);
  render(link);
});

window.addEventListener("popstate", () => render(location.pathname));
window.addEventListener("DOMContentLoaded", () => render(location.pathname));
