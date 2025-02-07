import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ErrorMessage } from "./";

describe("ErrorMessage component", () => {
  it("render with empty string", () => {
    render(<ErrorMessage textError="" />);
    const element = screen.getByRole("alert");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("SPAN");
    expect(element).toHaveClass("w-full flex text-sm text-error pt-2");
  });
  it("render", () => {
    const textError = "this is a error";
    render(<ErrorMessage textError={textError} />);
    const element = screen.getByText(textError);
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("SPAN");
    expect(element).toHaveClass("w-full flex text-sm text-error pt-2");
  });
});
