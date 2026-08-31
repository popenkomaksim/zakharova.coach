import { useEffect, useState } from "react";
import axios from "axios";
import { FALLBACK_RATE_EUR_TO_UAH, MARKUP } from "../convert";

const NBU_EUR_RATE_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=eur&json";

const useExchangeRate = () => {
  const [rate, setRate] = useState(FALLBACK_RATE_EUR_TO_UAH);

  useEffect(() => {
    axios
      .get(NBU_EUR_RATE_URL)
      .then((response) => {
        const nbuRate = response.data?.[0]?.rate;
        if (typeof nbuRate === "number") {
          setRate(nbuRate * MARKUP);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching NBU exchange rate:", error);
      });
  }, []);

  return rate;
};

export default useExchangeRate;
