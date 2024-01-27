import { MouseEventHandler } from "react";

export enum ButtonType {
    BUTTON = "button",
    RESET = "reset",
    SUBMIT = "submit"
}

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    name?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    type: ButtonType;
}
