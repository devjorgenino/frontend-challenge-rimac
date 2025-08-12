import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  it("muestra el título principal", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const chips = screen.getAllByText(/seguro salud flexible/i);
    expect(chips.length).toBeGreaterThanOrEqual(2);
    const titles = screen.getAllByText(/creado para ti y tu familia/i);
    expect(titles.length).toBeGreaterThanOrEqual(2);
  });
});
