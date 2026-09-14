import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import useExchangeRate, { resetExchangeRateCache } from "./useExchangeRate";
import { FALLBACK_RATE_EUR_TO_UAH, MARKUP } from "../convert";

jest.mock("axios");

describe("useExchangeRate", () => {
  afterEach(() => {
    jest.resetAllMocks();
    resetExchangeRateCache();
  });

  test("returns the fallback rate before the request resolves", () => {
    axios.get.mockReturnValue(new Promise(() => {}));

    const { result } = renderHook(() => useExchangeRate());

    expect(result.current).toBe(FALLBACK_RATE_EUR_TO_UAH);
  });

  test("applies the markup to the fetched NBU rate once resolved", async () => {
    axios.get.mockResolvedValue({ data: [{ rate: 45 }] });

    const { result } = renderHook(() => useExchangeRate());

    await waitFor(() => expect(result.current).toBe(45 * MARKUP));
  });

  test("keeps the fallback rate when the response has no numeric rate", async () => {
    axios.get.mockResolvedValue({ data: [] });

    const { result } = renderHook(() => useExchangeRate());

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(result.current).toBe(FALLBACK_RATE_EUR_TO_UAH);
  });

  test("keeps the fallback rate when the request fails", async () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    axios.get.mockRejectedValue(new Error("network error"));

    const { result } = renderHook(() => useExchangeRate());

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    expect(result.current).toBe(FALLBACK_RATE_EUR_TO_UAH);
    // eslint-disable-next-line no-console
    console.error.mockRestore();
  });

  test("only fires a single network request across multiple hook instances", async () => {
    axios.get.mockResolvedValue({ data: [{ rate: 45 }] });

    const first = renderHook(() => useExchangeRate());
    const second = renderHook(() => useExchangeRate());

    await waitFor(() => expect(first.result.current).toBe(45 * MARKUP));
    await waitFor(() => expect(second.result.current).toBe(45 * MARKUP));

    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("restores a same-day rate from localStorage without hitting the network", () => {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(
      "exchangeRate:eur-to-uah",
      JSON.stringify({ date: today, rate: 45 * MARKUP })
    );

    const { result } = renderHook(() => useExchangeRate());

    expect(result.current).toBe(45 * MARKUP);
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("ignores a cached rate from a previous day and refetches", async () => {
    localStorage.setItem(
      "exchangeRate:eur-to-uah",
      JSON.stringify({ date: "2000-01-01", rate: 45 * MARKUP })
    );
    axios.get.mockResolvedValue({ data: [{ rate: 50 }] });

    const { result } = renderHook(() => useExchangeRate());

    await waitFor(() => expect(result.current).toBe(50 * MARKUP));
  });
});
