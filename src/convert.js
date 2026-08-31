const rateEURtoUAH = 52.1;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

export default convert;
