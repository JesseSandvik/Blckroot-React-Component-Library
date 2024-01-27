import React from "react";
import { ButtonProps } from "./Button.types";

function Button ({
    disabled,
    onClick,
    text
}: ButtonProps): React.ReactElement<ButtonProps> {
    return (
        <button
            disabled={disabled}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
