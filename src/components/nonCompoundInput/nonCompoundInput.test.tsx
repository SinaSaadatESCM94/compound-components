import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { NonCompoundInput } from "./";
import { NonCompoundInputProps } from "./nonCompoundInput.interface";

/**
 * scenarios
 * 1. render without passing any props
 * 2. render with props
 */
describe("NonCompoundInput component", () => {
  /**
   * render without passing any props
   * 1. input element must exist
   * 2. must have defualt type, name, id attribute
   * 3. value must be ""
   * 4. must not have label
   * 5. must not have validationMessage
   * 6. must have default classNames
   */
  it("must render without props", () => {
    const { baseElement } = render(<NonCompoundInput />);
    const element = document.querySelector(".nonCompoundInput-container");
    // 1
    expect(element).toBeInTheDocument();
    expect(element?.nodeName).toBe("INPUT");
    // 2
    expect(element).toHaveAttribute("type", "text");
    expect(element).toHaveAttribute("name", "nonCompoundInput");
    expect(element).toHaveAttribute("id", "nonCompoundInput");
    // 3
    expect(element).toHaveAttribute("value", "");
    // 4
    const labelNode = baseElement.querySelector("label");
    expect(labelNode).not.toBeInTheDocument();
    // 5
    const validationMessageNode = baseElement.querySelector("span");
    expect(validationMessageNode).not.toBeInTheDocument();
    // 6
    expect(element).toHaveClass(
      "w-full h-10 flex items-center rounded-lg border border-neutral bg-light text-primary focus:border-primary outline-none text-primary text-lg px-2 nonCompoundInput-container"
    );
  });

  /**
   * render with props
   * 1. input element must exist
   * 2. must accept passed type, name, id, and className attribute
   * 3. must accept value
   * 4. must have label, accept label className, and label value
   * 5. must have validationMessage
   */
  it("must render with props", () => {
    const props: NonCompoundInputProps = {
      id: "custome-id",
      name: "custome-name",
      placeholder: "custome-placeholder",
      label: "custome-label",
      errorMessage: "custome-error",
      value: "custome-value",
      className: "custome-className",
      labelClassName: "custome-label-className",
      tabIndex: 1,
      type: "email",
    };
    const { baseElement } = render(<NonCompoundInput {...props} />);
    const element = document.querySelector(".nonCompoundInput-container");
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
    // 4
    const labelNode = baseElement.querySelector("label");
    expect(labelNode).toBeInTheDocument();
    expect(labelNode?.innerHTML).toBe(props.label);
    expect(labelNode?.className).contain(props.labelClassName);
    // 5
    const validationMessageNode = baseElement.querySelector("span");
    expect(validationMessageNode).toBeInTheDocument();
    expect(validationMessageNode?.innerHTML).toBe(props.errorMessage);
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

    render(<NonCompoundInput onChange={handleOnChange} value={initialValue} />);

    const element = document.querySelector(".nonCompoundInput-container");

    fireEvent.change(element!, { target: { value: newValue } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
