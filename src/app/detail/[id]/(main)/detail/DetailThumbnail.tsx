"use client";

import styled from "styled-components";

import Sample from "public/images/sample/sample_concert.png";

interface Props {
    children?: React.ReactNode;
}

export default function DetailThumbnail({ children }: Props) {
    return (
        <ThumbnailWrap>
            <ThumbnailBackground>{children}</ThumbnailBackground>
            {!children && <Thumbnail />}
        </ThumbnailWrap>
    );
}

const ThumbnailWrap = styled.div`
    position: relative;
`;
const ThumbnailBackground = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: calc(180 / 360 * 100%);
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        left: -10%;
        top: -10%;
        width: 120%;
        height: 120%;
        background: url(${Sample.src}) no-repeat center / cover;
        filter: blur(0.7rem);
        z-index: 50;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 100;
    }
`;
const Thumbnail = styled.div`
    position: absolute;
    left: 50%;
    top: 3.6rem;
    transform: translateX(-50%);
    width: 100%;
    height: 0;
    padding-bottom: calc(160 / 360 * 100%);
    background: url(${Sample.src}) no-repeat center / contain;
    filter: drop-shadow(0 0.1rem 0.5rem rgba(0, 0, 0, 0.15));
    z-index: 150;
`;
