import Wrap from "@/components/template/Wrap";
import Header from "@/components/headers/Header";
import PrevHeader from "@/components/headers/PrevHeader";
import Main from "./(main)/Main";
import Footer from "@/components/footer/Footer";

export default function Ticketing() {
    return (
        <Wrap fullWidth={true}>
            <Header
                headerContent={<PrevHeader overlap={true} />}
                overlap={true}
            />
            <Main />
            <Footer />
        </Wrap>
    );
}
