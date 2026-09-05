import convert, { FALLBACK_RATE_EUR_TO_UAH, MARKUP } from "./convert";

describe("convert", () => {
  test("converts using the fallback rate when none is provided", () => {
    expect(convert(10)).toBe(Math.trunc(10 * FALLBACK_RATE_EUR_TO_UAH));
  });

  test("converts using a custom rate when provided", () => {
    expect(convert(10, 40)).toBe(400);
  });

  test("truncates fractional results instead of rounding", () => {
    // 10 * 40.09 = 400.9, which should truncate down to 400, not round to 401
    expect(convert(10, 40.09)).toBe(400);
  });

  test("returns 0 for a 0 EUR amount", () => {
    expect(convert(0, 40)).toBe(0);
  });

  test("MARKUP is a small positive multiplier applied on top of the bank rate", () => {
    expect(MARKUP).toBeGreaterThan(1);
    expect(MARKUP).toBeLessThan(1.1);
  });
});
