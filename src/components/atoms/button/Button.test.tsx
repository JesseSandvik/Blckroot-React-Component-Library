import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Button from "./Button";
import { ButtonType } from "./Button.types";

describe("[ ATOMS ] Testing Component: '<Button />'", () => {

  test("[ 1 ] attribute 'className' sets button 'class' attribute", () => {
    const className: string = "test-class";
    const buttonText: string = "click me";
    render(<Button className={className} type={ButtonType.BUTTON} text={buttonText} />)
    expect(screen.getByRole("button", { name: buttonText })).toHaveClass(className);
  });

  test("[ 2 ] attribute 'disabled' disables rendered button", () => {
    const buttonText: string = "click me";
    render(<Button disabled type={ButtonType.BUTTON} text={buttonText} />)
    expect(screen.getByRole("button", { name: buttonText })).toBeDisabled();
  });
});
