"use client";

import Image from "next/image";
import styled from "styled-components";

import More from "public/images/icons/icon_more_dark.png";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sizeType: "sub" | "main" | "more";
    more?: boolean;
}

export default function Button({ sizeType, more = false, ...rest }: Props) {
    return (
        <StyledButton $sizeType={sizeType} {...rest}>
            {rest.children}
            {more && <Image src={More} width={8} height={12} alt="더보기" />}
        </StyledButton>
    );
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
