import { render, screen, fireEvent } from "@testing-library/react";
import { TextAreaField } from "./TextAreaField";

describe("TextAreaField", () => {
  it("renders the label when provided", () => {
    render(<TextAreaField label="Description" ref={null} />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders the required asterisk when required", () => {
    render(<TextAreaField label="Notes" required ref={null} />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders the textarea with value and placeholder", () => {
    render(
      <TextAreaField ref={null} value="Initial value" placeholder="Type here" />
    );
    const textarea = screen.getByPlaceholderText("Type here");
    expect(textarea).toHaveValue("Initial value");
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<TextAreaField ref={null} onChange={handleChange} value="" />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "abc" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("forwards ref to the textarea element", () => {
    const ref = { current: null as null | HTMLTextAreaElement };
    render(<TextAreaField ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("applies additional props", () => {
    render(
      <TextAreaField
        ref={null}
        className="custom-class"
        id="textarea-id"
        data-testid="my-textarea"
      />
    );
    const textarea = screen.getByTestId("my-textarea");
    expect(textarea).toHaveAttribute("id", "textarea-id");
    expect(textarea).toHaveClass("custom-class");
  });

  it("renders without label", () => {
    render(<TextAreaField ref={null} />);
    // Should still render a textarea
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
