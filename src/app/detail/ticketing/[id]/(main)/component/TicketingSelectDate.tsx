"use client";

import { useState } from "react";
import SelectDateButton from "@/components/SelectDateButton";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import DropDown from "public/images/btns/btn_dropdown.png";

const date = [
    "11월 20일",
    "11월 21일",
    "11월 22일",
    "11월 23일",
    "11월 24일",
    "11월 25일",
    "11월 26일",
];

export default function TicketingSelectDate() {
    const [dropdown, setDropdown] = useState(true);
    const [activeButtons, setActiveButtons] = useState(
        new Array(date.length).fill(false)
    );
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

    const handleToggleActive = (index: number) => {
        const newActiveButtons = activeButtons.map((_, i) => i === index);
        setActiveButtons(newActiveButtons);
        setSelectedButtonIndex(index);
    };
    const handleDropDown = () => {
        setDropdown(!dropdown);
    };

    return (
        <Block>
            <DateWrapper>
                <span>2023.11월</span>
                <MoreButton $dropdown={dropdown} onClick={handleDropDown}>
                    더보기
                </MoreButton>
            </DateWrapper>
            {dropdown && (
                <SelectDateWrapper>
                    {date.map((item, index) => (
                        <SelectDateButton
                            key={index}
                            disabled={index === 0 || index === 1 || index === 2}
                            active={activeButtons[index]}
                            onClick={() => handleToggleActive(index)}
                        >
                            {item}
                        </SelectDateButton>
                    ))}
                </SelectDateWrapper>
            )}
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const DateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    span {
        font-size: 1.1rem;
        font-weight: 600;
        color: ${Colors.black3};
    }
`;
const MoreButton = styled.button<{ $dropdown: boolean }>`
    width: 1.5rem;
    height: 1.5rem;
    background: url(${DropDown.src}) no-repeat center / cover;
    font-size: 0;

    ${({ $dropdown }) =>
        !$dropdown &&
        `
        transform: rotate(180deg);
    `}
`;
const SelectDateWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.4rem 0.45rem;
    padding-bottom: 0.75rem;
`;
