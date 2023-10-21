"use client";

import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sizeType: "sub" | "main";
}

export default function Button({ sizeType, ...rest }: Props) {
    return <StyledButton $sizeType={sizeType} {...rest} />;
}

const StyledButton = styled.button<{ $sizeType: "sub" | "main" }>`
    width: 100%;
    ${({ $sizeType }) => {
        switch ($sizeType) {
            case "main":
                return `
                    height:2.5rem;
                    border-radius: 0.3rem;
                `;
            case "sub":
                return `
                    height:2.4rem;
                    border-radius: 0.2rem;
                `;
        }
    }}
`;
