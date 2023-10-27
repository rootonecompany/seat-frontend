"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FullHeightWrap from "@/components/template/FullHeightWrap";
import AgreementCheckBox from "@/components/checkbox/AgreementCheckBox";
import Button from "@/components/Button";

import { OptionalAgreedsType, RequiredAgreedsType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function TermsForm() {
    const router = useRouter();
    const [fullAgreed, setFullAgreed] = useState(false);
    const [requiredAgreeds, setRequiredAgreeds] = useState<RequiredAgreedsType>(
        {
            agreement_required_1: false,
            agreement_required_2: false,
            agreement_required_3: false,
        }
    );
    const [optionalAgreeds, setOptionalAgreeds] = useState<OptionalAgreedsType>(
        {
            agreement_optional_1: false,
            agreement_optional_2: false,
        }
    );

    const handleFullAgreedChange = () => {
        setFullAgreed(!fullAgreed);

        setRequiredAgreeds({
            agreement_required_1: !fullAgreed,
            agreement_required_2: !fullAgreed,
            agreement_required_3: !fullAgreed,
        });

        setOptionalAgreeds({
            agreement_optional_1: !fullAgreed,
            agreement_optional_2: !fullAgreed,
        });
    };

    const handleRequiredAgreedChange = (id: keyof RequiredAgreedsType) => {
        const newRequiredAgreeds = {
            ...requiredAgreeds,
            [id]: !requiredAgreeds[id],
        };
        setRequiredAgreeds(newRequiredAgreeds);

        const isAllAgreed = Object.values(newRequiredAgreeds).every(
            (agreed) => agreed
        );

        setFullAgreed(isAllAgreed);
    };

    const handleOptionalAgreedChange = (id: keyof OptionalAgreedsType) => {
        const newOptionalAgreeds = {
            ...optionalAgreeds,
            [id]: !optionalAgreeds[id],
        };
        setOptionalAgreeds(newOptionalAgreeds);
    };

    const handleNextButtonClick = () => {
        router.push("/register");
    };

    return (
        <FullHeightWrap>
            <Block>
                <FullAgreementBlock>
                    <AgreementCheckBox
                        mode="full"
                        lableTitle="약관 전체 동의"
                        id="agreement_all"
                        checked={fullAgreed}
                        onChange={handleFullAgreedChange}
                    />
                </FullAgreementBlock>
                <AgreementBlock>
                    <h6>필수 동의 항목</h6>
                    <AgreementForms>
                        <AgreementCheckBox
                            mode="half"
                            lableTitle="[필수] 이용약관"
                            href="#"
                            id="agreement_required_1"
                            onChange={() =>
                                handleRequiredAgreedChange(
                                    "agreement_required_1"
                                )
                            }
                            checked={requiredAgreeds.agreement_required_1}
                        />
                        <AgreementCheckBox
                            mode="half"
                            lableTitle="[필수] 전자금융거래 이용약관"
                            href="#"
                            id="agreement_required_2"
                            onChange={() =>
                                handleRequiredAgreedChange(
                                    "agreement_required_2"
                                )
                            }
                            checked={requiredAgreeds.agreement_required_2}
                        />
                        <AgreementCheckBox
                            mode="half"
                            lableTitle="[필수] 개인정보 수집동의서"
                            href="#"
                            id="agreement_required_3"
                            onChange={() =>
                                handleRequiredAgreedChange(
                                    "agreement_required_3"
                                )
                            }
                            checked={requiredAgreeds.agreement_required_3}
                        />
                    </AgreementForms>
                </AgreementBlock>
                <AgreementBlock>
                    <h6>선택 동의 항목</h6>
                    <AgreementForms>
                        <AgreementCheckBox
                            mode="half"
                            lableTitle="[선택] 개인정보 수집동의서"
                            href="#"
                            id="agreement_optional_1"
                            onChange={() =>
                                handleOptionalAgreedChange(
                                    "agreement_optional_1"
                                )
                            }
                            checked={optionalAgreeds.agreement_optional_1}
                        />
                        <AgreementCheckBox
                            mode="half"
                            lableTitle="[선택] 위치기반서비스 이용약관"
                            href="#"
                            id="agreement_optional_2"
                            onChange={() =>
                                handleOptionalAgreedChange(
                                    "agreement_optional_2"
                                )
                            }
                            checked={optionalAgreeds.agreement_optional_2}
                        />
                    </AgreementForms>
                </AgreementBlock>
                <NextButton
                    sizeType="main"
                    disabled={
                        !requiredAgreeds.agreement_required_1 ||
                        !requiredAgreeds.agreement_required_2 ||
                        !requiredAgreeds.agreement_required_3
                    }
                    onClick={handleNextButtonClick}
                >
                    다음
                </NextButton>
            </Block>
        </FullHeightWrap>
    );
}

const Block = styled.div`
    padding-top: 2.4rem;
`;
const FullAgreementBlock = styled.div`
    padding-bottom: 1rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const AgreementBlock = styled.div`
    margin-top: 1rem;
    & > h6 {
        font-size: 0.7rem;
        color: ${Colors.black3};
        font-weight: 600;
    }

    & + & {
        margin-bottom: 3rem;
    }
`;
const AgreementForms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-top: 0.9rem;
`;
const NextButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
        color: ${Colors.white};
    }
`;
