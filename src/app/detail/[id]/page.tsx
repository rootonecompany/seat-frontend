import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Footer from "@/components/footer/Footer";
import Main from "./(main)/Main";
import FooterBar from "./(main)/component/FooterBar";

export default function Detail() {
    return (
        <Wrap fullWidth={true}>
            <Header
                headerContent={
                    <PrevHeader optionButton={true} overlap={true} />
                }
                overlap={true}
            />
            <Main />
            <Footer />
            <FooterBar />
        </Wrap>
    );
}