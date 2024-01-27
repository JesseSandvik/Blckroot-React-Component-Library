import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Button from "./Button";
import { BUTTON_TYPE, ButtonProps } from "./Button.types";

describe("[ ATOMS ] Testing Component: '<Button />'", () => {

  test("[ 1 ] attribute 'className' sets rendered button 'class' attribute", () => {
    const className: ButtonProps["className"] = "test-class";
    const buttonText: ButtonProps["text"] = "click me";

    render(<Button 
      className={className}
      onClick={() => {}}
      type={BUTTON_TYPE.Button}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveClass(className);
  });

  test("[ 2 ] attribute 'disabled' disables rendered button", () => {
    const buttonText: ButtonProps["text"] = "click me";

    render(<Button
      disabled
      onClick={() => {}}
      type={BUTTON_TYPE.Button}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toBeDisabled();
  });

  test("[ 3 ] attribute 'type' sets rendered button 'type' attribute", () => {
    const buttonText: ButtonProps["text"] = "click me";
    const type: ButtonProps["type"] = BUTTON_TYPE.Button;

    render(<Button
      onClick={() => {}}
      type={type}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveAttribute("type", type);
  });

  test("[ 4 ] BUTTON_TYPE value 'Button' sets rendered button 'type' attribute to 'button'", () => {
    const expected: string = "button";
    const buttonText: ButtonProps["text"] = "click me";
    const type: ButtonProps["type"] = BUTTON_TYPE.Button;

    render(<Button
      onClick={() => {}}
      type={type}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveAttribute("type", expected);
  });

  test("[ 5 ] BUTTON_TYPE value 'Reset' sets rendered button 'type' attribute to 'reset'", () => {
    const expected: string = "reset";
    const buttonText: ButtonProps["text"] = "click me";
    const type: ButtonProps["type"] = BUTTON_TYPE.Reset;

    render(<Button
      onClick={() => {}}
      type={type}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveAttribute("type", expected);
  });

  test("[ 6 ] BUTTON_TYPE value 'Submit' sets rendered button 'type' attribute to 'submit'", () => {
    const expected: string = "submit";
    const buttonText: ButtonProps["text"] = "click me";
    const type: ButtonProps["type"] = BUTTON_TYPE.Submit;

    render(<Button
      onClick={() => {}}
      type={type}
      text={buttonText}
    />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveAttribute("type", expected);
  });
});
