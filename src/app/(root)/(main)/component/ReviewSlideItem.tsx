"use client";

import Image from "next/image";
import { ReviewType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: ReviewType;
}

import Star from "public/images/icons/icon_rank.png";

export default function ReviewSlideItem({ item }: Props) {
    const { title, rating, name, content, image } = item;
    return (
        <ReviewWrapper>
            <ReviewHeader>
                <Image src={image} width={48} height={58} alt="콘서트" />
                <div>
                    <h6>{title}</h6>
                    <div>
                        <div>
                            <Image
                                src={Star}
                                width={13}
                                height={12}
                                alt="평점"
                            />
                            <span>{rating}</span>
                        </div>
                        <span>{name}</span>
                    </div>
                </div>
            </ReviewHeader>
            <ReviewContent>
                <span>{content}</span>
            </ReviewContent>
        </ReviewWrapper>
    );
}

const ReviewWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.8rem 0.9rem 0.9rem;
    background-color: ${Colors.white};
    border-radius: 0.5rem;
    border: 1px solid ${Colors.line1};
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.06);
`;
const ReviewHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;

    & > img {
        min-width: 2.4rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        & > h6 {
            font-size: 0.75rem;
            font-weight: 600;
            color: ${Colors.black3};
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        & > div {
            display: flex;
            align-items: center;
            gap: 0.65rem;

            & > div {
                position: relative;
                display: flex;
                align-items: center;
                gap: 0.2rem;

                span {
                    font-size: 0.6rem;
                    letter-spacing: -0.01px;
                    font-weight: 600;
                    color: ${Colors.black2};
                }

                &::after {
                    content: "";
                    position: absolute;
                    right: -0.3rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 0.5rem;
                    background-color: ${Colors.line3};
                }
            }

            & > span {
                font-size: 0.6rem;
                line-height: 1.5;
                font-weight: 400;
                color: ${Colors.black1};
            }
        }
    }
`;
const ReviewContent = styled.div`
    width: 100%;
    padding: 0.6rem;
    border-radius: 0.3rem;
    background-color: ${Colors.disabled1};

    span {
        font-size: 0.65rem;
        font-weight: 300;
        line-height: 1.3;
        color: ${Colors.black3};
        word-break: keep-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;
