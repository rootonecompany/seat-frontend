"use client";

import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { Colors } from "@/styles/Colors";

import CheckOff from "/public/images/btns/btn_check_off.png";
import CheckOn from "/public/images/btns/btn_check_on.png";
import More from "/public/images/icons/icon_more.png";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    mode: "full" | "half";
    lableTitle: string;
    href?: string;
}

export default function AgreementCheckBox({
    mode = "half",
    lableTitle,
    href,
    ...rest
}: Props) {
    return (
        <AgreementForm>
            <AgreementItem $mode={mode}>
                <input type="checkbox" {...rest} />
                <label htmlFor={rest.id}>{lableTitle}</label>
            </AgreementItem>
            {href && (
                <Link href={href}>
                    <Image src={More} width={8} height={12} alt="더보기" />
                </Link>
            )}
        </AgreementForm>
    );
}

const AgreementForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AgreementItem = styled.div<{ $mode: "full" | "half" }>`
    label {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        height: 1.1rem;
        text-indent: 1.6rem;
        background: url(${CheckOff.src}) no-repeat left center / 1.1rem 1.1rem;
        font-size: 0.7rem;
        color: ${Colors.black2};
        font-weight: 400;

        ${(props) =>
            props.$mode === "full" &&
            css`
                font-size: 0.9rem;
                color: ${Colors.black3};
                font-weight: 600;
            `}
    }

    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"]:checked + label {
        background: url(${CheckOn.src}) no-repeat left center / 1.1rem 1.1rem;
    }
`;
