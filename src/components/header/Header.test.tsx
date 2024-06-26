import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const HeaderWithRouter = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);

describe("Header", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeaderWithRouter />);
    expect(container).toMatchSnapshot();
  });

  it("renders logo", () => {
    const { getByAltText } = render(<HeaderWithRouter />);
    const logo = getByAltText("their-share-logo");
    expect(logo).toMatchSnapshot();
  });

  it("renders dark mode toggle", () => {
    //   data-testid="dark-mode-desktop"
    //   data-testid="dark-mode-mobile"

    const { getByTestId } = render(<HeaderWithRouter />);
    const darkModeToggle = getByTestId("dark-mode-desktop");
    expect(darkModeToggle).toMatchSnapshot();
  });

  it("renders navigation links", () => {
    const { getByText } = render(<HeaderWithRouter />);
    const newShareLink = getByText("New Share");
    const featuresLink = getByText("Features");
    const aboutLink = getByText("About");
    expect(newShareLink).toMatchSnapshot();
    expect(featuresLink).toMatchSnapshot();
    expect(aboutLink).toMatchSnapshot();
  });

  it("renders dark mode toggle on mobile", () => {
    const { getByTestId } = render(<HeaderWithRouter />);
    const darkModeToggle = getByTestId("dark-mode-mobile");
    expect(darkModeToggle).toMatchSnapshot();
  });

  it("should open mobile menu", () => {
    const { getByTestId } = render(<HeaderWithRouter />);
    const mobileMenuButton = getByTestId("mobile-menu-button");
    fireEvent.click(mobileMenuButton);
    const mobileMenu = getByTestId("mobile-menu");
    expect(mobileMenu).toMatchSnapshot();
  });

  it("should close mobile menu", () => {
    const { getByTestId } = render(<HeaderWithRouter />);
    const mobileMenuButton = getByTestId("mobile-menu-button");
    fireEvent.click(mobileMenuButton);
    const mobileMenu = getByTestId("mobile-menu");
    expect(mobileMenu).toMatchSnapshot();
    const mobileMenuCloseButton = getByTestId("mobile-menu-button-close");
    fireEvent.click(mobileMenuCloseButton);
    expect(mobileMenu).toMatchSnapshot();
  });
});
