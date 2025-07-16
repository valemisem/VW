import { render, screen, fireEvent } from "@testing-library/react";
import { TertiaryButton } from "./TertiaryButton";

describe("TertiaryButton", () => {
  it("renders the label", () => {
    render(<TertiaryButton label="Tertiary" />);
    expect(screen.getByText("Tertiary")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<TertiaryButton label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<TertiaryButton label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<TertiaryButton label="Disabled" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies the id and className props", () => {
    render(
      <TertiaryButton
        label="Props"
        id="tertiary-id"
        className="tertiary-class"
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "tertiary-id");
    expect(button).toHaveClass("tertiary-class");
  });

  it("renders with default size (small)", () => {
    render(<TertiaryButton label="Default Size" />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ minWidth: "" }); // No min-width for small
  });

  it("renders with large size", () => {
    render(<TertiaryButton label="Large Size" size="large" />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ minWidth: "312px" });
  });

  it("renders without label", () => {
    render(<TertiaryButton />);
    // Should render an empty button (no span)
    const button = screen.getByRole("button");
    expect(button.querySelector("span")).not.toBeInTheDocument();
  });
});
