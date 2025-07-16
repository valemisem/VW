import { render, screen, fireEvent } from "@testing-library/react";
import { SecondaryButton } from "./SecondaryButton";
import { FaBeer } from "react-icons/fa";

describe("SecondaryButton", () => {
  it("renders the label", () => {
    render(<SecondaryButton label="My Button" />);
    expect(screen.getByText("My Button")).toBeInTheDocument();
  });

  it("renders the icon if provided", () => {
    render(<SecondaryButton label="Icon Button" Icon={FaBeer} />);
    // The icon renders as an SVG
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<SecondaryButton label="Clickable" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<SecondaryButton label="Disabled" onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies the id and className props", () => {
    render(
      <SecondaryButton label="Props Test" id="test-id" className="test-class" />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "test-id");
    expect(button).toHaveClass("test-class");
  });

  it("is disabled when disabled prop is true", () => {
    render(<SecondaryButton label="Disabled" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders without label or icon", () => {
    render(<SecondaryButton />);
    // Should render an empty button (with a div inside)
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
