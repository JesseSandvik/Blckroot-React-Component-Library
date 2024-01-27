import { MouseEventHandler } from "react";

export enum BUTTON_TYPE {
    Button = "button",
    Reset = "reset",
    Submit = "submit"
}

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    type: BUTTON_TYPE;
}
