import React from "react";
import { ButtonProps } from "./Button.types";

function Button ({
    className,
    disabled,
    onClick,
    text,
    type
}: ButtonProps): React.ReactElement<ButtonProps> {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            type={type}>
                {text}
            </button>
    );
}

export default Button;
