import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Heading from "./Heading";
import { HEADING_TYPE, HeadingProps } from "./Heading.types";

describe("[ ATOMS ] Testing Component: '<Heading />'", () => {

    test("[ 1 ] attribute 'children' provided as text renders heading text", () => {
        const text: string = "heading text";
        const headingText: HeadingProps["children"] = text;
    
        render(<Heading children={headingText} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toBeInTheDocument();
    });

    test("[ 2 ] attribute 'children' provided as node renders node", () => {
        const text: string = "heading text";
        const headingText: HeadingProps["children"] = <div>{text}</div>;
    
        render(<Heading children={headingText} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toBeInTheDocument();
    });

    test("[ 3 ] attribute 'className' sets rendered heading 'class' attribute", () => {
        const text: string = "heading text";
        const className: HeadingProps["className"] = "test-class";
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} className={className} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toHaveClass(className);
    });

    test("[ 4 ] attribute 'id' sets rendered heading 'id' attribute", () => {
        const text: string = "heading text";
        const headingId: HeadingProps["id"] = "test-id";
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} id={headingId} type={HEADING_TYPE.H1} />)
        expect(screen.getByRole("heading", { name: text })).toHaveAttribute("id", headingId);
    });

    test("[ 5 ] HEADING_TYPE value 'H1' renders h1 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H1;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 1 })).toBeInTheDocument();
    });

    test("[ 6 ] HEADING_TYPE value 'H2' renders h2 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H2;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 2 })).toBeInTheDocument();
    });

    test("[ 7 ] HEADING_TYPE value 'H3' renders h3 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H3;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 3 })).toBeInTheDocument();
    });

    test("[ 8 ] HEADING_TYPE value 'H4' renders h4 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H4;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 4 })).toBeInTheDocument();
    });

    test("[ 9 ] HEADING_TYPE value 'H5' renders h5 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H5;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 5 })).toBeInTheDocument();
    });

    test("[ 10 ] HEADING_TYPE value 'H6' renders h6 heading element", () => {
        const text: string = "heading text";
        const headingType: HeadingProps["type"] = HEADING_TYPE.H6;
        const headingText: HeadingProps["children"] = text;

        render(<Heading children={headingText} type={headingType} />)
        expect(screen.getByRole("heading", { name: text, level: 6 })).toBeInTheDocument();
    });
});
