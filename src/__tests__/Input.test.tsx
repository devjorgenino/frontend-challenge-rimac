import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "../components/Input";

describe("Input", () => {
  it("renderiza el input correctamente", () => {
    render(<Input label="Nombre" name="nombre" isValid={true} />);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
  });
});
