"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    seatName: string;
    selectName: string;
    handleSelect: (
        e: React.MouseEvent<HTMLDivElement>,
        selectedSeat: string
    ) => void;
}

export default function CustomSelectContentItem({
    seatName,
    selectName,
    handleSelect,
}: Props) {
    return (
        <CustomStyledSelectContentItem
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                handleSelect(e, seatName)
            }
            className={seatName === selectName ? "active" : ""}
        >
            {seatName}
        </CustomStyledSelectContentItem>
    );
}

const CustomStyledSelectContentItem = styled.div`
    padding: 0.4rem 0;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.black1};
    cursor: pointer;
    &.active {
        color: ${Colors.primary};
    }
`;
