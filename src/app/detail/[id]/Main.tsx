"use client";

import Wrap from "@/components/template/Wrap";
import styled from "styled-components";

import Sample from "public/images/sample/sample_concert.png";

export default function Main() {
    return (
        <Wrap fullWidth={true}>
            <ThumbnailWrap>
                <Thumbnail />
            </ThumbnailWrap>
        </Wrap>
    );
}

const ThumbnailWrap = styled.div`
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
const Thumbnail = styled.div``;
