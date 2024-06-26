import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import CTAButton from "./CTAButton";

describe("CTAButton", () => {
  it("renders correctly", () => {
    const { container } = render(<CTAButton text="Test" />);
    expect(container).toMatchSnapshot();
  });

  it("renders primary button", () => {
    const { container } = render(<CTAButton text="Test" hierarchy="primary" />);
    expect(
      container.querySelector("button")?.classList.contains("bg-primary")
    ).toBe(true);
  });

  it("renders secondary button", () => {
    const { container } = render(
      <CTAButton text="Test" hierarchy="secondary" />
    );
    expect(
      container.querySelector("button")?.classList.contains("bg-slate-100")
    ).toBe(true);
  });

  it("renders disabled button", () => {
    const { container } = render(<CTAButton text="Test" disabled />);
    expect(container.querySelector("button")?.hasAttribute("disabled")).toBe(
      true
    );
  });

  it("renders enabled button", () => {
    const { container } = render(<CTAButton text="Test" />);
    expect(container.querySelector("button")?.hasAttribute("disabled")).toBe(
      false
    );
  });

  it("renders with onClick", () => {
    const mockOnClick = vi.fn();
    const { container } = render(
      <CTAButton text="Test" onClick={mockOnClick} />
    );
    container.querySelector("button")?.click();
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("renders with custom text", () => {
    const { container } = render(<CTAButton text="Custom Text" />);
    expect(container.querySelector("button")?.textContent).toBe("Custom Text");
  });

  //should trigger default onClick function
  it("renders with default onClick", () => {
    const { container } = render(<CTAButton text="Test" />);
    container.querySelector("button")?.click();
    expect(container.querySelector("button")?.textContent).toBe("Test");
  });
});
