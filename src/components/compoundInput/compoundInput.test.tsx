import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CompoundInput } from "./";
import { CompoundInputProps } from "./compoundInput.interface";

/**
 * scenarios
 * 1. render without passing any props
 * 2. render with props
 */
describe("CompoundInput component", () => {
  /**
   * render without passing any props
   * 1. input element must exist
   * 2. must have defualt type, name, id attribute
   * 3. value must be ""
   * 4. must have default classNames
   */
  it("must render without props", () => {
    render(<CompoundInput />);
    const element = document.querySelector(".compoundInput-container");
    // 1
    expect(element).toBeInTheDocument();
    expect(element?.nodeName).toBe("INPUT");
    // 2
    expect(element).toHaveAttribute("type", "text");
    expect(element).toHaveAttribute("name", "compoundInput");
    expect(element).toHaveAttribute("id", "compoundInput");
    // 3
    expect(element).toHaveAttribute("value", "");
    // 4
    expect(element).toHaveClass(
      "w-full h-10 flex items-center rounded-lg border border-neutral bg-light text-primary focus:border-primary outline-none text-primary text-lg px-2 compoundInput-container"
    );
  });

  /**
   * render with props
   * 1. input element must exist
   * 2. must accept passed type, name, id, and className attribute
   * 3. must accept value
   */
  it("must render with props", () => {
    const props: CompoundInputProps = {
      id: "custome-id",
      name: "custome-name",
      placeholder: "custome-placeholder",
      value: "custome-value",
      className: "custome-className",
      tabIndex: 1,
      type: "email",
    };
    render(<CompoundInput {...props} />);
    const element = document.querySelector(".compoundInput-container");
    // 1
    expect(element).toBeInTheDocument();
    expect(element?.nodeName).toBe("INPUT");
    // 2
    expect(element).toHaveAttribute("type", props.type);
    expect(element).toHaveAttribute("name", props.name);
    expect(element).toHaveAttribute("id", props.id);
    expect(element?.className).contain(props.className);
    // 3
    expect(element).toHaveAttribute("value", props.value);
  });
  /**
   * render with value and onChange
   * 1. must be called once
   * 2. must be called with certian object
   */
  it("calls onChange with correct value when input changes", () => {
    const handleOnChange = vi.fn();
    const initialValue = "initial value";
    const newValue = "new value";

    render(<CompoundInput onChange={handleOnChange} value={initialValue} />);

    const element = document.querySelector(".compoundInput-container");

    fireEvent.change(element!, { target: { value: newValue } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
