import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../components/Footer";

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

describe("Footer", () => {
  it("muestra el texto de copyright", () => {
    render(<Footer />);
    // Buscar el año y la palabra RIMAC
    expect(
      screen.getByText((content) => content.includes("RIMAC"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("2023"))
    ).toBeInTheDocument();
  });
});
