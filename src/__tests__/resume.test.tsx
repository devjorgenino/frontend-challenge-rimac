import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Resume from "../pages/resume";

describe("Resume Page", () => {
  it("muestra el resumen de la cotización", () => {
    render(<Resume />);
    // Verifica que al menos un elemento contiene el texto 'Resumen'
    const resumenElements = screen.getAllByText(/resumen/i);
    expect(resumenElements.length).toBeGreaterThan(0);
  });
});
