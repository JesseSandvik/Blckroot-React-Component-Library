import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Heading from "./Heading";
import { HEADING_TYPE, HeadingProps } from "./Heading.types";

describe("[ ATOMS ] Testing Component: '<Heading />'", () => {

    test("[ 1 ] attribute 'children' sets rendered heading text", () => {
        const text: string = "heading text";
        const headingText: HeadingProps["children"] = text;
    
        render(<Heading children={headingText} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toBeInTheDocument();
    });

    test("[ 2 ] attribute 'className' sets rendered heading 'class' attribute", () => {
        const text: string = "heading text";
        const className: HeadingProps["className"] = "test-class";
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} className={className} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toHaveClass(className);
    });

    test("[ 3 ] attribute 'id' sets rendered heading 'id' attribute", () => {
        const text: string = "heading text";
        const headingId: HeadingProps["id"] = "test-id";
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} id={headingId} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toHaveAttribute("id", headingId);
    });
});
