import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./";

describe("label component", () => {
  it("renders without className", () => {
    const labelText = "test-label";
    render(<Label text={labelText} />);
    const element = screen.getByText(labelText);
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("LABEL");
    expect(element).toHaveClass("w-full flex text-md text-dark pb-2");
  });
  it("renders with className", () => {
    const labelText = "test-label";
    const className = "custome-className";
    render(<Label text={labelText} className={className} />);
    const element = screen.getByText(labelText);
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("LABEL");
    expect(element).toHaveClass("w-full flex text-md text-dark pb-2");
    expect(element).toHaveClass(className);
  });
});
