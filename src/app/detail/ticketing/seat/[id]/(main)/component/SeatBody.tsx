"use client";
import CustomSelect from "./select/CustomSelect";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import SeatPrice from "./SeatPrice";

const options = ["001", "002", "003", "004", "005", "006", "007", "008"];

export default function SeatBody() {
    return (
        <Block>
            <TitleWrapper>
                <h6>구역을 선택해주세요.</h6>
                <span>
                    좌석을 선택하시면 각 구역 별 잔여좌석을 확인할 수 있습니다.
                </span>
            </TitleWrapper>
            <CustomSelect selectSeatOption={options} />
            <SeatPrice />
        </Block>
    );
}

const Block = styled.div`
    padding: 1.5rem 0.9rem 1.95rem;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: ${Colors.black3};
    }
    span {
        font-size: 0.65rem;
        font-weight: 300;
        line-height: 1.4;
        color: ${Colors.black1};
        word-break: keep-all;
    }
`;
