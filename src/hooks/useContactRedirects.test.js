import { renderHook } from "@testing-library/react";
import useContactRedirects from "./useContactRedirects";

describe("useContactRedirects", () => {
  let originalLocation;

  beforeEach(() => {
    global.gtag = jest.fn();
    originalLocation = window.location;
    delete window.location;
    window.location = { href: "" };
  });

  afterEach(() => {
    delete global.gtag;
    window.location = originalLocation;
  });

  test("redirectToTelegram fires a conversion event and redirects to Telegram", () => {
    const { result } = renderHook(() => useContactRedirects());

    result.current.redirectToTelegram();

    expect(global.gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: "AW-999571981/sZFuCK_qmJgZEI2E0dwD",
    });
    expect(window.location.href).toBe("https://telegram.me/ZakharovaPolina");
  });

  test("redirectToWhatsup fires a conversion event and redirects to WhatsApp", () => {
    const { result } = renderHook(() => useContactRedirects());

    result.current.redirectToWhatsup();

    expect(global.gtag).toHaveBeenCalledWith("event", "conversion", {
      send_to: "AW-999571981/zy2UCKrrmJgZEI2E0dwD",
    });
    expect(window.location.href).toBe("https://wa.me/380633862021");
  });
});
