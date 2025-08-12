import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renderiza el logo y el texto correctamente", () => {
    render(<Header />);
    // Buscar el logo por SVG
    const logoSvg = screen.getByTestId("logo-svg");
    expect(logoSvg).toBeInTheDocument();
  });
});
beforeAll(() => {
  // Mock global para window.matchMedia
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

describe("Header", () => {
  it("renderiza el texto de contacto correctamente", () => {
    render(<Header />);
    expect(screen.getByText(/compra por este medio/i)).toBeInTheDocument();
  });
});
