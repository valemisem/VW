import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "./PrimaryButton";
import { FaBeer } from "react-icons/fa";

describe("PrimaryButton", () => {
  it("renders the label", () => {
    render(<PrimaryButton Icon={FaBeer} label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(<PrimaryButton Icon={FaBeer} label="Icon Test" />);
    // The icon renders as an SVG inside the icon container
    const iconContainer = screen
      .getByRole("button")
      .querySelector(".primary-button-icon-container");
    expect(iconContainer?.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <PrimaryButton Icon={FaBeer} label="Click Me" onClick={handleClick} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <PrimaryButton
        Icon={FaBeer}
        label="Disabled"
        onClick={handleClick}
        disabled
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<PrimaryButton Icon={FaBeer} label="Disabled" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies the className prop", () => {
    render(
      <PrimaryButton
        Icon={FaBeer}
        label="Class Test"
        className="custom-class"
      />
    );
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("renders without label", () => {
    render(<PrimaryButton Icon={FaBeer} />);
    // Should render an empty span inside the text container
    const textContainer = screen
      .getByRole("button")
      .querySelector(".primary-button-text-container");
    expect(textContainer?.querySelector("span")).toBeInTheDocument();
  });
});
