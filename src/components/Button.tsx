"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonTypeStyle?: "primary" | "normal" | "disabled";
}

export default function Button({
    buttonTypeStyle = "disabled",
    ...rest
}: Props) {
    return <StyledButton $typeStyle={buttonTypeStyle} {...rest} />;
}

const StyledButton = styled.button<{
    $typeStyle: "primary" | "normal" | "disabled";
}>`
    width: 100%;
    height: 2.2rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
    background-color: ${(props) =>
        (props.$typeStyle === "primary" && Colors.primary) ||
        (props.$typeStyle === "normal" && Colors.black3) ||
        (props.$typeStyle === "disabled" && Colors.disabled3)};
`;
