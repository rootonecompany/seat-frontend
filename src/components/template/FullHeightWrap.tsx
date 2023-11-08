"use client";

import styled from "styled-components";

interface Props {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

export default function FullHeightWrap({ children, className, as }: Props) {
    return (
        <Block className={className} as={as}>
            {children}
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: calc(100vh - 3.6rem);
    display: flex;
    flex-direction: column;
`;
