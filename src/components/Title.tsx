"use client";

import { Colors } from "@/styles/Colors";
import styled from "styled-components";

interface Props {
    title: string;
    subTitle?: string;
    tag?: "h2" | "h3";
    padding?: string | undefined;
    className?: string;
}

export default function Title({
    title,
    subTitle,
    tag = "h2",
    padding,
    className,
}: Props) {
    return (
        <TitleWrap $padding={padding} className={className}>
            {tag === "h2" && <h2>{title}</h2>}
            {tag === "h3" && <h3>{title}</h3>}
            {subTitle && <span>{subTitle}</span>}
        </TitleWrap>
    );
}

const TitleWrap = styled.div<{ $padding: string | undefined }>`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    ${({ $padding }) => $padding && `padding: ${$padding};`}

    & > h2 {
        font-size: 1rem;
        font-weight: 700;
        color: ${Colors.black3};
        line-height: 1.5;
    }
    & > h3 {
        font-size: 0.9rem;
        font-weight: 600;
        color: ${Colors.black3};
        line-height: 1.1;
    }
    & > span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
`;
