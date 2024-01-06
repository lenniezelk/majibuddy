export const mlToCups = (ml: number, cupSize: number) =>
  (ml / cupSize).toFixed(1);
export const mlToLitres = (ml: number) => (ml / 1000).toFixed(1);
