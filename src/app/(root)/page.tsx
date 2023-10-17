import Button from "@/components/Button";
import Header from "@/components/headers/Header";
import LabelInput from "@/components/input/LabelInput";
import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import Wrap from "@/components/template/Wrap";

export default function Home() {
    return (
        <Wrap>
            <Header />
            <LabelInput label="아이디" placeholder="아이디" />
            <Button buttonTypeStyle="normal">로그인</Button>
            <SwipperWrapper />
        </Wrap>
    );
}
