const cachingData = new Map();

const caching = (data) => {
  data.map((coin) => {
    cachingData.set(coin.id, coin);
    return cachingData;
  });
};

const FetchData = async (url) => {
  const data = await (await fetch(url)).json();
  console.log(data);

  caching(data);
  return data;
};

export const FetchCoinInfo = async (url) => {
  const data = await (await fetch(url)).json();
  return data;
};

const resultData = (url) => {
  if (cachingData.size === 0) {
    return FetchData(url);
  } else {
    return cachingData;
  }
};
export default resultData;
