const rateEURtoUAH = 47.52;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

export default convert;
