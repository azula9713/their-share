import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ThemeProvider } from "../../../utils/themeProvider";
import Logo from "./Logo";

import logo from "../../../assets/theirsharelogo.png";
import darkLogo from "../../../assets/theirsharelogodark.png";

describe("Logo", () => {
  it("renders correctly", () => {
    const { container } = render(<Logo darkLogo={darkLogo} logo={logo} />);
    expect(container).toMatchSnapshot();
  });

  it("renders dark logo", () => {
    //add class dark to the body
    document.body.classList.add("dark");

    const { container } = render(
      <ThemeProvider>
        <Logo darkLogo={darkLogo} logo={logo} />
      </ThemeProvider>
    );
    expect(container.querySelector("img")?.getAttribute("src")).toBe(darkLogo);
  });

  it("renders light logo by default", () => {
    //remove class dark from the body
    document.body.classList.remove("dark");

    const { container } = render(<Logo darkLogo={darkLogo} logo={logo} />);
    expect(container.querySelector("img")?.getAttribute("src")).toBe(logo);
  });
});
