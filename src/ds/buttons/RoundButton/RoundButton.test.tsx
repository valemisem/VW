import { render, screen, fireEvent } from "@testing-library/react";
import { RoundButton } from "./RoundButton";
import { FaBeer } from "react-icons/fa";

describe("RoundButton", () => {
  it("renders the icon", () => {
    render(<RoundButton Icon={FaBeer} />);
    // The icon renders as an SVG
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<RoundButton Icon={FaBeer} onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<RoundButton Icon={FaBeer} onClick={handleClick} disabled />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<RoundButton Icon={FaBeer} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies the className prop", () => {
    render(<RoundButton Icon={FaBeer} className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
