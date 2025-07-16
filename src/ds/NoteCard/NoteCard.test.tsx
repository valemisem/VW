import { render, screen, fireEvent } from "@testing-library/react";
import { NoteCard } from "./NoteCard";
import { MemoryRouter } from "react-router";

describe("NoteCard", () => {
  const defaultProps = {
    title: "Test Note",
    content: "This is a test note content.",
    to: "/note/1",
  };

  it("renders the title and content", () => {
    render(
      <MemoryRouter>
        <NoteCard {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Note")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test note content.")
    ).toBeInTheDocument();
  });

  it("renders edit and delete buttons (icons)", () => {
    render(
      <MemoryRouter>
        <NoteCard {...defaultProps} />
      </MemoryRouter>
    );
    // Both buttons should render an SVG icon
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(buttons[0].querySelector("svg")).toBeInTheDocument();
    expect(buttons[1].querySelector("svg")).toBeInTheDocument();
  });

  it("calls onEditClick when edit button is clicked", () => {
    const onEditClick = vi.fn();
    render(
      <MemoryRouter>
        <NoteCard {...defaultProps} onEditClick={onEditClick} />
      </MemoryRouter>
    );
    const editButton = screen.getAllByRole("button")[0];
    fireEvent.click(editButton);
    expect(onEditClick).toHaveBeenCalledTimes(1);
  });

  it("calls onDeleteClick when delete button is clicked", () => {
    const onDeleteClick = vi.fn();
    render(
      <MemoryRouter>
        <NoteCard {...defaultProps} onDeleteClick={onDeleteClick} />
      </MemoryRouter>
    );
    const deleteButton = screen.getAllByRole("button")[1];
    fireEvent.click(deleteButton);
    expect(onDeleteClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a link with the correct href", () => {
    render(
      <MemoryRouter>
        <NoteCard {...defaultProps} />
      </MemoryRouter>
    );
    // The container is a styled Link
    expect(screen.getByRole("link")).toHaveAttribute("href", "/note/1");
  });

  it("forwards additional props", () => {
    render(
      <MemoryRouter>
        <NoteCard
          {...defaultProps}
          className="custom-class"
          id="note-card-id"
        />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class");
    expect(link).toHaveAttribute("id", "note-card-id");
  });
});
