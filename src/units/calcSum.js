const calcSum = (items, activeCurrency) => {
  let newPrice = 0;
  for (let i = 0; i < items.length; i += 1) {
    const element = JSON.parse(items[i][0]);
    const itemPriceAtr = element.prices.find(
      (index) => index.currency.symbol === activeCurrency,
    );
    newPrice += itemPriceAtr.amount * items[i][1];
  }
  return newPrice;
};
export default calcSum;
