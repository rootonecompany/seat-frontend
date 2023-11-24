import Title from "@/components/Title";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function ReviewInfo() {
    return (
        <div>
            <TitleWrapper tag="h3" title="관람후기">
                <span>0</span>
            </TitleWrapper>
            <ReviewWrapper>
                <NoneReview>
                    <span>
                        공연장의 열기 그대로!
                        <br />
                        생생한 실감나는 후기를 남겨주세요.
                    </span>
                </NoneReview>
                <button>관람후기 작성하기</button>
            </ReviewWrapper>
        </div>
    );
}

const TitleWrapper = styled(Title)`
    &&& {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.3rem;
        padding-bottom: 0.9rem;
        border-bottom: 1px solid ${Colors.line2};
    }
    &&& > span {
        font-size: 0.9rem;
        font-weight: 600;
        color: ${Colors.primary};
    }
`;
const ReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    margin-top: 0.9rem;
    padding-bottom: 1.35rem;
    text-align: center;

    & > button {
        width: 6.3rem;
        height: 2rem;
        border-radius: 0.3rem;
        background-color: ${Colors.white};
        border: 1px solid ${Colors.primary};
        font-size: 0.65rem;
        font-weight: 600;
        color: ${Colors.primary};
    }
`;
const NoneReview = styled.div`
    margin-top: 0.9rem;
    & > span {
        font-size: 0.7rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${Colors.black2};
    }
`;
