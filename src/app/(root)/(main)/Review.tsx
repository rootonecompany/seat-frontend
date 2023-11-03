import Wrap from "@/components/template/Wrap";
import Title from "@/components/Title";
import ReviewSwiper from "./component/ReviewSwiper";

export default function Review() {
    return (
        <Wrap fullWidth={true}>
            <Title title="최신 이용후기 💬" padding="1.5rem 0 0 0.9rem" />
            <ReviewSwiper />
        </Wrap>
    );
}
