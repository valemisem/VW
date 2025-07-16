import { render, screen, fireEvent } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  it("renders the label when provided", () => {
    render(<TextField label="Username" required={false} ref={null} />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders the required asterisk when required", () => {
    render(<TextField label="Email" required={true} ref={null} />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders the input with placeholder and value", () => {
    render(
      <TextField
        required={false}
        placeholder="Type here"
        value="abc"
        ref={null}
      />
    );
    const input = screen.getByPlaceholderText("Type here");
    expect(input).toHaveValue("abc");
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<TextField required={false} onChange={handleChange} ref={null} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it("is readOnly when readOnly prop is true", () => {
    render(<TextField required={false} readOnly={true} ref={null} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("forwards maxLength, name, and value props", () => {
    render(
      <TextField
        required={false}
        maxLength={5}
        name="myfield"
        value="val"
        ref={null}
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("maxlength", "5");
    expect(input).toHaveAttribute("name", "myfield");
    expect(input).toHaveValue("val");
  });

  it("forwards ref to the input element", () => {
    const ref = { current: null as null | HTMLInputElement };
    render(<TextField required={false} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
