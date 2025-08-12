import { InputProps } from "./interfaces";
import "./styles.scss";

export const Input = ({
  variant = "default",
  label,
  isValid = true,
  ...rest
}: InputProps) => {
  return (
    <div
      className={`input-container ${variant} ${
        isValid ? "default-border-color" : "error-border-color"
      }`}
    >
      <label
        htmlFor={rest.name}
        className={`${isValid ? "default-color" : "error-color"}`}
      >
        {label}
      </label>
      <input id={rest.name} {...rest} />
    </div>
  );
};
