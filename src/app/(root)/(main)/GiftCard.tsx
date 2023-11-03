import Wrap from "@/components/template/Wrap";
import Title from "@/components/Title";
import MoreButton from "@/components/MoreButton";
import GiftCardSwiper from "./component/GiftCardSwiper";

export default function GiftCard() {
    return (
        <Wrap fullWidth={true}>
            <Title
                title="모바일 상품권샵"
                tag="h2"
                padding="1.5rem 0 0 0.9rem"
            />
            <GiftCardSwiper />
            <MoreButton>
                <span>상품권 더보기</span>
            </MoreButton>
        </Wrap>
    );
}
