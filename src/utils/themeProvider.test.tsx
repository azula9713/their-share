import { renderHook } from "@testing-library/react-hooks";
import { act, ReactNode } from "react";
import { describe, expect, it } from "vitest";

import { ThemeProvider, useTheme } from "./themeProvider";

describe("ThemeProvider", () => {
  it("should toggle theme", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );
    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
  });

  it("should persist theme in local storage", () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );
    const { result } = renderHook(() => useTheme(), { wrapper });

    const currentTheme = result.current.theme;

    act(() => {
      result.current.toggleTheme();
    });

    expect(window.localStorage.getItem("theme")).toBe(
      currentTheme === "dark" ? "light" : "dark"
    );
  });
});
