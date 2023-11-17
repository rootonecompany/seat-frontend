"use client";

import { useEffect, useState } from "react";
import { useDynamicRouter } from "@/hooks/useDynamicRoute";
import CustomSelectHeader from "./CustomSelectHeader";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import CustomSelectContentItem from "./CustomSelectContentItem";

interface Props {
    selectSeatOption: string[];
}

export default function CustomSelect({ selectSeatOption }: Props) {
    const { id, handleDynamicRouter } = useDynamicRouter();
    const [selected, setSelected] = useState<boolean>(false);
    const [selectedSeat, setSelectedSeat] = useState<string>("");

    const onSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setSelected((prev) => !prev);
    };
    const handleSelect = (
        e: React.MouseEvent<HTMLDivElement>,
        selectedSeat: string
    ) => {
        e.stopPropagation();
        setSelectedSeat(selectedSeat);
        setSelected(false);
    };

    const handleWindowClick = (e: MouseEvent) => {
        setSelected(false);
    };
    useEffect(() => {
        window.addEventListener("click", handleWindowClick);

        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);
    return (
        <SelectForm>
            <CustomSelectWrapper>
                <CustomSelectHeader
                    seatName={selectedSeat}
                    onSelect={onSelect}
                />
                {selected && (
                    <CustomSelectContent>
                        {selectSeatOption.map((item, index) => (
                            <CustomSelectContentItem
                                key={index}
                                seatName={item}
                                selectName={selectedSeat}
                                handleSelect={handleSelect}
                            />
                        ))}
                    </CustomSelectContent>
                )}
            </CustomSelectWrapper>
            <CustomSelectButton
                disabled={selectedSeat === ""}
                onClick={() =>
                    handleDynamicRouter(
                        `/detail/ticketing/seat/${id}/${selectedSeat}`
                    )
                }
            >
                좌석보기
            </CustomSelectButton>
        </SelectForm>
    );
}

const SelectForm = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 1rem;
    padding-bottom: 1.65rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const CustomSelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;
const CustomSelectContent = styled.div`
    position: absolute;
    left: 0;
    top: 2.4rem;
    width: 100%;
    height: 8.8rem;
    overflow-y: scroll;
    overscroll-behavior: contain;
    padding: 0.6rem 0.8rem;
    border-radius: 0.3rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.gray0};
    box-shadow: 0px 0.2rem 0.6rem rgba(0, 0, 0, 0.05);
`;
const CustomSelectButton = styled.button`
    min-width: 5.1rem;
    height: 2.2rem;
    border-radius: 0.2rem;
    background-color: ${Colors.primary};
    font-size: 0.7rem;
    font-weight: 700;
    color: ${Colors.white};
    &:disabled {
        background-color: ${Colors.disabled3};
        color: ${Colors.white};
    }
`;
