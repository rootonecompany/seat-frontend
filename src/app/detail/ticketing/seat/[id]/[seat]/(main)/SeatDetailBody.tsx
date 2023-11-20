"use client";

import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedSeatState } from "@/recoil/atom";
import Title from "@/components/Title";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

import NoticeIcon from "public/images/icons/icon_notice.png";

export default function SeatDetailBody() {
    const selectedSeat = useRecoilValue(selectedSeatState);
    return (
        <Block>
            <Title tag="h3" title="좌석 선택" />
            <SelectSeat>
                {selectedSeat === "" ? (
                    <span>위에서 좌석을 선택해주세요.</span>
                ) : (
                    <>
                        <span>예매 좌석</span>
                        <strong>
                            R석 <span>{selectedSeat}</span>
                        </strong>
                    </>
                )}
            </SelectSeat>
            <Notice>
                <Image src={NoticeIcon} width={14} height={14} alt="notice" />
                <span>
                    회원 1인당 하나의 좌석만 선택하여 예매하실 수 있습니다.
                </span>
            </Notice>
        </Block>
    );
}

const Block = styled.section`
    padding: 1.2rem 0.9rem 0;
`;
const SelectSeat = styled.div`
    width: 100%;
    height: 3.1rem;
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line6};
    border-radius: 0.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.9rem;

    span {
        font-size: 0.65rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
    strong {
        font-size: 0.7rem;
        font-weight: 600;
        color: ${Colors.black3};

        span {
            font-size: 0.7rem;
            font-weight: 600;
            color: ${Colors.primary};
        }
    }
`;
const Notice = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    span {
        font-size: 0.6rem;
        font-weight: 300;
        color: ${Colors.black1};
    }
`;
