import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Footer from "@/components/footer/Footer";
import Main from "./(main)/Main";

export default function ReservedSeat() {
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
        </Wrap>
    );
}
