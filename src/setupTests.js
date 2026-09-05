// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// JSDOM doesn't implement TextEncoder/TextDecoder; react-router needs them.
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

// JSDOM doesn't implement matchMedia; antd's responsive Grid (Row/Col) needs it.
window.matchMedia =
  window.matchMedia ||
  ((query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));

// JSDOM doesn't implement IntersectionObserver; ScrollReveal needs it.
global.IntersectionObserver =
  global.IntersectionObserver ||
  class IntersectionObserver {
    observe() {}

    unobserve() {}

    disconnect() {}
  };
