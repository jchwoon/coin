import { FetchCoinInfo } from "../data/FetchData.js";

const Coin = async (id) => {
  const coinId = id ?? location.pathname.replace("/coin/", "");
  const data = await FetchCoinInfo(
    `https://api.coinpaprika.com/v1/tickers/${coinId}`
  );
  console.log(data);
  const template = document.createElement("template");

  template.innerHTML = `<h1>Hello ${coinId}</h1>`;
  return template.content;
};

export default Coin;
