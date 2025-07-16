import { render, screen } from "@testing-library/react";
import { NavButton } from "./NavButton";
import { FaBeer } from "react-icons/fa";
import { MemoryRouter } from "react-router";

describe("NavButton", () => {
  it("renders the label", () => {
    render(
      <MemoryRouter>
        <NavButton Icon={FaBeer} label="Dashboard" to="/dashboard" />
      </MemoryRouter>
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(
      <MemoryRouter>
        <NavButton Icon={FaBeer} label="Icon Test" to="/icon" />
      </MemoryRouter>
    );
    // The icon renders as an SVG
    expect(screen.getByRole("link").querySelector("svg")).toBeInTheDocument();
  });

  it("renders as a link with the correct href", () => {
    render(
      <MemoryRouter>
        <NavButton Icon={FaBeer} label="Go Home" to="/home" />
      </MemoryRouter>
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/home");
  });

  it("forwards additional props", () => {
    render(
      <MemoryRouter>
        <NavButton
          Icon={FaBeer}
          label="With Props"
          to="/props"
          className="custom-class"
          id="nav-btn-id"
        />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class");
    expect(link).toHaveAttribute("id", "nav-btn-id");
  });
});
