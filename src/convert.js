const rateEURtoUAH = 44.44;

const convert = (eur) => parseInt(eur * rateEURtoUAH, 10);

export default convert;
