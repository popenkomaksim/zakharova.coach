const useContactRedirects = () => {
  const redirectToTelegram = () => {
    // eslint-disable-next-line
    gtag("event", "conversion", {
      send_to: "AW-999571981/sZFuCK_qmJgZEI2E0dwD",
    });
    window.location.href = "https://telegram.me/ZakharovaPolina";
  };

  const redirectToWhatsup = () => {
    // eslint-disable-next-line
    gtag("event", "conversion", {
      send_to: "AW-999571981/zy2UCKrrmJgZEI2E0dwD",
    });
    window.location.href = "https://wa.me/380633862021";
  };

  return { redirectToTelegram, redirectToWhatsup };
};

export default useContactRedirects;
