import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Main from "./(main)/Main";
import Footer from "@/components/footer/Footer";
import FooterBar from "./(main)/component/FooterBar";

export default function RealTimeSeat() {
    return (
        <Wrap fullWidth={true}>
            <Header
                headerContent={
                    <PrevHeader
                        label="2023 조용필＆위대한탄생 콘서트_[대구]"
                        overlap={false}
                    />
                }
                overlap={false}
            />
            <Main />
            <Footer />
            <FooterBar />
        </Wrap>
    );
}
