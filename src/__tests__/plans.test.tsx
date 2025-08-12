import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Plans from "../pages/plans";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("Plans Page", () => {
  it("muestra el título principal de la página", () => {
    render(<Plans />);
    expect(screen.getByText(/¿para quién deseas cotizar/i)).toBeInTheDocument();
  });
});
