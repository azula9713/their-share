import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DarkMode from "./DarkMode";

const toggleTheme = vi.fn();
describe("DarkMode", () => {
  it("renders correctly", () => {
    const { container } = render(
      <DarkMode theme="light" toggleTheme={toggleTheme} />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders dark mode", () => {
    const { container } = render(
      <DarkMode theme="dark" toggleTheme={toggleTheme} />
    );
    expect(
      container.querySelector("svg")?.attributes.getNamedItem("icon-attribute")
        ?.value
    ).toBe("sun");
  });

  it("renders light mode", () => {
    const { container } = render(
      <DarkMode theme="light" toggleTheme={toggleTheme} />
    );
    expect(
      container.querySelector("svg")?.attributes.getNamedItem("icon-attribute")
        ?.value
    ).toBe("moon");
  });

  it("should call toggleTheme when clicked", () => {
    const toggleTheme = vi.fn();
    const { container } = render(
      <DarkMode theme="light" toggleTheme={toggleTheme} />
    );
    container.querySelector("button")?.click();
    expect(toggleTheme).toHaveBeenCalled();
  });
});
