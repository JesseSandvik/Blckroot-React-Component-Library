import { ReactNode } from "react";

export enum HEADING_TYPE {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}

export interface HeadingProps {
    children: ReactNode,
    className?: string;
    id?: string;
    type: HEADING_TYPE;
}
