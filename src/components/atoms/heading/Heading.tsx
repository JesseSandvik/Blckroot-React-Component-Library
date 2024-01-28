import React from "react";
import { HeadingProps } from "./Heading.types";

function Heading({ children, className, id, type }: HeadingProps): React.ReactElement {
    return React.createElement(type, { className, id }, children);
}

export default Heading;
