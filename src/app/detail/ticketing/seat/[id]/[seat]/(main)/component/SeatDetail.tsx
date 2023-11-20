"use client";

import { RealTimeSeatType } from "@/interface";
import { useSetRecoilState } from "recoil";
import { selectedSeatState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { useEffect } from "react";

interface Props {
    seat: RealTimeSeatType[];
}

export default function SeatDetail({ seat }: Props) {
    const setSelectedSeat = useSetRecoilState(selectedSeatState);

    const handleSelectSeat = (seatName: string) => {
        setSelectedSeat(seatName);
    };

    useEffect(() => {
        return () => {
            setSelectedSeat("");
        };
    }, [setSelectedSeat]);

    return (
        <SeatDetailViewWrapper>
            {seat.map((item) => (
                <SeatDetailView key={item.id}>
                    <span>{item.name}</span>
                    <SeatWrapper>
                        {item.seat.map((seat) => (
                            <Seat
                                key={seat.id}
                                className={`state_${seat.state}`}
                                onClick={() =>
                                    handleSelectSeat(
                                        `${item.name} ${seat.id}번`
                                    )
                                }
                                disabled={seat.state === 0 || seat.state === 2}
                            />
                        ))}
                    </SeatWrapper>
                </SeatDetailView>
            ))}
        </SeatDetailViewWrapper>
    );
}

const SeatDetailViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 1rem 0.9rem 3.6rem;
    border-bottom: 1px solid ${Colors.line2};
    overflow-x: scroll;
    overscroll-behavior: contain;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const SeatDetailView = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    span {
        min-width: 2.35rem;
        font-size: 0.5rem;
        font-weight: 300;
        color: ${Colors.black2};
    }
`;
const SeatWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.1rem;
    padding-right: 0.9rem;
`;
const Seat = styled.button`
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${Colors.disabled0};
    &.state_0 {
        background-color: ${Colors.white};
    }
    &.state_1 {
        background-color: ${Colors.primary};
    }
    &.state_2 {
        background-color: ${Colors.subprimary};
    }
`;
