import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Textbox from "./Textbox";

describe("Textbox", () => {
  it("renders correctly", () => {
    const { container } = render(<Textbox />);
    expect(container).toMatchSnapshot();
  });

  it("renders with placeholder", () => {
    const { container } = render(<Textbox placeholder="Test" />);
    expect(container.querySelector("input")?.getAttribute("placeholder")).toBe(
      "Test"
    );
  });

  it("renders with value", () => {
    const { container } = render(<Textbox value="Test" />);
    expect(container.querySelector("input")?.getAttribute("value")).toBe(
      "Test"
    );
  });

  it("renders with onChange", () => {
    const mockOnChange = vi.fn();
    const { container } = render(<Textbox onChange={mockOnChange} />);
    fireEvent.change(container.querySelector("input")!, {
      target: { value: "Test" },
    });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("renders with custom text", () => {
    const { container } = render(<Textbox placeholder="Custom Text" />);
    expect(container.querySelector("input")?.getAttribute("placeholder")).toBe(
      "Custom Text"
    );
  });
});
