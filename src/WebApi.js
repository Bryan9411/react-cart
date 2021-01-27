const url = "https://demojson.herokuapp.com/cart";

// 拿到商品資訊 API
export const getCardInfo = () => {
  return fetch(`${url}`).then((res) => res.json());
};
