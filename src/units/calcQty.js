const calcQty = (items) => {
  return (items.reduce((sum, next) => (sum + next[1]),0));
};

export default calcQty;

