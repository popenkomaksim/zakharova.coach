export const FALLBACK_RATE_EUR_TO_UAH = 52.1;
export const MARKUP = 1.01;

const convert = (eur, rate = FALLBACK_RATE_EUR_TO_UAH) =>
  parseInt(eur * rate, 10);

export default convert;
