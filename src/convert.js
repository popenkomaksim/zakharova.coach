const rateEURtoUAH = 41.95;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

export default convert;
