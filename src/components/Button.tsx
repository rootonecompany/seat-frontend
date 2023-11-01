"use client";

import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sizeType: "sub" | "main" | "more";
}

export default function Button({ sizeType, ...rest }: Props) {
    return <StyledButton $sizeType={sizeType} {...rest} />;
}

const StyledButton = styled.button<{ $sizeType: "sub" | "main" | "more" }>`
    width: 100%;
    ${({ $sizeType }) => {
        switch ($sizeType) {
            case "main":
                return `
                    min-height:2.5rem;
                    border-radius: 0.3rem;
                `;
            case "sub":
                return `
                    min-height:2.4rem;
                    border-radius: 0.2rem;
                `;
            case "more":
                return `
                    min-height:2rem;
                    border-radius: 0.2rem;
                `;
        }
    }}
`;
