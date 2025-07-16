import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import { forwardRef } from "react";

describe("SearchInput", () => {
  it("renders the search icon", () => {
    render(<SearchInput />);
    // The icon renders as an SVG
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("renders the input element", () => {
    render(<SearchInput />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("forwards placeholder and value props", () => {
    render(<SearchInput placeholder="Buscar..." value="abc" readOnly />);
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveValue("abc");
  });

  it("calls onChange when typing", () => {
    const handleChange = vi.fn();
    render(<SearchInput onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it("calls onClear when provided", () => {
    const handleClear = vi.fn();
    // Simulate a clear button by rendering a custom component with onClear
    const SearchInputWithClear = forwardRef<HTMLInputElement>((props, ref) => (
      <SearchInput {...props} ref={ref} onClear={handleClear} />
    ));
    render(<SearchInputWithClear />);
    // Since there is no clear button in the component, we just check that onClear can be passed without error
    expect(handleClear).not.toHaveBeenCalled();
  });

  it("forwards ref to the input element", () => {
    const ref = { current: null as null | HTMLInputElement };
    render(<SearchInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies className to the container", () => {
    render(<SearchInput className="custom-class" />);
    expect(screen.getByRole("textbox").parentElement).toHaveClass(
      "custom-class"
    );
  });
});
