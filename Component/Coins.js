import { render } from "../index.js";
import resultData from "../data/FetchData.js";

const Coins = async () => {
  const dataList = await resultData("https://api.coinpaprika.com/v1/coins");
  const template = document.createElement("template");
  let appendString = "";
  let data = dataList;
  if (!Array.isArray(data)) {
    const list = [...data].slice(0, 100);
    data = list.flatMap((num) => num).filter((ele) => typeof ele === "object");
  } else {
    data = dataList.slice(0, 100);
  }
  data.map((ele) => {
    appendString += `<li id=${ele.id}>${ele.name}</li>`;
  });

  template.innerHTML = `
  <div class="container">
    <h1>Coins</h1>
    <div>
      <ul class="coin-list">
        ${appendString}
      </ul>
    </div>
  </div>
`;
  const coinList = template.content.querySelector(".coin-list");
  coinList.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest("li")) return;
    window.history.pushState(null, null, `/coin/${target.closest("li").id}`);
    render(`/coin/${target.closest("li").id}`, target.closest("li").id);
  });

  return template.content;
};

export default Coins;
