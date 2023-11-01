"use client";

import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { ConcertBannerType } from "@/interface";

interface Props {
    item: ConcertBannerType;
}

export default function BannerSlideItem({ item }: Props) {
    const { mainTitle, subHeading, bannerImage, date } = item;
    return (
        <SwiperItemWrapper $banner={bannerImage}>
            <SwiperItemContent>
                <h2>{mainTitle}</h2>

                <Image src={bannerImage} alt={mainTitle} />
                <div className="info">
                    <span className="title">{subHeading}</span>
                    <span className="date">{date}</span>
                </div>
            </SwiperItemContent>
        </SwiperItemWrapper>
    );
}

const SwiperItemWrapper = styled.div<{ $banner: StaticImageData }>`
    position: relative;
    max-width: 100%;
    height: 0;
    padding-bottom: calc(436 / 328 * 100%);
    border-radius: 0.8rem;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(0.5rem);
        z-index: 50;
        ${({ $banner }) =>
            `background: url(${$banner.src}) no-repeat center / cover;`}
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 100;
    }
`;
const SwiperItemContent = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    z-index: 200;

    h2 {
        position: absolute;
        left: 1.5rem;
        top: 1.5rem;
        font-size: 1.15rem;
        font-weight: 600;
        line-height: 1.4;
        color: ${Colors.white};
        white-space: pre-line;
    }

    img {
        width: 60%;
        height: auto;
        margin-top: 1.2rem;
    }

    .info {
        position: absolute;
        left: 1.5rem;
        bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        .title,
        .date {
            font-size: 0.7rem;
            font-weight: 400;
            color: ${Colors.white};
        }
        .date {
            font-weight: 300;
        }
    }
`;
