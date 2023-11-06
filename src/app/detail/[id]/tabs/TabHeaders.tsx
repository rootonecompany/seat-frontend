"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

const TabButtons = ["공연정보", "판매정보", "관람후기"];

interface Props {
    handleChangeTab: (index: number) => void;
    tab: number;
}

export default function TabHeaders({ handleChangeTab, tab }: Props) {
    return (
        <TabButtonWrapper>
            {TabButtons.map((button, index) => (
                <TabButton
                    key={index}
                    onClick={() => handleChangeTab(index)}
                    className={tab === index ? "active" : ""}
                >
                    {button}
                </TabButton>
            ))}
        </TabButtonWrapper>
    );
}

const TabButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.3rem;
`;
const TabButton = styled.button`
    flex: 1;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};
    font-size: 0.7rem;
    font-weight: 500;
    color: ${Colors.black3};

    &.active {
        background-color: ${Colors.black3};
        color: ${Colors.white};
        font-weight: 700;
    }
`;
