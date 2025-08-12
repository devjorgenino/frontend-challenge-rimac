import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../components/Checkbox";

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

describe("Checkbox", () => {
  it("renderiza el checkbox correctamente", () => {
    render(<Checkbox text="Acepto" checked={false} />);
    expect(screen.getByText(/acepto/i)).toBeInTheDocument();
  });
});
