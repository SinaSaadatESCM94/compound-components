import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Fieldset } from ".";

describe("Fieldset component", () => {
  it("renders correctly with children", () => {
    const { getByText } = render(<Fieldset>Test Child</Fieldset>);
    const element = getByText("Test Child");
    expect(element).toBeTruthy();
    expect(element.nodeName).toBe("FIELDSET");
  });

  it("applies custom class names", () => {
    const { getByText } = render(
      <Fieldset className="custom-class">Test Child</Fieldset>
    );
    const element = getByText("Test Child");
    expect(element).toHaveClass("w-full flex flex-col");
    expect(element).toHaveClass("custom-class");
  });
});
