import Header from "@/components/headers/Header";
import LabelInput from "@/components/input/LabelInput";
import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import Wrap from "@/components/template/Wrap";
import Link from "next/link";

export default function Home() {
    return (
        <Wrap>
            <Header />
            <LabelInput label="아이디" placeholder="아이디" />
            <SwipperWrapper />
            <Link href="/login">로그인</Link>
            <Link href="/register">회원가입</Link>
        </Wrap>
    );
}
