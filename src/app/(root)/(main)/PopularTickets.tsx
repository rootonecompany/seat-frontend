import Wrap from "@/components/template/Wrap";
import Title from "@/components/Title";
import PopularSwiper from "@/app/(root)/(main)/component/PopularSwiper";
import MoreButton from "@/components/MoreButton";

export default function PopularTickets() {
    return (
        <Wrap fullWidth={true}>
            <Title
                title="오늘의 인기 티켓 🔥"
                tag="h2"
                subTitle="지금 가장 인기있는 HOT한 공연"
                padding="1.5rem 0 0 0.9rem"
            />
            <PopularSwiper />
            <MoreButton>
                <span>인기 티켓 더보기</span>
            </MoreButton>
        </Wrap>
    );
}
