import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Hero from "./Hero";

const HeroWithRouter = () => (
  <MemoryRouter>
    <Hero />
  </MemoryRouter>
);

describe("Hero", () => {
  it("renders without crashing", () => {
    const { container } = render(<HeroWithRouter />);
    expect(container).toMatchSnapshot();
  });

  it("renders hero image", () => {
    const { getByAltText } = render(<HeroWithRouter />);
    const heroImage = getByAltText("hero");
    expect(heroImage).toMatchSnapshot();
  });

  it("renders start splitting button", () => {
    const { getByText } = render(<HeroWithRouter />);
    const startSplittingButton = getByText("Start Splitting");
    expect(startSplittingButton).toMatchSnapshot();
  });

  it("renders key features button", () => {
    const { getByText } = render(<HeroWithRouter />);
    const keyFeaturesButton = getByText("Key Features");
    expect(keyFeaturesButton).toMatchSnapshot();
  });

  it("renders image link", () => {
    const { getByText } = render(<HeroWithRouter />);
    const imageLink = getByText("Image by storyset on Freepik");
    expect(imageLink).toMatchSnapshot();
  });

  it("renders awkward text", () => {
    const { getByText } = render(<HeroWithRouter />);
    const awkwardText = getByText("awkward");
    expect(awkwardText).toMatchSnapshot();
  });

  //test navigation
  //   it("navigates to split page on start splitting button click", () => {
  //     const { getByText } = render(<HeroWithRouter />);
  //     const startSplittingButton = getByText("Start Splitting");
  //     startSplittingButton.click();

  //     //expect link to be changed
  //     expect(window.location.pathname).toBe("/");
  //   });
});
