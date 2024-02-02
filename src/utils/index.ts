export const currencyFormat = (value: number, fixed?: number) => {
  if (fixed)
    return value.toFixed(fixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
