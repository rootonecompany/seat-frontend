"use client";

import Image from "next/image";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import Arrow from "public/images/icons/icon_down_arrow.png";

interface Props {
    seatName: string;
    onSelect: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function CustomSelectHeader({ seatName, onSelect }: Props) {
    return (
        <CustomStyledSelectHeader onClick={onSelect}>
            <span>{seatName === "" ? "선택" : seatName}</span>
            <Image
                src={Arrow}
                width={12}
                height={8}
                alt="구역을 선택해주세요."
            />
        </CustomStyledSelectHeader>
    );
}

const CustomStyledSelectHeader = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 2.2rem;
    border-radius: 0.2rem;
    border: 1px solid ${Colors.line6};
    padding: 0 0.9rem 0 0.8rem;

    span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black3};
    }

    img {
        display: block;
        position: absolute;
        right: 0.9rem;
        top: 50%;
        transform: translateY(-50%);
    }
`;
