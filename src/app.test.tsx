import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it('renders the text "React Framework"', () => {
    render(<App />);
    const element = document.querySelector(".app-container");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(
      "w-full h-screen flex items-center justify-center bg-light"
    );
  });
});
