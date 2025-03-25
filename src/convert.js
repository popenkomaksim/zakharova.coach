const rateEURtoUAH = 45.05;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

export default convert;
