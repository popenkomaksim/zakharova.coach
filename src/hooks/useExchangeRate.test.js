import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import useExchangeRate from "./useExchangeRate";
import { FALLBACK_RATE_EUR_TO_UAH, MARKUP } from "../convert";

jest.mock("axios");

describe("useExchangeRate", () => {
  afterEach(() => {
    jest.resetAllMocks();
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
});
