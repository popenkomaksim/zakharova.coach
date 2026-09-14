import { useEffect, useState } from "react";
import axios from "axios";
import { FALLBACK_RATE_EUR_TO_UAH, MARKUP } from "../convert";

const NBU_EUR_RATE_URL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=eur&json";

const STORAGE_KEY = "exchangeRate:eur-to-uah";

const getTodayKey = () => new Date().toISOString().slice(0, 10);

const readCachedRate = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { date, rate } = JSON.parse(raw);
    if (date === getTodayKey() && typeof rate === "number") {
      return rate;
    }
  } catch {
    // localStorage unavailable (private browsing, quota, etc) — ignore
  }
  return null;
};

const writeCachedRate = (rate) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ date: getTodayKey(), rate })
    );
  } catch {
    // ignore
  }
};

// Shared across every hook instance so StrictMode's double-invoked effects and
// remounts of `App` when navigating between its routes don't each fire their
// own request against the NBU API.
let ratePromise = null;

const fetchRate = () => {
  if (!ratePromise) {
    ratePromise = axios.get(NBU_EUR_RATE_URL).catch((error) => {
      ratePromise = null;
      throw error;
    });
  }
  return ratePromise;
};

export const resetExchangeRateCache = () => {
  ratePromise = null;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
};

const useExchangeRate = () => {
  const [rate, setRate] = useState(
    () => readCachedRate() ?? FALLBACK_RATE_EUR_TO_UAH
  );

  useEffect(() => {
    if (readCachedRate() !== null) return undefined;

    let cancelled = false;

    fetchRate()
      .then((response) => {
        if (cancelled) return;
        const nbuRate = response.data?.[0]?.rate;
        if (typeof nbuRate === "number") {
          const markedUpRate = nbuRate * MARKUP;
          setRate(markedUpRate);
          writeCachedRate(markedUpRate);
        }
      })
      .catch((error) => {
        if (cancelled) return;
        // eslint-disable-next-line no-console
        console.error("Error fetching NBU exchange rate:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return rate;
};

export default useExchangeRate;
