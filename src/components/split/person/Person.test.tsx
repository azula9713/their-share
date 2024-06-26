import { describe, expect, it } from "vitest";

import Person from "./Person";

describe("Person", () => {
  it("renders without crashing", () => {
    expect(<Person />).toMatchSnapshot();
  });
});
